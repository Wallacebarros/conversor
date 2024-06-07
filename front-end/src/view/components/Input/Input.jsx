export default function Input({placeholder, id, label}) {
  return(
    <div>
      <label
        className="label"
        htmlFor={id}
      >
        {label}
      </label>

      <input
        className="input"
        placeholder={placeholder}
        id={id}
      />
    </div>
  )
}
