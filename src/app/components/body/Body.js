import React from "react"
import { Tools } from "./bodyCompoents/Tools"
import { ReactFlow } from "./bodyCompoents/ReactFlow"
import { NodeProperties } from "./bodyCompoents/NodeProperties"

export const Body = () => {
  return (
    <div className=" grow mx-[20px] mb-[20px] rounded-lg flex bg-[#303640]">
      <div className=" grow rounded-xl flex flex-col ">
        <Tools />
        <ReactFlow />
      </div>
      <div className="w-[600px]">
        <NodeProperties />
      </div>
    </div>
  )
}
