import Image from "next/image"
import React from "react"

export const TopNavabar = () => {
  return (
    <div className="h-[90px] bg-[#1F1F23] flex items-center justify-between pl-[20px] gap-1">
      <div className="flex">
        <div className=" hover:bg-[#272C34] p-4 rounded-xl ">
          <Image
            src="/topNavbarIcons/icon1.png"
            alt="icon1"
            width={35}
            height={56}
          />
        </div>
        <div className="hover:bg-[#272C34] p-4 rounded-xl ">
          <Image
            src="/topNavbarIcons/icon2.png "
            alt="icon1"
            width={35}
            height={56}
          />
        </div>
        <div className="  hover:bg-[#272C34] p-4 rounded-xl  ">
          <Image
            src="/topNavbarIcons/icon3.png"
            alt="icon1"
            width={35}
            height={56}
          />
        </div>
      </div>
      <div className="flex items-center gap-2 ">
        <h1 className="text-[#D2D3DF] font-bold ">New Project</h1>
        <Image src="/dropDownArrow.png" alt="icon1" width={10} height={5} />
      </div>
      <div className="flex items-center gap-7 pr-6">
        <div className="flex gap-3 px-6  bg-gradient-to-r  from-blue-500 to-cyan-500 p-3 rounded-xl">
          <Image
            src="/topNavbarIcons/icon4.png"
            alt="icon2"
            width={25}
            height={25}
          />
          <h1>Publish</h1>
        </div>
        <div>
          <Image
            src="/topNavbarIcons/icon5.png"
            alt="icon2"
            width={36}
            height={29}
          />
        </div>
        <div>
          <Image
            src="/topNavbarIcons/icon6.png"
            alt="icon2"
            width={238}
            height={50}
          />
        </div>
      </div>
    </div>
  )
}
