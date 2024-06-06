import Input from "../Input/Input"
import Button from "../Button/Button"
import Select from "../Select/Select"

export default function Main() {
  const value = ["binary", "octal", "decial", "hexadecimal"]
  return(
  <main className="bg-primary-300 m-8 my-auto p-8 py-16 border-2 border-primary-200 rounded-md flex flex-col gap-4 justify-between">
    <Input placeholder="0" id="valor" label="Valor"/>
    <Select id={"para"} name={"Para:"} values={value}/>
    <Button text="Inverter"/>
    <Select id={"para"} name={"Para:"} values={value}/>
    <Button text="Converter"/>
    <Input placeholder="0" id="convercao" label="Valor convertido:"/>
  </main>
  )
}
