'use client'

import { BaseNode } from '../BaseNode';
import { useState } from 'react';
import { NodeSelect } from '../inputTypes/Select';
import ImageOutput from '../outputType/ImageOutput';    

interface StableDiffusionNodeProps {
    id: string;
    data?: {
        model?: string;
        imageUrl?: string;
        altText?: string;
    };
    selected: boolean;
}

export const StableDiffusionNode = ({ id, data, selected }: StableDiffusionNodeProps) => {
    const [model, setModel] = useState(data?.model || 'stable-diffusion-v1');
    const [imageUrl, setImageUrl] = useState(data?.imageUrl || '/placeholder.jpg');
    const [altText, setAltText] = useState(data?.altText || '');
    return (
        <BaseNode
            id={id}
            title="Stable Diffusion"
            targets={[{ id: 'Image' }]}
            sources={[{ id: '' }]}
            selected={selected}
            style={{width: '250px'}}
        >
            <NodeSelect
                label="Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                options={[{ label: 'Stable Diffusion v1', value: 'stable-diffusion-v1' },
                    { label: 'Stable Diffusion v2', value: 'stable-diffusion-v2' },
                ]}
            />
            <ImageOutput imageUrl={imageUrl} altText={altText} />   
        </BaseNode>
    );
};
