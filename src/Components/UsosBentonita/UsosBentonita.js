//styles
import '../UsosBentonita/usosBentonita.css'

function UsosBentonita() {

  return (
    <section className='container-usos'>    
        <div className='container-title-subtitle'>
            <h3 className='title-usos'>Usos de la bentonita</h3>
            <p className='subtitle-usos'>Las características especiales de la bentonita (expansión, absorción de agua, viscosidad, tixotropía) permiten el uso de este material en un amplio rango de sectores industriales y aplicaciones.</p>
        </div>
        <div className='container-img-datos'>
            <img src='../assets/gato.svg' alt='gato' className='img-usos'/>
           <p className='description-usos'>Arena aglutinante para gatos</p>

           <img src='../assets/construccion.svg' alt='construccion' className='img-usos' />
           <p className='description-usos'>Construcción</p>

           <img src='../assets/maquillaje.svg' alt='maquillaje' className='img-usos' />
           <p className='description-usos'>Maquillaje</p>
        </div>


      </section>
  )
    }
   
export default UsosBentonita;





  
