import Link from "next/link";
import { useState } from "react";
import { UserRound } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import UserModal from "@/components/customs/user-modal";
import NavbarIcons from "@/components/customs/navbar-icons";
import Menubar from "@/components/customs/menubar";

import "@/styles/home.css";

export default function Header() {
  const [isOnTop, setIsOnTop] = useState();
  const { user, isLoading } = useAuth();

  return (
    <header
      className={`fixed w-full top-0 z-10 flex justify-between px-4 gap-4 transition-colors duration-300 ${
        isOnTop ? "bg-white/20" : "bg-white"
      }`}
    >
      
        <img src="/images/logo (2).png" alt="" />

      {/* <p className="logo text-3xl flex items-center">Gamenoo</p> */}

      <div className="flex flex-row-reverse items-center gap-4">
        {user ? (
          <UserModal />
        ) : (
          <Button asChild>
            <Link href="/auth">
              ورود / عضویت
              <UserRound />
            </Link>
          </Button>
        )}

        <NavbarIcons />
      </div>

      <Menubar />
    </header>
  );
}
