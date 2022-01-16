//estilos
import '../PropiedadesContainer/propiedadesContainer.css'
//components
import PropiedadesList from "../PropiedadesList/PropiedadesList";

function PropiedadesContainer() {

    const propiedades= [
        {
            id: 1,
            title: 'Absorción',
            img: 'bentonita.jpg',
            description: 'La bentonita, con predominio de cationes de sodio permite que el agua penetre a través de las plaquetas, provocando hinchazón.'
        },
        {
            id: 2,
            title: 'Impermeabilización',
            img: 'bentonita1.jpg',
            description: 'Cuando el agua es absorbida por la bentonita, se forma un gel semisólido con fuerte resistencia a la presión hidrostática.'
        },
        {
            id: 3,
            title: 'Viscosidad',
            img: 'yacimiento.jpeg',
            description: 'Cuando la bentonita se dispersa en agua, se forman suspensiones coloidales altamente estables con alta viscosidad y tixotropía.'
        }
    ]
 
  return (  
      <section className='container-propiedades'>
            <div>
            <h3 className='title-propiedades'>Propiedades del mineral</h3>  
            </div>
            <div className="propiedades-div"> 
             <PropiedadesList key={propiedades.id} data={propiedades}/>  
             </div> 
             </section>
  )
    }
   
export default PropiedadesContainer;





  
