import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaUsers, FaCode, FaBookOpen, FaWhatsapp } from 'react-icons/fa'
import { siteConfig } from '../siteConfig'
import EventsCarousel from '../components/Home/EventsCarousel'
import HeroSection from '../components/Home/Hero'
import qrCode from "../assets/images/brand/nexusqr.png"

export default function Home() {
  return (
    <>
      {/* HERO */}
      <HeroSection></HeroSection>

      {/* QUÉ HACEMOS */}
      <section className="py-5">
        <Container className='py-5'>
          <h1 className="section-title text-center">¿Porqué existimos?</h1>
          <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: 640 }}>
            Nexus nace para conectar talento, ideas y oportunidades dentro del ecosistema de 42, creando una comunidad práctica donde estudiantes, alumni y emprendedores puedan colaborar, validar sus ideas y convertirlas en proyectos reales.
          </p>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 text-center p-4 border-0 shadow-sm">
                <FaUsers size={32} className="text-primary mx-auto mb-3" />
                <Card.Body className="p-0">
                  <Card.Title>Comunidad</Card.Title>
                  <Card.Text className="text-muted">
                    Un espacio para conocer a otros estudiantes y ayudarnos entre todos.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center p-4 border-0 shadow-sm">
                <FaCode size={32} className="text-primary mx-auto mb-3" />
                <Card.Body className="p-0">
                  <Card.Title>Proyectos</Card.Title>
                  <Card.Text className="text-muted">
                    Trabajamos en proyectos comunes donde colaboramos en equipo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 text-center p-4 border-0 shadow-sm">
                <FaBookOpen size={32} className="text-primary mx-auto mb-3" />
                <Card.Body className="p-0">
                  <Card.Title>Aprendizaje</Card.Title>
                  <Card.Text className="text-muted">
                    Compartimos recursos, dudas y avances de forma constante.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <article className="container container-sm py-5">
          <h1 className='h1 text-center fw-bold'>Objetivo</h1>

          <p className='text-center mw-80 mb-3 mt-4'>
            Para los estudiantes, Nexus aporta comunidad, aprendizaje práctico más allá del código y oportunidades de desarrollo profesional dentro y fuera de 42. <br></br>Para 42, activa el talento del campus y refuerza la cultura de innovación. Para el ecosistema de emprendimiento (incubadoras, startups, PYMES e inversores), crea un punto de conexión con talento técnico motivado y proyectos en fase temprana.
          </p>
        {/* <table className='table mb-5'>
                <thead>
                    <tr>
                        <th>Aspecto</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Perfil de 42</strong></td>
                        <td>Personas con alta capacidad técnica, autonomía, curiosidad y mentalidad de aprendizaje.</td>
                    </tr>
                    <tr>
                        <td><strong>Problema identificado</strong></td>
                        <td>Muchas ideas no llegan a desarrollarse por falta de equipo, método, confianza, orientación o conexión con el ecosistema emprendedor.</td>
                    </tr>
                    <tr>
                        <td><strong>Necesidades detectadas</strong></td>
                        <td>Compartir ideas sin miedo, encontrar socios compatibles, recibir feedback, aprender a convertir ideas en proyectos, conectar con referentes y evitar avanzar en solitario.</td>
                    </tr>
                    <tr>
                        <td><strong>Propósito de la Liga</strong></td>
                        <td>Crear una comunidad con ambición de construir, aprender emprendiendo y generar impacto desde la tecnología que ayude a transformar ideas en proyectos reales.</td>
                    </tr>
                </tbody>
            </table> */}

          {/* <h2 className='h2 text-left fw-bold mb-3'>Qué aportamos</h2>
          <h3>🤝 Comunidad y networking</h3>
          <ul className='mb-3'>
              <li>Conocer personas con intereses y objetivos comunes.</li>
              <li>Crear conexiones entre perfiles técnicos, creativos y de negocio.</li>
              <li>Encontrar socios y colaboradores.</li>
              <li>Formar parte de una comunidad donde compartir dudas, inquietudes, dificultades y celebrar éxitos.</li>
          </ul>

          <h3>📚 Aprendizaje</h3>
          <ul className='mb-3'>
              <li>Asistir a charlas y conocer experiencias de emprendedores, alumni de 42 y startups.</li>
              <li>Aprender a generar ideas y presentarlas.</li>
              <li>Aprender a identificar problemas, diseñar soluciones y lanzar primeras versiones (MVP).</li>
              <li>Desarrollar habilidades emprendedoras:
                  <ul>
                      <li>Visión de mercado y negocio.</li>
                      <li>Creación de valor.</li>
                      <li>Gestión financiera.</li>
                      <li>Gestión de equipos.</li>
                      <li>Gestión de proyectos.</li>
                  </ul>
              </li>
          </ul>

        <h3>🚀 Desarrollo de proyectos</h3>
        <ul className='mb-3'>
            <li>Presentar ideas y recibir feedback constructivo.</li>
            <li>Participar en proyectos reales, hackathons, retos y dinámicas de innovación.</li>
            <li>Experimentar formas de trabajo más ágiles que el entorno corporativo tradicional.</li>
            <li>Construir un portfolio mediante iniciativas tangibles.</li>
            <li>Crear proyectos extraordinarios junto a equipos multidisciplinares.</li>
        </ul>
         */}
        </article>
      </section>

      {/* PREVIEW QUIENES SOMOS */}
      <section className="py-5 bg-light" id="hackathon">
        <Container>
          <div className="row justify-content-center mb-5">
            <div className="">
              <h1 className="section-title text-center mb-1">HACKATHON 42442</h1>
              <h5 className='text-center mt-0'>THE CALL TO THE CHALLENGE</h5>
              <div className="hacka-box">
                <p><strong>Objetivo:</strong> Transformar ideas en herramientas reales y útiles para la comunidad de estudiantes de 42 Madrid.</p>
                <p><strong>Escuadrones:</strong> Equipos de 3 a 5 personas asignados por sorteo.</p>
                <p><strong>Requisitos:</strong> Integración con la API de 42.</p>
              </div>
              
              <h2 className="section-title text-center mb-1 h2">5 días de sprint</h2>
              <p>🟣 <strong>30 SEP Lanzamiento.</strong> </p>
              <p>🟣 <strong>1 OCT, 13:00 Cierre Inscripciones.</strong> </p>
              <p>🟣 <strong>6 OCT, 18:00 Code Freeze.</strong> Cierre de repositorios en GitHub. No se aceptan nuevos commits.</p>
              <p>🟣 <strong>7 OCT, 13:00 Peer-Evaluation.</strong> Equipos validan entre sí los repositorios y aseguran que los proyectos cumplen los requisitos mínimos.</p>
              <p>🟣 <strong>7 OCT, 16:00 Demo Day en Studio 42.</strong> 4 min Pitch + 2 min Q&A frente al jurado + resultado de peer evaluation.</p>
 
              <h2 className="section-title text-center mb-1 h2">Recompensas</h2>
              <p>🗓️ <strong>Compensation Days.</strong> 3 días adicionales de Campus para tus proyectos, asignados para todos los proyectos desarrollados. (Requiere memoria de horas en README)</p>
              <p>🚀 <strong>Showcase en La Nave.</strong> Una sesión de 15 minutos en La Nave (el día 13 de Octubre) en la que el equipo ganador demostrará sus proyectos avanzados de 42, como RAG o Agent Smith, o, si aún no los ha completado, cómo ha abordado el reto del hackathon y qué resultados ha obtenido, para mostrar a emprendedores y startups su talento emprendedor y su potencial.</p>

              <div className='box-300x300 p-3 mx-auto'>
                <img
                  src={qrCode}
                  alt="Liga Nexus event"
                />
                <a className="text-center d-block mt-3 fw-bold btn btn-warning btn-lg" href={siteConfig.hackathonUrl}>
                  ¡Inscríbete ahora!
                </a>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <hr />
            <p className="text-center text-muted py-3">
              Un vistazo rápido a los eventos más importantes por venir en los que pronto podrás participar.
            </p>
            <EventsCarousel></EventsCarousel>
          </div>
          <div className="text-center mt-4">
            <Link to="/about" className="btn btn-outline-primary">
              Conócenos mejor
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="py-5">
        <Container className="text-center">
          <h2 className="section-title">¿Te unes tú también?</h2>
          <p className="text-muted mb-4">
            A medio plazo, la Liga aspira a convertirse en una plataforma estable de innovación, capaz de organizar eventos, acompañar proyectos, atraer referentes del ecosistema y generar una cultura emprendedora reconocible.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="success"
              className="d-flex align-items-center gap-2"
            >
              <FaWhatsapp /> Whatsapp
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
