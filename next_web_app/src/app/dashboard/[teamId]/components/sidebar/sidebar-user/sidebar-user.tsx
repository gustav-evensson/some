"use client";

import { LogOut, Settings, Users } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";
import UserGradient from "@/components/gradient-avatar";
import Link from "next/link";

export function SidebarUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    gradient: string[];
  };
}) {
  return (
    <div className="flex items-center justify-center w-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className={
              "size-8 border rounded-full overflow-hidden bg-transparent hover:bg-transparent"
            }
          >
            <div className="w-8 h-8 overflow-hidden">
              <UserGradient gradient={user.gradient} />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          side="right"
          align="end"
          sideOffset={8}
        >
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <div className="w-8 h-8 rounded-full border overflow-hidden">
                <UserGradient gradient={user.gradient} />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href="/dashboard">
                <Users />
                Byt team
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/user-settings">
                <Settings />
                Användarinställningar
              </Link>
            </DropdownMenuItem>
            <ModeToggle />
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
