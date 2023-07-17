import Image from "next/image"
import { Inter } from "next/font/google"
import { LeftNavabar } from "./components/leftNavbar/LeftNavabar"
import { TopNavabar } from "./components/topNavbar/TopNavabar"
import { Body } from "./components/body/Body"

import { Montserrat } from "@next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: '--font-montserrat',
})


export default function Home() {
  return (
    <div className={`${montserrat.variable} font-montserrat `}>
      <div className="flex min-h-screen bg-[#1F1F23] ">
        <div className="bg-[#272C34] w-[100px]">
          <LeftNavabar />
        </div>
        <div className=" grow flex flex-col">
          <TopNavabar />
          <Body />
        </div>
      </div>
    </div>
  )
}
