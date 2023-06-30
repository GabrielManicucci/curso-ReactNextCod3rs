

export default function firstComponent() {
  

  function elementosFlexiveis( valor ) {

    let elements = []
    let id = 0

    for ( let i = 0; i <= valor; i++ ) {
      elements.push(i)
    }
    
    elements = elements.map( Number => ( <h4 key={ ++id } >{Number}</h4> ) )

    return elements
  }
  
  return ( 
    <div>

      <div>
          { elementosFlexiveis(10) }
      </div>

      <div>
        { elementosFlexiveis(20) }
      </div>

      <div>
      { elementosFlexiveis(30) }
      </div>

    </div>
  )
}