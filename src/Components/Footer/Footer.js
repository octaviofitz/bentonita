//styles
import '../Footer/footer.css'
//react
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className='container-footer'>
            <p className='title-footer'>Bentonita</p>
            <p className='datos-footer'>Buenos Aires</p>
            <p className='datos-footer'>Argentina</p>

        </div>

        <div className='container-footer'>
            <p className='title-footer'>Utilidades</p>
            <p className='datos-footer'>Inicio</p>
            <p className='datos-footer'>Propiedades</p>
        </div>

        <div className='container-footer-last'>
            <p className='title-footer'>Contacto</p>
            <i className="fab fa-whatsapp"></i>
            <Link target='_blank' to='www.rubicat.com.ar'><i className="fas fa-globe-americas"></i></Link>
        </div>

      </div>
  );
}

export default Footer;
