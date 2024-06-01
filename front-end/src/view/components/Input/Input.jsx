export default function Input({placeholder, id, label}) {
  return(
    <div>
      <label
        className="text-primary-100 text-2xl font-medium"
        htmlFor={id}
      >
        {label}
      </label>

      <input
        className="bg-primary-400 w-full py-1 rounded-lg border-primary-200 border-2 text-primary-100 text-center text-2xl outline-none placeholder:text-primary-200 placeholder:text-center"
        placeholder={placeholder}
        id={id}
      />
    </div>
  )
}
