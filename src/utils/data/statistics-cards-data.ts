import {
    BanknotesIcon,
    UserPlusIcon,
    UserIcon,
    ChartBarIcon,
  } from "@heroicons/react/24/solid";
  
  export const statisticsCardsData = [
    {
      color: "blue",
      icon: ChartBarIcon,
      title: "Lead Overview",
      value: "$53k",
      footer: {
        color: "text-green-500",
        value: "+55%",
        label: "than last week",
      },
    },
    {
      color: "pink",
      icon: UserIcon,
      title: "Sales Pipeline",
      value: "2,300",
      footer: {
        color: "text-green-500",
        value: "+3%",
        label: "than last month",
      },
    },
    {
      color: "green",
      icon: UserPlusIcon,
      title: "New Clients",
      value: "3,462",
      footer: {
        color: "text-red-500",
        value: "-2%",
        label: "than yesterday",
      },
    },
    {
      color: "orange",
      icon: BanknotesIcon,
      title: "Sales",
      value: "$103,430",
      footer: {
        color: "text-green-500",
        value: "+5%",
        label: "than yesterday",
      },
    },
  ];
  
  export default statisticsCardsData;
  