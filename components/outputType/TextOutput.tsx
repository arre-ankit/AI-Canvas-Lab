'use client'

import { BaseNode } from '../BaseNode';

interface OutputNodeProps {
  id: string;
  data?: {
    outputText?: string;
  };
}

export const TextOutput = ({ id, data }: OutputNodeProps) => {
  return (
    <textarea
      readOnly
      id={id}
      value={data?.outputText || 'Awaiting output...'}
      className={`w-full h-20 resize-none text-sm p-2`}
    />
  );
};