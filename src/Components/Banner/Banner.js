import '../Banner/banner.css'
import yacimientoRio from '../../assets/yacimiento-rio-negro.jpg'
//prueba carrusel


function Banner() {
  return (
    <section className='presentacion'>
      <div>
     <img src={yacimientoRio} alt='presentacionImg' className='img-banner'></img>     
     </div>
     <div className='card-banner'>
     <h1 className='title-presentacion'>Bentonita</h1>
     <p className='info-presentacion'>La bentonita es un tipo de arcilla que tiene varios usos industriales y profesionales. Es un grupo de minerales industriales con diferentes características mineralógicas y genéticas, con una gran variedad de aplicaciones y propiedades tecnológicas.
</p>
     </div>
    </section>
  );
}

export default Banner;
