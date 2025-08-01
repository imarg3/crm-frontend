import {
    BanknotesIcon,
    UserPlusIcon,
    UserIcon,
    ChartBarIcon,
    PhoneIcon,
    CheckCircleIcon,
  } from "@heroicons/react/24/solid";
  
  export const statisticsCardsData = [
    {
      color: "blue",
      icon: UserIcon,
      title: "Total Leads",
      value: "1,247",
      footer: {
        color: "text-green-500",
        value: "+12%",
        label: "than last month",
      },
    },
    {
      color: "green",
      icon: CheckCircleIcon,
      title: "Deals Closed",
      value: "89",
      footer: {
        color: "text-green-500",
        value: "+8%",
        label: "than last month",
      },
    },
    {
      color: "orange",
      icon: BanknotesIcon,
      title: "Revenue",
      value: "$284,430",
      footer: {
        color: "text-green-500",
        value: "+15%",
        label: "than last month",
      },
    },
    {
      color: "pink",
      icon: PhoneIcon,
      title: "Follow-ups Today",
      value: "23",
      footer: {
        color: "text-red-500",
        value: "5 overdue",
        label: "need attention",
      },
    },
  ];
  
  export default statisticsCardsData;
  