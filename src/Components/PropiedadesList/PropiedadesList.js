//styles
import '../PropiedadesList/propiedadesList.css'
//components
import Propiedades from "../Propiedades/Propiedades";


function PropiedadesList({key, data}) {

  return (
    <>    
        <div className="container-propiedades-list">
           {data.map(propiedad=> {
              return(
                  <article className='container-propiedades' key={propiedad.id}  >
                { <Propiedades data={propiedad} /> }
                
                </article>
              )
          })}

  </div>       
      </>
  )
    }
   
export default PropiedadesList;





  
