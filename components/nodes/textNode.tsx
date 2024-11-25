'use client'

import { useState, useEffect, useCallback } from 'react';
import { BaseNode } from '../BaseNode';
import { NodeTextarea } from '../inputTypes/Textarea';
import { Handle, Position } from 'reactflow';

interface TextNodeProps {
    id: string;
    data?: {
        text?: string;
    };
    selected: boolean;
}

export const TextNode = ({ id, data, selected }: TextNodeProps) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [variables, setVariables] = useState<string[]>([]);
  const [textareaHeight, setTextareaHeight] = useState('auto');

    const extractVariables = useCallback((text:any) => {
    const regex = /{{([^}]+)}}/g;
    const matches = [...text.matchAll(regex)];
    return matches.map(match => match[1].trim());
  }, []);

  useEffect(() => {
    const newVars = extractVariables(currText);
    setVariables(newVars);
  }, [currText, extractVariables]);

  const handleTextChange = (e:any) => {
    setCurrText(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
    setTextareaHeight(`${e.target.scrollHeight}px`);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      sources={[{ id: '' }]}
      selected={selected}
      style={{
        width: 'auto',
        minWidth: '200px',
        maxWidth: '400px'
      }}
    >
      <NodeTextarea
        label="Text"
        value={currText}
        onChange={handleTextChange}
      />
      
      {variables.length > 0 && (
        <div style={{ 
          fontSize: '0.8rem', 
          marginTop: '8px',
          color: 'gray',
          ...(selected && {
            color: 'blue'
          })
        }}>
        Variables: {variables.join(', ')}
        </div>
      )}

      {variables.map((variable, index) => {
        let topPosition;
        if (variables.length === 1) {
          topPosition = 90;
        } else if (variables.length === 2) {
          topPosition = 35 + (index * 100);
        } else {
          topPosition = 30 + (index * 35);
        }

        return (
          <div key={variable}>
            <Handle
              type="target"
              position={Position.Left}
              id={variable}
              style={{
                top: `${topPosition}px`,
                background: 'rgb(147, 51, 234)',
                width: '10px',
                height: '10px'
              }}
            />
            <div style={{
              left: '-80px',
              position: 'absolute',
              top: `${topPosition - 8}px`,
              fontSize: '0.9rem',
              color: 'blue',
              whiteSpace: 'nowrap'
            }}>
              {variable}
            </div>
          </div>
        );
      })}
    </BaseNode>
  );
};