"use client"

import React from "react"
import { useCallback } from "react"
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow"

import "reactflow/dist/style.css"
import { VideoInputNode } from "./nodes/VideoInputNode"
import { AudioInputNode } from "./nodes/AudioInputNode"
import { CombiningNode } from "./nodes/CombiningNode"
import { OutputNode } from "./nodes/OutputNode"

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 200 },
    type: "videoInputNode",
    data: { label: "1" },
  },
  {
    id: "2",
    position: { x: 0, y: 0 },
    type: "audioInputNode",
    data: { label: "2" },
  },
  {
    id: "3",
    position: { x: 300, y: 100 },
    type: "combiningNode",
    data: { label: "3" },
  },
  {
    id: "4",
    position: { x: 500, y: 100 },
    type: "outputNode",
    data: { label: "4" },
  },
]

const initialEdges = [{ id: "edge-1", source: "1", target: "3" },{ id: "edge-2", source: "3", target: "4" }]

const nodeTypes = {
  videoInputNode: VideoInputNode,
  audioInputNode: AudioInputNode,
  combiningNode: CombiningNode,
  outputNode: OutputNode
}

const minimapStyle = {
  backgroundColor: '#303640',
  maskColor:'#003AFF'
};



export const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )
  return (
    <div className="bg-[#272C34] rounded-bl-xl grow">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <MiniMap style={minimapStyle} />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  )
}
