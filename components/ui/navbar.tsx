"use client";

import { AlignCenter, CirclePlayIcon, Menu, Monitor, Phone } from "lucide-react"
import { IconLogo } from "../icons/icon-burger"
import { Button } from "./button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <Button className="rounded-full bg-gray-200" variant="outline" size="icon">
        <Monitor />
      </Button>
      <Button className="rounded-full bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-rose-50">
        <Phone className="mr-2 h-4 w-4" />
        Call Me Back
      </Button>
      
      <Sheet>
        <SheetTrigger asChild>
          <Button className="rounded-full bg-gray-200" variant="outline" size="icon">
            <AlignCenter />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>


    </nav>
  )
}
export default NavBar