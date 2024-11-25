'use client';

import { Handle, Position } from 'reactflow';

const defaultStyles = {
    container: {
        width: 400,
        minHeight: 100,
        backgroundColor: '#f8f9fc',
        borderRadius: '8px',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 200ms',
        overflow: 'hidden'
    },
    containerSelected: {
        border: '2px solid #6366f1',
        boxShadow: '0 4px 6px rgba(99, 102, 241, 0.2)',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#4338ca',
        padding: '4px 0',
        fontSize: '0.875rem',
        fontWeight: '600'
    },
    headerSelected: {
        color: '#6366f1',
    },
    handle: {
        width: '14px',
        height: '14px',
        background: 'black',
        border: '2px solid #f8f9fc',
        borderRadius: '50%',
    },
    handleSelected: {
        background: '#6366f1',
        border: '2px solid #f8f9fc',
    }
};

interface Target {
  id: string;
  style?: React.CSSProperties;
}

interface Source {
  id: string;
  style?: React.CSSProperties;
}

type BaseNodeProps = {
  id: string;
  title: string;
  targets?: Target[];
  sources?: Source[];
  children: React.ReactNode;
  style?: React.CSSProperties;
  selected: boolean;
};

export const BaseNode = ({ 
    id,
    title,
    targets = [],
    sources = [],
    children,
    style = {},
    selected  
}: BaseNodeProps) => {
    return (
        <div style={Object.assign({}, 
            defaultStyles.container,
            selected ? defaultStyles.containerSelected : {},
            style
        )}>
            {targets.map((target, index) => (
                <div>
                    <Handle
                    key={target.id}
                    type="target"
                    position={Position.Left}
                    id={`${id}-${target.id}`}
                    style={{
                        top: `${((index + 1) * 100) / (targets.length + 1)}%`,
                        ...defaultStyles.handle,
                        ...(selected ? defaultStyles.handleSelected : {}),
                        ...target.style
                    }}
                />
                <div style={{left: '-60px', position: 'absolute', top: `${((index + 1) * 100) / (targets.length + 1)}%`, fontSize: '0.9rem', color: 'red',}}>
                    {target.id}
                </div>
                </div>
            ))}
            
            <div style={{
                ...defaultStyles.header,
                ...(selected ? defaultStyles.headerSelected : {})
            }}>
                <span>{title}</span>
            </div>
            
            {children}
            
            {sources.map((source, index) => (
                <div>
                    <Handle
                        key={source.id}
                    type="source"
                    position={Position.Right}
                    id={`${id}-${source.id}`}
                    style={{
                        top: `${((index + 1) * 100) / (sources.length + 1)}%`,
                        ...defaultStyles.handle,
                        ...(selected ? defaultStyles.handleSelected : {}),
                        ...source.style
                    }}
                />
                <div style={{right: '-55px', position: 'absolute', top: `${((index + 1) * 100) / (sources.length + 1)}%`, fontSize: '0.9rem', color: 'red',}}>
                    {source.id}
                </div>
                </div>
            ))}
        </div>
    );
};