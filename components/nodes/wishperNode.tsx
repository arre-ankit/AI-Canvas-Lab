'use client'

import { BaseNode } from '../BaseNode';
import { useState } from 'react';
import { NodeSelect } from '../inputTypes/Select';
import { NodeAudioRecorder } from '../inputTypes/AudioRecorder';

interface WhisperNodeProps {
    id: string;
    data?: {
        language?: string;
        model?: string;
        audio?: any;
        audioUrl?: string;
    };
    selected: boolean;
}

export const WhisperNode = ({ id, data, selected }: WhisperNodeProps) => {
    const [model, setModel] = useState(data?.model || 'whisper-1');

    return (
        <BaseNode
            id={id}
            title="Whisper"
            selected={selected}
            targets={[{ id: 'Audio' }]}
            sources={[{ id: 'output' }]}
            style={{
                width: 'auto',
                minWidth: '200px',
                maxWidth: '400px'
            }}
        >
            <NodeSelect
                label="Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                options={[{value: 'OpenAI', label: 'OpenAI'}, {value: 'Eleven Labs', label: 'Eleven Labs'}]}
            />
        </BaseNode>
    );
};
