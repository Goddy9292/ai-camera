// components/GenderCheckboxList.tsx
"use client";

import React, { useState } from "react";

interface GenderCheckboxListProps {
  onChange: (selected: string[]) => void;
}

const GenderCheckboxList: React.FC<GenderCheckboxListProps> = ({ onChange }) => {
  const options = [
    { id: "male", label: "Male" },
    { id: "female", label: "Female" },
    { id: "other", label: "Other" },
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    const newSelected = selected.includes(id)
      ? selected.filter((item) => item !== id)
      : [...selected, id];
    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option.id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox text-blue-600 w-4 h-4" // Tailwind checkbox styles
            checked={selected.includes(option.id)}
            onChange={() => handleCheckboxChange(option.id)}
          />
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default GenderCheckboxList;
