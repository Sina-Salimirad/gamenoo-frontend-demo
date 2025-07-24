import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { CircleUserRound, UserRound } from "lucide-react";
import { Separator } from "../ui/separator";
import {
  adminDropdownMenuItems,
  userDropdownMenuItems,
} from "@/constants/dropdowns";

export default function UserModal() {
  const { user, isLoading, isError } = useAuth();

  return (
    <DropdownMenu modal={false}>
      {/* todo: change the colors */}
      <DropdownMenuTrigger className="p-2 rounded-full transition-colors duration-300 cursor-pointer bg-[#dcdcdc80] hover:bg-[#dcdcdc]">
        <UserRound size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-72 flex flex-col items-end"
      >
        <DropdownMenuLabel className="flex justify-end items-center w-full p-4 gap-4">
          <p>{user?.fullName}</p>
          <CircleUserRound size={40} strokeWidth={1.5} />
        </DropdownMenuLabel>
        <Separator className="my-2" />

        {user?.role === "user"
          ? userDropdownMenuItems.map((group) => (
              <DropdownMenuGroup
                key={group.label}
                className="w-full flex flex-col gap-1"
              >
                {group.items.map((item) => (
                  <DropdownMenuItem
                    key={item.name}
                    className="p-4 rounded-lg flex justify-end w-full cursor-pointer hover:bg-gray-400"
                  >
                    {item.name}
                    {item.icon}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            ))
          : adminDropdownMenuItems.map((group) => (
              <DropdownMenuGroup
                key={group.label}
                className="w-full flex flex-col gap-1"
              >
                {group.items.map((item) => (
                  <DropdownMenuItem key={item.name}>
                    {item.slug ? (
                      <Link
                        href={item.slug}
                        className="p-4 rounded-lg flex justify-end w-full items-center gap-3 cursor-pointer hover:bg-gray-400"
                      >
                        {item.name}
                        {item.icon}
                      </Link>
                    ) : (
                      <div className="p-4 rounded-lg flex items-center justify-end w-full gap-3 cursor-pointer hover:bg-gray-400">
                        {item.name}
                        {item.icon}
                      </div>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
