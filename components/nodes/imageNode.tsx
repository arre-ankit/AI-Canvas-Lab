'use client'

import { useState } from 'react';
import { BaseNode } from '../BaseNode';
import { NodeImageUpload } from '../inputTypes/ImageUpload';

interface ImageNodeProps {
  id: string;
  data?: {
    image?: File | string | null;
    preview?: string | null;
  };
  selected: boolean;
}

export const ImageNode = ({ id, data, selected }: ImageNodeProps) => {
    const [image, setImage] = useState<File | string | null>(data?.image || null);
    const [preview, setPreview] = useState<string | null>(data?.preview || null);

    return (
        <BaseNode
            id={id}
            title="Image"
            sources={[{ id: 'Image' }]}
            selected={selected}
            style={{
                width: 'auto',
                minWidth: '200px',
                maxWidth: '400px'
            }}
        >
            <NodeImageUpload 
                label="Upload Image"
                onChange={({ file, preview }) => {
                    setImage(file);
                    setPreview(preview);
                }}
                preview={preview}
            />
        </BaseNode>
    );
};

