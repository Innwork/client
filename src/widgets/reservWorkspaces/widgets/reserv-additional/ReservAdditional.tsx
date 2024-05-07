import classes from "@src/widgets/reservWorkspaces/widgets/reserv-additional/style/reservAdditional.module.scss"
import {reservAdditionalModel} from "@src/widgets/reservWorkspaces/model/reservAdditionalModal";
import {useState} from "react";
import {BookingWorkspaceItems} from "@src/widgets/additional/ui/BookingAdditionalWorkspace";
import {useTranslation} from "react-i18next";
import {Workspaces} from "@src/app/redux/Booking/BookingTypes";
import {regDate} from "@src/shared/constants";
import {useActions} from "@src/app/redux/hooks/useActions";

export type DateInputType = {
  input: {
    value: string
    setValue:  (i: string) => void
  }
  valid: boolean
}

type GroupedInputsType = {
  TrainingCenter: DateInputType[]
  MeetingRoom: DateInputType[]
  BusinessLounge: DateInputType[]
}

export const ReservAdditional = () => {
  const [activeWorkspace, setActiveWorkspace] = useState<Workspaces | ''>(null);
  const {t} = useTranslation('main')
  const {setWorkspace} = useActions()
  const [trainingCentre, setTrainingCentre] = useState('0')
  const [meetingRoom, setMeetingRoom] = useState('0')
  const [businessLounge, setBusinessLounge] = useState('0')

  const inputs: GroupedInputsType = {
    TrainingCenter: [
      {
        input: {
          value: trainingCentre,
          setValue: setTrainingCentre
        },
        valid: regDate.test(trainingCentre)
      }
    ],
    MeetingRoom: [
      {
        input: {
          value: meetingRoom,
          setValue: setMeetingRoom
        },
        valid: regDate.test(meetingRoom)
      }
    ],
    BusinessLounge: [
      {
        input: {
          value: businessLounge,
          setValue: setBusinessLounge
        },
        valid: regDate.test(businessLounge)
      }
    ]
  }

  const sortedPackages = reservAdditionalModel.pagination.reduce((acc: {src: string, tag?: string, header: string, title: string, price: string}[], curr) => {
    if (curr.header === activeWorkspace) {
      return [curr, ...acc];
    } else {
      return [...acc, curr];
    }
  }, []);

  console.log(sortedPackages, activeWorkspace, "bimbim")

  const saveTariffDates = (title: string, startDay: string, startTime: string, endTime: string) => {
      const item = reservAdditionalModel.pagination.find((space) => space.header === title)
      if (item && startDay != '0') {
        setWorkspace({workspaceName: title as Workspaces, time: `${startTime} - ${endTime}`, imagePath: item.src, title: item.title})
        setWorkspace({workspaceName: title as Workspaces, imagePath: item.src, title: item.title, duration: `${startDay.replace(/-/g, '/')} - ${startDay.replace(/-/g, '/')}`})
      }
  }

  return (
    <div className={classes.pagination_column}>
      {
        sortedPackages.map((el) =>
          <BookingWorkspaceItems
            saveWorkspace={saveTariffDates}
            inputs={el.tag === Workspaces.TRAINING_CENTER ? inputs.TrainingCenter : (el.tag === Workspaces.MEETING_ROOM ? inputs.MeetingRoom : inputs.BusinessLounge)}
            src={el.src}
            header={t(el.header)}
            title={t(el.title)}
            price={t(el.price)}
            tag={el.tag as Workspaces}
            key={el.src}
            workSpaces={{
              activeWorkspace: activeWorkspace,
              setActiveWorkspace: setActiveWorkspace
            }}
          />
        )
      }
    </div>
  );
};