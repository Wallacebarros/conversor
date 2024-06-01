import Input from "../Input/Input"
import Button from "../Button/Button"

export default function Main() {
  return(
  <main className="bg-primary-300 m-8 my-auto p-8 py-16 border-2 border-primary-200 rounded-md flex flex-col gap-4 justify-between">
    <Input placeholder="0" id="valor" label="Valor"/>
    <Input placeholder="" id="entrada" label="Converter de:"/>
    <Button text="Inverter"/>
    <Input placeholder="" id="saida" label="Para:"/>
    <Button text="Converter" />
    <Input placeholder="0" id="convercao" label="Valor convertido:"/>
  </main>
  )
}
