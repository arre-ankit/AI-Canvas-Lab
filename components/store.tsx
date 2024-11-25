'use client';

import { create } from "zustand";
import {
    Node,
    Edge,
    Connection,
    EdgeChange,
    NodeChange,
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    MarkerType,
} from 'reactflow';

interface NodeData {
    [key: string]: any;
}

interface NodeIDs {
    [key: string]: number;
}

interface StoreState {
    nodes: Node<NodeData>[];
    edges: Edge[];
    nodeIDs: NodeIDs;
    getNodeID: (type: string) => string;
    addNode: (node: Node<NodeData>) => void;
    onNodesChange: (changes: NodeChange[]) => void;
    onEdgesChange: (changes: EdgeChange[]) => void;
    onConnect: (connection: Connection) => void;
    updateNodeField: (nodeId: string, fieldName: string, fieldValue: any) => void;
}

export const useStore = create<StoreState>((set, get) => ({
    nodes: [],
    edges: [],
    nodeIDs: {},
    getNodeID: (type: string) => {
        const newIDs = {...get().nodeIDs};
        if (newIDs[type] === undefined) {
            newIDs[type] = 0;
        }
        newIDs[type] += 1;
        set({nodeIDs: newIDs});
        return `${type}-${newIDs[type]}`;
    },
    addNode: (node: Node<NodeData>) => {
        set({
            nodes: [...get().nodes, node]
        });
    },
    onNodesChange: (changes: NodeChange[]) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },
    onEdgesChange: (changes: EdgeChange[]) => {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },
    onConnect: (connection: Connection) => {
        set({
            edges: addEdge({
                ...connection, 
                type: 'smoothstep', 
                animated: true, 
                markerEnd: {
                    type: MarkerType.Arrow, 
                    height: 20, 
                    width: 20
                }
            }, get().edges),
        });
    },
    updateNodeField: (nodeId: string, fieldName: string, fieldValue: any) => {
        set({
            nodes: get().nodes.map((node) => {
                if (node.id === nodeId) {
                    return {
                        ...node,
                        data: { ...node.data, [fieldName]: fieldValue }
                    };
                }
                return node;
            }),
        });
    },
}));
