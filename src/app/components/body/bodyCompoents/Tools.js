import Image from "next/image"
import React from "react"

export const Tools = () => {
  return (
    <div className="flex p-4 gap-7 bg-[#303640] h-[70px] rounded-tl-xl ">
      <div className="flex items-center gap-2 hover:cursor-pointer">
        <Image src="/bodyIcons/icon1.png" width={28} height={28} alt="tools" />
        <Image src="/dropDownArrow.png" alt="icon1" width={10} height={5} />
      </div>
      <div className="flex items-center gap-1 hover:cursor-pointer">
        <Image src="/bodyIcons/icon2.png" width={28} height={28} alt="tools" />
        <Image src="/dropDownArrow.png" alt="icon1" width={10} height={5} />
      </div>
      <div className="flex items-center gap-1 hover:cursor-pointer">
        <Image src="/bodyIcons/icon3.png" width={28} height={28} alt="tools" />
        <Image src="/dropDownArrow.png" alt="icon1" width={10} height={5} />
      </div>
      <div className="flex items-center gap-1 hover:cursor-pointer">
        <Image src="/bodyIcons/icon4.png" width={28} height={28} alt="tools" />
        <Image src="/dropDownArrow.png" alt="icon1" width={10} height={5} />
      </div>
    </div>
  )
}
