import {
  BadgeCheck,
  CreditCard,
  HelpCircle,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

export const userDropdownMenuItems = [
  {
    label: "more options",
    items: [
      {
        name: "جزئیات حساب",
        icon: <BadgeCheck />,
      },
      {
        name: "تراکنش ها",
        icon: <CreditCard />,
      },
      {
        name: "پشتیبانی",
        icon: <HelpCircle />,
      },
      {
        name: "خروج",
        icon: <LogOut />,
      },
    ],
  },
];

export const adminDropdownMenuItems = [
  {
    label: "more options",
    items: [
      {
        name: "جزئیات حساب",
        icon: <BadgeCheck />,
      },
      {
        name: "ورود به پنل",
        icon: <LayoutDashboard />,
        slug: "/panel",
      },
      {
        name: "خروج",
        icon: <LogOut />,
      },
    ],
  },
];
