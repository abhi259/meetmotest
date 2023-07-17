import Image from "next/image"
import React from "react"

export const LeftNavabar = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-14 mt-[20px] ">

      <div className="  ">
        <Image
          src="/leftNavbarIcons/icon1.png"
          width={50}
          height={56}
          alt="icon1"
        />
      </div>
      <div className=" w-16 h-16  flex justify-center items-center   hover:bg-gradient-to-r  from-blue-500 to-cyan-500 rounded-2xl ">
        <Image
          src="/leftNavbarIcons/icon9.png"
          width={40}
          height={56}
          alt="icon1"
          
        />
      </div>
      <div className=" w-16 h-16  flex justify-center items-center  hover:bg-gradient-to-r  from-blue-500 to-cyan-500 rounded-2xl">
        <Image
          src="/leftNavbarIcons/icon3.png"
          width={40}
          height={56}
          alt="icon1"
        />
      </div>
      <div className=" w-16 h-16  flex justify-center items-center  hover:bg-gradient-to-r  from-blue-500 to-cyan-500 rounded-2xl">
        <Image
          src="/leftNavbarIcons/icon4.png"
          width={40}
          height={56}
          alt="icon1"
        />
      </div>
      <div className=" w-16 h-16  flex justify-center items-center  hover:bg-gradient-to-r  from-blue-500 to-cyan-500 rounded-2xl">
        <Image
          src="/leftNavbarIcons/icon5.png"
          width={40}
          height={56}
          alt="icon1"
        />
      </div>
      <div className="    w-16 h-16  flex justify-center items-center  hover:bg-gradient-to-r  from-blue-500 to-cyan-500 rounded-2xl">
        <Image
          src="/leftNavbarIcons/icon6.png"
          width={40}
          height={56}
          alt="icon1"
        />
      </div>
      <div className="    w-16 h-16  flex justify-center items-center  hover:bg-gradient-to-r  from-blue-500 to-cyan-500 rounded-2xl">
        <Image
          src="/leftNavbarIcons/icon7.png"
          width={40}
          height={56}
          alt="icon1"
        />
        
      </div>
    </div>
  )
}
