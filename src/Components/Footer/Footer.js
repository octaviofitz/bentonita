//styles
import '../Footer/footer.css'
//react
import {Link} from 'react-router-dom'

function Footer() {



  return (
    <div className='footer'>
        <div className='container-footer'>
            <p className='title-footer'>Bentonita</p>
            <a target='_blank' href='https://goo.gl/maps/NErDBLkRu9rTnidCA'><p className='datos-footer'>Buenos Aires</p></a>
            <p className='datos-footer'>Argentina</p>

        </div>

        <div className='container-footer'>
            <p className='title-footer'>Utilidades</p>
            <p className='datos-footer'>Inicio</p>
            <p className='datos-footer'>Propiedades</p>
        </div>

        <div className='container-footer-last'>
            <p className='title-footer'>Contacto</p>
            <a target='_blanck' href='https://api.whatsapp.com/send?phone=115930042'><i className="fab fa-whatsapp"></i></a>
            <a target='_blank' href='http://www.rubicat.com.ar'><i className="fas fa-globe-americas"></i></a>
        </div>

      </div>
  );
}

export default Footer;
