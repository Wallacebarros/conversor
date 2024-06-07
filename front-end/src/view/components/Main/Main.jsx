import Input from "../Input/Input"
import Button from "../Button/Button"
import Select from "../Select/Select"

export default function Main() {
  const value = ["binary", "octal", "decial", "hexadecimal"]
  return(
  <main className="main">
    <Input placeholder="0" id="valor" label="Valor"/>
    <Select id={"de"} name={"De:"} values={value}/>
    <Button text="Inverter"/>
    <Select id={"para"} name={"Para:"} values={value}/>
    <Button text="Converter"/>
    <Input placeholder="0" id="convercao" label="Valor convertido:"/>
  </main>
  )
}
