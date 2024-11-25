'use client'
import { PipelineToolbar } from '@/components/Toolbar';
import { PipelineUI } from '@/components/ui';
import { NavBar } from '@/components/NavBar';
import { ReactFlowProvider } from 'reactflow';

export default function Canvas() { 
  return (
    <div>
      <ReactFlowProvider>
      <NavBar />
      <PipelineToolbar />
      <PipelineUI />
      </ReactFlowProvider>
    </div>
  );
}

