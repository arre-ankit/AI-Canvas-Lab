interface NodeImageUploadProps {
  label: string;
  onChange: (data: { file: File | null; preview: string | null }) => void;
  preview: string | null;
}

export const NodeImageUpload = ({ label, onChange, preview }: NodeImageUploadProps) => (
  <div className="mb-3 relative">
    <div className="absolute left-3 top-2 text-xs text-purple-600 font-medium z-[1]">
      {label}
    </div>
    <div className="w-full px-3 pt-7 pb-2 rounded-3xl border border-gray-100 
      bg-white box-border shadow-sm text-center">
      {preview ? (
        <div>
          <img 
            src={preview} 
            alt="Preview" 
            className="max-w-full max-h-[200px] rounded-xl"
          />
          <button
            onClick={() => onChange({ file: null, preview: null })}
            className="bg-blue-600 text-white border-none rounded px-4 py-2 
              cursor-pointer font-medium text-sm hover:bg-blue-700 
              transition-colors duration-200 mt-2"
          >
            Remove Image
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <label
            htmlFor="file-upload"
            className="flex items-center gap-2 px-4 py-2 bg-white border-2 
              border-dashed border-gray-400 rounded-xl cursor-pointer text-sm
              transition-all duration-200 hover:bg-purple-50"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Choose an image
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  onChange({
                    file,
                    preview: reader.result as string
                  });
                };
                reader.readAsDataURL(file);
              }
            }}
            className="hidden"
          />
          <span className="text-xs text-gray-500">
            JPG, PNG, WEBP
          </span>
        </div>
      )}
    </div>
  </div>
);