import ComponentChildren from "./componentChildren";
import ComponentProps from "./componentProps";


export default function learningProps() {
  return (
    <div>
      <h1 className="blue" >Learning props</h1>

      <ComponentProps 
        titulo={'Redline'} 
        subtitulo={'Text'}
        pequeno
      > Título </ComponentProps>

      <ComponentChildren>Componente Children</ComponentChildren>
      <ComponentChildren>Children</ComponentChildren>
     
    </div>
  )
}