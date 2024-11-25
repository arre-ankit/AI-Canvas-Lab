interface NodeSelectProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
}

export const NodeSelect = ({ label, value, onChange, options }: NodeSelectProps) => (
  <div className="mb-3 relative">
    <div className="absolute left-3 top-2 text-xs text-purple-600 font-medium z-[1]">
      {label}
    </div>
    <select 
      value={value} 
      onChange={onChange}
      className="w-full px-3 pt-7 pb-2 rounded-3xl border border-gray-100 outline-none text-sm bg-white box-border shadow-sm appearance-none cursor-pointer
        bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%236b7280%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27%3E%3C/path%3E%3C/svg%3E')] 
        bg-no-repeat bg-right-3 bg-[length:16px] pr-8
        transition-all duration-200
        hover:border-purple-600 hover:shadow-purple-100 hover:shadow-md
        focus:border-purple-600 focus:border-2 focus:shadow-purple-100 focus:shadow-md"
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);