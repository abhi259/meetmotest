import React from "react"
import { Tools } from "./bodyCompoents/Tools"

import { NodeProperties } from "./bodyCompoents/NodeProperties"
import { Flow } from "./bodyCompoents/Flow"

export const Body = () => {
  return (
    <div className=" grow mx-[20px] mb-[20px] rounded-lg flex bg-[#303640] relative">
      <div className=" grow rounded-xl flex flex-col  max-w-[calc(100%-600px)]">
        <Tools />
        <Flow />
      </div>
      <div className="w-[600px]  absolute right-0 bg-[#303640] h-[calc(100%-10px)] overflow-auto ">
        <NodeProperties />
      </div>
    </div>
  )
}
