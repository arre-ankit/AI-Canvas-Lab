'use client'

import { useState } from 'react';
import { BaseNode } from '../BaseNode';
import { NodeSelect } from '../inputTypes/Select';
import { TextOutput } from '../outputType/TextOutput';

interface LLMNodeProps {
  id: string;
  data?: {
    model?: string;
    prompt?: string;
  };
  selected: boolean;
}

export const LLMNode = ({ id, data, selected }: LLMNodeProps) => {
  const [model, setModel] = useState(data?.model || 'gpt-3.5-turbo');
  const [prompt, setPrompt] = useState(data?.prompt || '');
  return (
    <BaseNode
      id={id}
      title="LLM"
      targets={[
        { id: 'Text' }
      ]}
      sources={[
        { id: '' },
      ]}
      selected={selected}
      style={{ width: '250px', height: '250px' }}
    >
      <NodeSelect
        label="Model"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        options={[
          { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo' },
          { value: 'gpt-4', label: 'GPT-4' },
          { value: 'claude-3', label: 'Claude 3' }
        ]}
      />
     <TextOutput 
       id='output'
       selected={selected}
     />

    </BaseNode>
  );
};