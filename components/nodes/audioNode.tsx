'use client'

import { useState } from 'react';
import { BaseNode } from '../BaseNode';
import { NodeAudioRecorder } from '../inputTypes/AudioRecorder';

interface AudioNodeProps {
  id: string;
  data?: {
    audio?: Blob | null;
    audioUrl?: string | null;
  };
  selected: boolean;
}

export const AudioNode = ({ id, data, selected }: AudioNodeProps) => {
  const [audio, setAudio] = useState<Blob | null>(data?.audio || null);
  const [audioUrl, setAudioUrl] = useState<string | null>(data?.audioUrl || null);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const handleAudioChange = ({ blob, url }: { blob: Blob | null; url: string | null }) => {
    setAudio(blob);
    setAudioUrl(url);
  };

  return (
    <BaseNode
      id={id}
      title="Audio"
      sources={[{ id: '' }]}
      selected={selected}
      
    >
      <NodeAudioRecorder 
        label="Record Audio"
        onChange={handleAudioChange}
        audioUrl={audioUrl}
        isRecording={isRecording}
        setIsRecording={setIsRecording}
      />
    </BaseNode>
  );
};