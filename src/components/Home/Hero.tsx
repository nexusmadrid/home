import { Button, Container } from "react-bootstrap";
import { siteConfig } from "../../siteConfig";
import { FaWhatsapp } from "react-icons/fa";
import whiteLogo from "../../assets/images/brand/bordered.png"

export default function HeroSection() {
  return (
      <section className="hero">
          {/* HERO */}
        <Container className="hero-content text-center">
          <div className="hero-img-wrapper d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <img src={whiteLogo} alt="Nexus logo" />
            </div>
            <div className="hero-text">
              <p className="lead mb-4 mx-auto" style={{ maxWidth: 640 }}>
                Conectamos talento, ideas y oportunidades. Un espacio para
                pasar de la intención a la ejecución, construyendo proyectos reales en equipo.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Button
                  href={siteConfig.slackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="success"
                  size="lg"
                  className="d-flex align-items-center gap-2"
                >
                  <FaWhatsapp /> Unirme por Whatsapp
                </Button>
                {/* <Button
                  href={siteConfig.solicitudGitUrl}
                  variant="outline-light"
                  size="lg"
                  className="d-flex align-items-center gap-2"
                >
                  <FaGithub /> Unirme por GitHub
                </Button> */}
              </div>
          </div>
          </div>
        </Container>
      </section>
  )
}
