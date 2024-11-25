'use client';

import { FC } from 'react';

interface DraggableNodeProps {
  type: string;
  label: string;
  icon: React.ReactNode;
  style?: React.CSSProperties;
}

export const DraggableNode: FC<DraggableNodeProps> = ({ type, label, icon, style }) => {
    const onDragStart = (event: React.DragEvent<HTMLDivElement>, nodeType: string) => {
      const appData = { nodeType };
      (event.target as HTMLDivElement).style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target as HTMLDivElement).style.cursor = 'grab'}
        style={{ 
          cursor: 'grab', 
          width: '70px',
          height: '70px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '8px',
          backgroundColor: '#fff',
          border: '1px solid #e5e7eb',
          justifyContent: 'center', 
          flexDirection: 'column',
          padding: '8px',
          gap: '8px',
          transition: 'all 0.2s',
          boxSizing: 'border-box',
          ...style
        }} 
        draggable
      >
          <span style={{ 
            fontSize: '24px',
            lineHeight: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {icon}
          </span>
          <span style={{ 
            fontSize: '11px',
            color: '#374151',
            textAlign: 'center',
            width: '100%',
            wordBreak: 'break-word',
            lineHeight: '1.2'
          }}>
            {label}
          </span>
      </div>
    );
  };

export default DraggableNode;