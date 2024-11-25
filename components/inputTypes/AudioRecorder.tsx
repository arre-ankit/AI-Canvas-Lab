'use client'

import { useState, useEffect } from 'react';

interface NodeAudioRecorderProps {
  label: string;
  onChange: ({ blob, url }: { blob: Blob | null; url: string | null }) => void;
  audioUrl: string | null;
  isRecording: boolean;
  setIsRecording: (isRecording: boolean) => void;
}

export const NodeAudioRecorder = ({ label, onChange, audioUrl, isRecording, setIsRecording }: NodeAudioRecorderProps) => {
    const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
    const [timer, setTimer] = useState<number>(0);
  
    useEffect(() => {
      let interval: NodeJS.Timeout;
      if (isRecording) {
        interval = setInterval(() => {
          setTimer(t => t + 1);
        }, 1000);
      }
      return () => clearInterval(interval);
    }, [isRecording]);
  
    const formatTime = (seconds:number) => {
      const mins = Math.floor(seconds / 60);
      const secs = seconds % 60;
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
  
    const startRecording = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        const chunks:BlobPart[] = [];
  
        recorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            chunks.push(e.data);
          }
        };
  
        recorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/wav' });
          const url = URL.createObjectURL(blob);
          onChange({ blob, url });
          setTimer(0);
        };
  
        recorder.start();
        setMediaRecorder(recorder);
        setIsRecording(true);
      } catch (err) {
        console.error('Error accessing microphone:', err);
      }
    };
  
    const stopRecording = () => {
      if (mediaRecorder && isRecording) {
        mediaRecorder.stop();
        mediaRecorder.stream.getTracks().forEach(track => track.stop());
        setIsRecording(false);
      }
    };
  
    return (
      <div className="mb-3 relative">
        <div className="absolute left-3 top-2 text-xs text-purple-600 font-medium z-[1]">
          {label}
        </div>
        <div className="w-full px-3 pt-7 pb-2 rounded-3xl border border-gray-100 
          bg-white box-border shadow-sm flex flex-col items-center gap-3">
          {audioUrl ? (
            <div className="w-full flex flex-col items-center gap-2">
              <audio 
                src={audioUrl} 
                controls 
                className="w-full h-10"
              />
              <button
                onClick={() => onChange({ blob: null, url: null })}
                className="bg-blue-600 text-white border-none rounded px-4 py-2 
                  cursor-pointer font-medium text-sm hover:bg-blue-700 
                  transition-colors duration-200"
              >
                Delete Recording
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`flex items-center gap-2 px-4 py-2 text-white border-none 
                  rounded-xl cursor-pointer text-sm transition-all duration-200
                  ${isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-purple-600 hover:bg-purple-700'}`}
              >
                {isRecording ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    Start Recording
                  </>
                )}
              </button>
              {isRecording && (
                <span className="text-red-500 text-sm">
                  {formatTime(timer)}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    );
};
  
  
  
  