
export default function ComponentProps( {titulo, subtitulo, children, pequeno} ) {
  console.log(titulo, subtitulo, children)

    // renderização condicional
    return pequeno ? (
      <>
        <p> {titulo} </p>
        <p> {subtitulo} </p>
      </>
    ) : (
      <>
        <h2> {titulo} </h2>
        <h3> {subtitulo} </h3>
      </>
    )
}