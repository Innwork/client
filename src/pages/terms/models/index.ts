import {TSection} from "@src/widgets/sidebar/Sidebar";

export const TermsSections:TSection[] = [
  {
    id: "1",
    title: '1. ABOUT USER AGREEMENT',
  },
  {
    id: "2",
    title: '2. SUBJECT OF THE AGREEMENT',
  },
  {
    id: "3",
    title: '3. RIGHTS AND OBLIGATIONS OF THE PARTIES',
    subSections: [
      {
        id: "3.1",
        title: '3.1. The INNWORK website administration has the right to:',
      },
      {
        id: "3.2",
        title: '3.2. The administrator undertakes:',
      },
      {
        id: "3.3",
        title: '3.3. The user has the right:',
      },
      {
        id: "3.4",
        title: '3.4. The site user undertakes:',
      },
      {
        id: "3.5",
        title: '3.5. The site user is prohibited from:',
      },
    ],
  },
  {
    id: "4",
    title: '4. USE OF THE SITE',
  },
  {
    id: "5",
    title: '5. RESPONSIBILITY',
    subSections: [
      {
        id: "5.2",
        title: '5.2. The administration of the INNWORK website is not responsible for:',
      }
    ],
  },
  {
    id: "6",
    title: '6. VIOLATION OF THE TERMS OF USER AGREEMENT',
  },
  {
    id: "7",
    title: '7. DISPUTE RESOLUTION',
  },
  {
    id: "8",
    title: '8. ADDITIONAL TERMS',
  },
];