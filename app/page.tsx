"use client";
import { useState } from "react";

import Toolbar from "@/components/Toolbar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FileIcon, SearchAlertIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Search } from "lucide-react";

export default function Page() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className=" min-h-screen flex flex-col">
      <Toaster />
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <FileIcon />
                New Tab <MenubarShortcut>Ctrl+T</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>Share</MenubarItem>
              <MenubarItem>Print</MenubarItem>
              <MenubarItem></MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Search />
            Edit
          </MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                New Tab <MenubarShortcut>Ctrl+T</MenubarShortcut>
              </MenubarItem>
            </MenubarGroup>
            <MenubarSeparator />
            <MenubarGroup>
              <MenubarItem>Share</MenubarItem>
              <MenubarItem>Print</MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <main className="p-4 flex flex-col items-center text-white">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <p>Welcome to the home page!</p>
        <Skeleton className="h-5 w-25 rounded-full" />
        <div className="grid grid-cols-3 place-items-center mt-5 gap-y-2 gap-x-10 ">
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
          <p>test1</p>
          <p>test2</p>
          <p>test3</p>
        </div>
        <Field className="max-w-md">
          <FieldLabel htmlFor="email">Your email address</FieldLabel>
          <Input id="email" />
        </Field>
        <div className="flex justify-center items-center mt-8">
          <Button
            onClick={() => setShowMessage(true)}
            variant="outline"
            className="text-black"
          >
            Show Popup
          </Button>
          <Button
            onClick={() => toast.info("Test toast", { position: "top-center" })}
            variant="outline"
            className="text-black"
          >
            Show Toast
          </Button>
        </div>
        {/* Popup box */}
        {showMessage && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="bg-gray-800 text-white rounded-3xl shadow-xl p-8 flex flex-col items-center">
              <p className="text-center mb-4">This is your popup message!</p>
              <Button
                onClick={() => setShowMessage(false)}
                variant="destructive"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
