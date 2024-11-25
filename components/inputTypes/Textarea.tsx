interface NodeTextareaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const NodeTextarea = ({ label, value, onChange }: NodeTextareaProps) => (
  <div className="mb-3 relative">
    <div className="absolute left-3 top-2 text-xs text-purple-600 font-medium z-[1]">
      {label}
    </div>
    <textarea
      value={value}
      onChange={onChange}
      placeholder="Enter text here..."
      className="w-full min-h-[100px] px-3 pt-7 pb-2 rounded-3xl 
        border border-gray-100 outline-none text-sm resize-y 
        font-inherit bg-white box-border shadow-sm
        transition-all duration-200
        hover:border-purple-600 hover:shadow-purple-100 hover:shadow-md
        focus:border-purple-600 focus:border-2 focus:shadow-purple-100 focus:shadow-md"
    />
  </div>
);