import React from 'react';
import Image from 'next/image';

interface ImageOutputProps {
  imageUrl: string;
  altText?: string;
}

const ImageOutput: React.FC<ImageOutputProps> = ({ imageUrl, altText = 'Generated image' }) => {
  return (
    <div className="relative w-40 h-40 aspect-square max-w-2xl mx-auto">
      <Image
        src={imageUrl}
        alt={altText}
        fill
        className="object-contain rounded-lg"
      />
    </div>
  );
};

export default ImageOutput;
