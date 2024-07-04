import { Field, ErrorMessage } from "formik";

const InputForm = ({ label, type, name, handleChange, value, placeholder = "", isError}) => {
  return (
    <div className='mb-5'>
      <label
        htmlFor={name}
        className={`block mb-2 text-sm font-medium ${isError ? "text-red-700" : "text-gray-900"}`}
      >
        {label}
      </label>
      <Field
        type={type}
        name={name}
        className={`border text-sm rounded-lg block w-full p-2.5 ${isError ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500" : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500"}`}
        onChange={handleChange}
        value={value}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component='div' className="mt-2 text-sm text-red-600" />
    </div>
  )
}

export default InputForm
