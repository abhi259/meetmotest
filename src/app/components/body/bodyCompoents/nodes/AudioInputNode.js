import Image from "next/image"
import React from "react"
import { useCallback } from "react"
import { Handle, Position } from "reactflow"

export const AudioInputNode = ({ data, isConnectable }) => {

  const handleStyles = {
    backgroundColor: '#3850DD',
    height: "20px",
    width: '20px',
    borderColor: "#01C5FF",
    borderWidth: '3px'
  }

  return (
    <div>
      <div className="bg-[#39404B] h-[80px] w-[80px] mx-6 rounded-3xl flex items-center justify-center  overflow-hidden  hover:outline outline-offset-4 outline-1  outline-cyan-400">
       
        <Image src="/bodyIcons/image8.png" alt="node" width={40} height={40} />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
        id="a"
        style={handleStyles}
      />
    </div>
  )
}
