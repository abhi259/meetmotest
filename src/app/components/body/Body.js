import React from "react"
import { Tools } from "./bodyCompoents/Tools"
import { ReactFlow } from "./bodyCompoents/ReactFlow"
import { NodeProperties } from "./bodyCompoents/NodeProperties"

export const Body = () => {
  return (
    <div className=" grow mx-[20px] mb-[20px] rounded-lg flex">
      <div className=" grow rounded-xl flex flex-col ">
        <Tools />
        <ReactFlow />
      </div>
      <div className="w-[20%]">
        <NodeProperties />
      </div>
    </div>
  )
}
