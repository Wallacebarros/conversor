export default function({id, name, values}) {
  return(
    <div className="flex flex-col">
      <label
        className="text-primary-100 text-2xl font-medium"
        htmlFor={id}
      >
        {name}
      </label>
      <select
        className="bg-primary-400 w-full py-1 rounded-lg border-primary-200 border-2 text-primary-100 text-center text-2xl outline-none placeholder:text-primary-200 placeholder:text-center"
        id={id}
      >
        {values.map(value => {
            return <option value={value} className="">{value}</option>
          })
        }
      </select>
    </div>
  )
}
