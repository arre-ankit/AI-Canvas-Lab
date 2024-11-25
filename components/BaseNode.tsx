'use client';

import { Handle, Position } from 'reactflow';

const defaultStyles = {
    container: {
        width: 200,
        minHeight: 100,
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        border: '1px solid #e5e7eb',  
        boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
        transition: 'all 200ms',
        overflow: 'hidden'
    },
    containerSelected: {
        border: '2px solid rgb(147, 51, 234)',  
        boxShadow: '0 4px 6px -1px rgba(147, 51, 234, 0.1), 0 2px 4px -1px rgba(147, 51, 234, 0.06)',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: '#374151',  
        padding: '4px 0',
        fontSize: '0.875rem',
        fontWeight: '500'
    },
    headerSelected: {
        color: 'rgb(147, 51, 234)',  
    },
    handle: {
        width: '12px',  
        height: '12px', 
        background: '#e5e7eb',  
        border: '1px solid #fff', 
    },
    handleSelected: {
        background: 'rgb(147, 51, 234)',  
        border: '1px solid #fff',
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
                <div style={{left: '-60px', position: 'absolute', top: `${((index + 1) * 100) / (targets.length + 1)}%`, fontSize: '0.9rem', color: 'blue',}}>
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
                <div style={{right: '-55px', position: 'absolute', top: `${((index + 1) * 100) / (sources.length + 1)}%`, fontSize: '0.9rem', color: 'blue',}}>
                    {source.id}
                </div>
                </div>
            ))}
        </div>
    );
};