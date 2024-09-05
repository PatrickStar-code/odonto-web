import React from 'react'

type SelectProps = {
  options: { value: string; label: string }[]
  label?: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  value: string
} & React.ComponentProps<'select'>

export default function SelectComponent({
  options,
  label,
  name,
  onChange,
  value,
  ...props
}: SelectProps) {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full mt-1 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
