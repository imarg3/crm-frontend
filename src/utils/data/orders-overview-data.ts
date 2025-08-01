import {
    BellIcon,
    UserPlusIcon,
    PhoneIcon,
    EnvelopeIcon,
    CalendarIcon,
    BanknotesIcon,
  } from "@heroicons/react/24/solid";
  
  export const recentActivitiesData = [
    {
      icon: BanknotesIcon,
      color: "text-green-500",
      title: "Deal closed: Tech Solutions Inc.",
      description: "$45,000 - 2 hours ago",
    },
    {
      icon: UserPlusIcon,
      color: "text-blue-500",
      title: "New lead: Digital Marketing Pro",
      description: "Sarah Johnson - 4 hours ago",
    },
    {
      icon: PhoneIcon,
      color: "text-orange-500",
      title: "Call scheduled with Global Logistics",
      description: "Mike Wilson - Tomorrow 2:00 PM",
    },
    {
      icon: EnvelopeIcon,
      color: "text-purple-500",
      title: "Proposal sent to Retail Chain Corp",
      description: "Emily Davis - Yesterday 3:30 PM",
    },
    {
      icon: CalendarIcon,
      color: "text-red-500",
      title: "Follow-up reminder: Healthcare Systems",
      description: "Robert Brown - Due today",
    },
    {
      icon: BellIcon,
      color: "text-blue-gray-900",
      title: "Meeting completed with Education Platform",
      description: "Lisa Garcia - 2 days ago",
    },
  ];

  // Keep the old export for backward compatibility
  export const ordersOverviewData = recentActivitiesData;
  
  export default ordersOverviewData;
  