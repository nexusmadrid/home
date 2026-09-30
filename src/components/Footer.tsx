import { Container } from 'react-bootstrap'
import { FaEnvelope } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'
import { FaWhatsapp } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <span className="small">
          © {new Date().getFullYear()} {siteConfig.nombreComunidad}. Todos los derechos reservados.
        </span>
        <div className="d-flex gap-3 fs-5">
          <a
            href={siteConfig.whatsappUrl}
            className="text-light"
            aria-label="Unirse al grupo de whatsapp"
          >
            <FaWhatsapp />
          </a>
          <a href={`mailto:${siteConfig.email}`} className="text-light" aria-label="Correo">
            <FaEnvelope />
          </a>
        </div>
      </Container>
    </footer>
  )
}
