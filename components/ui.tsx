'use client';

import { useState, useRef, useCallback } from 'react';
import ReactFlow, { 
  Controls, 
  Background, 
  MiniMap,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
  ReactFlowInstance
} from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { LLMNode } from './nodes/llmNode';
import { TextNode } from './nodes/textNode';
import { AudioNode } from './nodes/audioNode';
import { ImageNode } from './nodes/imageNode';
import { ImageTextNode } from './nodes/imagetextNode';
import { WhisperNode } from './nodes/wishperNode';
import { StableDiffusionNode } from './nodes/stablediffusionNode';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };

export const nodeTypes = {
    llm: LLMNode,
    text: TextNode,
    audio: AudioNode,
    image: ImageNode,
    imagetext: ImageTextNode,
    whisper: WhisperNode,
    stablediffusion: StableDiffusionNode
};

interface StoreState {
  nodes: Node[];
  edges: Edge[];
  getNodeID: (type: string) => string;
  addNode: (node: Node) => void;
  onNodesChange: (changes: NodeChange[]) => void;
  onEdgesChange: (changes: EdgeChange[]) => void;
  onConnect: (connection: Connection) => void;
}

const selector = (state: StoreState) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);
  
  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect
  } = useStore(selector, shallow);

  const getInitNodeData = useCallback((nodeID: string, type: string) => {
    return { id: nodeID, nodeType: type };
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      
      if (!reactFlowWrapper.current || !reactFlowInstance) return;
      
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const data = event.dataTransfer.getData('application/reactflow');
      
      try {
        const appData = JSON.parse(data);
        const type = appData?.nodeType;
        
        if (typeof type === 'undefined' || !type) {
          return;
        }
    
        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });

        const nodeID = getNodeID(type);
        const newNode = {
          id: nodeID,
          type,
          position,
          data: getInitNodeData(nodeID, type),
        };
    
        addNode(newNode);
      } catch (error) {
        console.error('Error in onDrop:', error);
      }
    },
    [reactFlowInstance, getNodeID, addNode, getInitNodeData]
  );

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
      <div ref={reactFlowWrapper} style={{width: '100vw', height: '70vh'}}>
          <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onInit={setReactFlowInstance}
              nodeTypes={nodeTypes}
              proOptions={proOptions}
              snapGrid={[gridSize, gridSize]}
          >
              <Background color="#aaa" gap={gridSize} />
              <Controls />
              <MiniMap />
          </ReactFlow>
      </div>
  )
}