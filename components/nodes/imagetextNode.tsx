'use client'

import { useState } from 'react';
import { BaseNode } from '../BaseNode';
import { NodeSelect } from '../inputTypes/Select';
import ImageOutput from '../outputType/ImageOutput';

interface ImageTextNodeProps {
  id: string;
  data?: {
    model?: string;
    imageUrl?: string;
    altText?: string;
  };
  selected: boolean;
}

export const ImageTextNode = ({ id, data, selected }: ImageTextNodeProps) => {
    const [model, setModel] = useState<string>('stable-diffusion-v1');
    const [imageUrl, setImageUrl] = useState(data?.imageUrl || '/placeholder.jpg');
    const [altText, setAltText] = useState(data?.altText || '');

    return (
        <BaseNode
            id={id}
            title="Image Text Model"
            targets={[{ id: 'Text' }, { id: 'Image' }]}
            sources={[{ id: 'output' }]}
            selected={selected}
            style={{width: '250px'}}
        >
            <NodeSelect
                label="Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                options={[
                    { label: 'Stable Diffusion', value: 'stable-diffusion-v1' },
                    { label: 'DALL-E', value: 'dall-e-v2' }
                ]}
            />
            <ImageOutput imageUrl={imageUrl} altText={altText}  />
        </BaseNode>
    );
};
