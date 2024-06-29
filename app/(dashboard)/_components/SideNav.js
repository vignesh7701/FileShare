"use client";
import React,{useState} from "react";
import Image from "next/image";

import { Upload, File } from "lucide-react";

function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: File,
      path: "/files",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="shadow-sm border-r h-full">
      <div className="p-2 border-b">
        <Image src="/logo.svg" alt="logo" width={65} height={60} />
      </div>
      <div className="flex flex-col float-left w-full mt-5 gap-3">

      {menuList.map((item,index)=>(
        <button key={item.id} className={`flex gap-2 p-2 hover:bg-blue-100 w-full text-blue-700 ${active == index ? "bg-blue-100 text-blue-100" : "text-blue-950 bg-blue-50"}`}
        
        onClick={() => setActive(index)}
        >
          <item.icon />
          <h2>{item.name}</h2>
        </button>
      ))}
      </div>
    </div>
  );
}

export default SideNav;
