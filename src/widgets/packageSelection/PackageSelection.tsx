import classes from "./PackageSelection.module.scss"
import {PackageCard} from "@src/features/packageCard";
import {useSelector} from "react-redux";
import {selectBookingTariffs} from "@src/app/redux/Booking/BookingSlice";
import {Durations, packages} from "@src/widgets/packageSelection/model/PackageCardModel";
import {regDate} from "@src/shared/constants";
import {useState} from "react";
import {DateInputType} from "@src/widgets/reservWorkspaces/widgets/reserv-additional/ReservAdditional";
import {Tariffs} from "@src/app/redux/Booking/BookingTypes";


type GroupedInputsType = {
  PrivateWorkspaces: DateInputType[]
  FixedDesk: DateInputType[]
  NonFixedDesk: DateInputType[]
}


export const PackageSelection = () => {
  const selectedTariffs = useSelector(selectBookingTariffs)
  const [privateWs, setPrivateWs] = useState('0')
  const [fixedWs, setFixedWs] = useState('0')
  const [nonFixedWs, setNonFixedWs] = useState('0')


  const inputs: GroupedInputsType = {
    PrivateWorkspaces: [
      {
        input: {
          value: privateWs,
          setValue: setPrivateWs
        },
        valid: regDate.test(privateWs)
      }
    ],
    FixedDesk: [
      {
        input: {
          value: fixedWs,
          setValue: setFixedWs
        },
        valid: regDate.test(fixedWs)
      }
    ],
    NonFixedDesk: [
      {
        input: {
          value: nonFixedWs,
          setValue: setNonFixedWs
        },
        valid: regDate.test(nonFixedWs)
      }
    ]
  }

  const sortedPackages = packages.reduce((acc: {info: string, title: Tariffs, price: string}[], curr) => {
    if (curr.title === selectedTariffs) {
      return [curr, ...acc];
    } else {
      return [...acc, curr];
    }
  }, []);

  return (
    <>
      <div className={classes.packages}>
        {sortedPackages.map((pack) =>
          <PackageCard
            key={pack.title}
            durations={Durations[pack.title]}
            info={pack.info}
            title={pack.title}
            variant={selectedTariffs === pack.title ? "selected" : "disabled"}
            price={pack.price}
            inputs={pack.title === Tariffs.PRIVATE_OFFICE ? inputs.PrivateWorkspaces :
              (pack.title === Tariffs.FIXED_DESK ? inputs.FixedDesk : inputs.NonFixedDesk)}
          />
        )
        }
      </div>
    </>
  );
};