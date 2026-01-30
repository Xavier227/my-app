"use client";
import { useState } from "react";

import Toolbar from "@/components/Toolbar";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className=" min-h-screen flex flex-col bg-gray-900 ">
      <Toolbar />
      <main className="p-4 flex flex-col items-center text-white">
        <h1 className="text-2xl font-bold">Home Page</h1>
        <p>Welcome to the home page!</p>
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
        <div className="flex justify-center items-center mt-8">
          <Button onClick={() => setShowMessage(true)} variant="outline">
            Show Popup
          </Button>
        </div>
        {/* Popup box */}
        {showMessage && (
          <div className="fixed inset-0 flex items-center justify-center z-10">
            <div className="bg-gray-800 text-white rounded-3xl shadow-lg p-8 flex flex-col items-center">
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
