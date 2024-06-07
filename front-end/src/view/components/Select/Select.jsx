export default function({id, name, values}) {
  return(
    <div className="flex flex-col">
      <label
        className="label"
        htmlFor={id}
      >
        {name}
      </label>
      <select
        className="select"
        id={id}
      >
        {values.map(value => {
            return <option value={value}>{value}</option>
          })
        }
      </select>
    </div>
  )
}
