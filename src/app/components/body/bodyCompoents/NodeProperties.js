import Image from "next/image"
import React from "react"

export const NodeProperties = () => {
  return (
    <div className="flex h-full flex-col ">
      <div className="bg-[#39404B] rounded-t-xl relative pt-6">
        <div className="absolute right-2 top-2">
          <Image
            src="/bodyIcons/handleIcon.png"
            alt="image1"
            width={18}
            height={312}
          />
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Image
            src="/bodyIcons/image1.png"
            alt="image1"
            width={560}
            height={312}
          />
          <Image
            src="/bodyIcons/image2.png"
            alt="image1"
            width={540}
            height={312}
            className="py-4"
          />
        </div>
      </div>
      <div className="bg-[#303640] grow relative m-5 flex flex-col ">
        <div className="absolute right-2 top-2">
          <Image
            src="/bodyIcons/handleIcon.png"
            alt="image1"
            width={18}
            height={312}
          />
        </div>
        <div className="flex justify-between items-center bg-[#39404B]  px-5 rounded-xl  ">
          <div className="">
            <div className="flex  items-center gap-6">
              <Image
                src="/bodyIcons/image3.png"
                alt="image1"
                width={60}
                height={312}
                className="py-4"
              />
              <div>
                <h1 className="font-bold text-[18px]">
                  Repellat Voluptates Corrupti
                </h1>
                <h1 className="font-thin text-[16px] ">
                  Magnam Veniam Voluptatem
                </h1>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/bodyIcons/image4.png"
              alt="image1"
              width={20}
              height={312}
              className="py-4"
            />
          </div>
        </div>
        <div className="border rounded-lg h-[40px] border-[#39404B] flex items-center mt-3  ">
          <h1 className="text-[#D2D3DF] text-[16px] italic pl-6">Node Name</h1>
        </div>
        <div className="border rounded-lg h-[40px] border-[#39404B] flex items-center mt-3  ">
          <h1 className="text-[#D2D3DF] text-[16px] italic pl-6">Dicta Amet Consequatur</h1>
        </div>
        <div className="border rounded-lg h-[40px] border-[#39404B] flex items-center mt-3  ">
          <h1 className="text-[#D2D3DF] text-[16px] italic pl-6">Eos Et Rem</h1>
        </div>
        <div className="flex justify-around gap-2">
          <div className="border rounded-lg h-[40px] border-[#39404B] flex items-center mt-3 grow ">
            <h1 className="text-[#D2D3DF] text-[16px] italic pl-6">
              Sit Nihil Expedita
            </h1>
          </div>
          <div className="border rounded-lg h-[40px] border-[#39404B] flex items-center mt-3 grow ">
            <h1 className="text-[#D2D3DF] text-[16px] italic pl-6">
              Rerum
            </h1>
          </div>
        </div>
        <div className="flex  justify-between items-center mt-5">
          <h1 className="pl-7">Sit Nihil Expedita</h1>
          <Image
              src="/bodyIcons/image5.png"
              alt="image1"
              width={49}
              height={312}
              className="py-4"
            />
        </div>
        <div className="px-7">
          <div className="flex justify-between ">
            <h1>Earum Dolorem</h1>
            <h1>54mbps</h1>
          </div>
          <div>
          
          </div>
        </div>
      </div>
    </div>
  )
}
