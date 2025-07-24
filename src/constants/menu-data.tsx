import { Gamepad, Gamepad2, Gift, Swords, Headset } from "lucide-react";

export const menubarData = [
  {
    label: "منوی اصلی",
    items: [
      {
        title: "خرید اکانت قانونی PS4 و PS5",
        url: "#",
        icon: <Gamepad2 />,
      },
      {
        title: "خرید پلاس PS4 و PS5",
        url: "#",
        icon: <Gamepad />,
      },
      {
        title: "Steam",
        url: "#",
        icon: <Swords />,
      },
      {
        title: "گیفت کارت",
        url: "#",
        icon: <Gift />,
      },
      {
        title: "ارتباط با ما",
        url: "#",
        icon: <Headset />,
      },
    ],
  },
];
