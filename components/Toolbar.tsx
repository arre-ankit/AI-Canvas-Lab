
import { DraggableNode } from './DraggableNode';
import { BsRobot, BsFileText, BsMicFill, BsImage } from 'react-icons/bs';
import { useCallback, useEffect } from 'react';
import { useReactFlow } from 'reactflow';
import { FaRegFileAudio } from "react-icons/fa6";

export const PipelineToolbar = () => {
    const { setNodes } = useReactFlow();

    const handleDelete = useCallback((event:any) => {
        if (event.key === 'Delete') {
            const confirmDelete = window.confirm('Are you sure you want to delete the selected node?');
            
            if (confirmDelete) {
                setNodes((nodes) => nodes.filter(node => !node.selected));
            }
        }
    }, [setNodes]);

    useEffect(() => {
        document.addEventListener('keydown', handleDelete);
        return () => {
            document.removeEventListener('keydown', handleDelete);
        };
    }, [handleDelete]);

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <h2 className='text-lg font-bold ml-2'>Inputs</h2>
                <div className='mt-9 flex flex-row gap-4'>
                    <DraggableNode type='text' label='Text' icon={<BsFileText />} />
                    <DraggableNode type='audio' label='Audio' icon={<BsMicFill />} />
                    <DraggableNode type='image' label='Image' icon={<BsImage />} style={{marginRight: '150px'}} />
                </div>
                <h2 className='text-lg font-bold'>Models</h2>
                <div className='mt-9 flex flex-row gap-4'>
                <DraggableNode type='llm' label='LLM' icon={<BsRobot />}  />
                <DraggableNode type='whisper' label='Whisper' icon={<FaRegFileAudio />} />
                <DraggableNode type='stablediffusion' label='Stable Diffusion' icon={<BsImage />} />
                <DraggableNode type='imagetext' label='Stable Diffusion Text' icon={<BsImage />} />
                </div>
            </div>
        </div>
    );
};