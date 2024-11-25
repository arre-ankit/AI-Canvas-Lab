'use client'

import { BaseNode } from '../BaseNode';

interface OutputNodeProps {
  id: string;
  data?: {
    outputText?: string;
  };
  selected: boolean;
}

export const TextOutput = ({ id, data, selected }: OutputNodeProps) => {
  return (
    <BaseNode
      id={id}
      title="Output"
      selected={selected}
    >
      <div className="w-full">
        {data?.outputText}
      </div>
    </BaseNode>
  );
};