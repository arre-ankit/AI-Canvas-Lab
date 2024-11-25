'use client'
import { PipelineToolbar } from '@/components/Toolbar';
import { PipelineUI } from '@/components/ui';
import { NavBar } from '@/components/NavBar';
import { ReactFlowProvider } from 'reactflow';

export default function Canvas() { 
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <ReactFlowProvider>
        <NavBar />
        <PipelineToolbar />
        <PipelineUI />
      </ReactFlowProvider>
    </div>
  );
}

