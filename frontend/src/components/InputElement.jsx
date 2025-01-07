import React from 'react'

const InputElement = ({ label, name, type = 'text', required = '', placeholder, onChange, value }) => {
  return (
    <div className="py-2">
      <label className="block font-semibold text-gray-700 py-1">{label}</label>
      <input
        type={type}
        className="w-80 border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-medium"
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value} />
    </div>
  )
}

export default InputElement