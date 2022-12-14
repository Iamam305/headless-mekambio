import React from 'react'
import Banner from '../components/Banner'
import Layout from '../components/Layout'

const Support = () => {
  return (
    <Layout>
        <Banner/>

        <section className="partner-section rel z-1 pt-120 rpt-90 pb-75 rpb-55">
  <div className="container">
    <h4 className="font-weight-bolder">Usuarios</h4>
    <a href="#">
      <h5 className="font-weight-normal mb-1">• Cómo funciona</h5>
    </a>
    <a href="faq.html">
      <h5 className="mt-0 font-weight-normal">
        • Experts Preguntas Frecuentes
      </h5>
    </a>
    <h4 className="font-weight-bolder mt-lg-4">Legal</h4>
    <a href="#">
      <h5 className="font-weight-normal mb-1">• Política de Privacidad</h5>
    </a>
    <a href="terms.html">
      <h5 className="mt-0 font-weight-normal mb-1">• Términos de uso</h5>
    </a>
    <a href="refund-policy.html">
      <h5 className="mt-0 font-weight-normal">
        • Reembolsos y Política de Privacidad
      </h5>
    </a>
    <h5 className="font-weight-normal mt-lg-5 ">
      Si no has encontrado lo que estabas buscando, contacta a nuestro equipo de
      soporte.
    </h5>
    <h5 className="font-weight-normal mt-lg-2 ">Contactar con Soporte :</h5>
    <h5 className="font-weight-normal mt-lg-2 ">
      Envía un email a <a href="mailto:info@meKambio.com">info@meKambio.com</a>{" "}
    </h5>
    <h5 className="font-weight-normal mb-1">
      • Describe tu incidencia o pregunta y revisa la información existente en
      el Centro de Soporte
    </h5>
    <h5 className="font-weight-normal mb-1">
      • Si no encuentras la respuesta a tu pregunta puedes añadir un pantallazo
      o documentación de soporte que podamos consultar para ofrecerte una
      solución.
    </h5>
    <h4 className="mt-4">The meKambio Team</h4>
  </div>
</section>

    </Layout>
  )
}

export default Support