import Image from "next/image"
import React from "react"
import { useCallback } from "react"
import { Handle, Position } from "reactflow"

export const OutputNode = ({ data, isConnectable }) => {
  const handleStyles = {
    backgroundColor: "#3850DD",
    height: "20px",
    width: "20px",
    borderColor: "#01C5FF",
    borderWidth: "3px",
  }
  return (
    <div className="">
      <div className="bg-[#39404B] h-[80px] w-[160px] rounded-3xl flex items-center justify-between overflow-hidden mx-7 hover:outline outline-offset-4 outline-1  outline-cyan-400 ">
        <div className="ml-7">
          <Image
            src="/bodyIcons/image6.png"
            alt="node"
            width={38}
            height={38}
          />
        </div>
        <Image src="/bodyIcons/image10.png" alt="node" width={80} height={80} />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        id="a"
        style={handleStyles}
      />
      <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        id="b"
        style={handleStyles}
      />
    </div>
  )
}
