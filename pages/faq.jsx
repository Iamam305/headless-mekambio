import React from 'react'
import Banner from '../components/Banner'
import Layout from '../components/Layout'

const Faq = () => {
  return (
    <Layout>
        <Banner/>

        <section class="faqs-section pt-120 rpt-90 pb-115 rpb-85 wow fadeInUp delay-0-2s animated" style="visibility: visible; animation-name: fadeInUp;">
            <div class="container">
               <div class="section-title mb-35">
                    <span class="sub-title-two">¿Tienes alguna pregunta? </span>
                    <h2>Preguntas Frecuentes </h2>
                </div>
                <div class="tab-content faq-accordion">
                    <div class="tab-pane fade show active" id="tabContent1">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <a class="card-header" href="#" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse2">¿Cuánto cuesta ser Expert en meKambio?<span class="toggle-btn"></span>
                                    </a>
                                    <div id="collapse2" class="collapse show" data-parent="#tabContent1">
                                        <div class="card-body">
                                            <p>Registrarse en meKambio como Expert no tiene ningún coste. Regístrate, crea tu perfil y accede a toda la información de forma gratuita. Si quieres crear sesiones de pago, debes suscribirte a uno de nuestros planes. Con el objetivo de mantener un precio competitivo y que se ajuste a tus necesidades, cada plan tiene unas características distintas en cuanto a precio de suscripción y comisiones.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <a class="collapsed card-header" href="#" data-toggle="collapse" data-target="#collapse0" aria-expanded="false" aria-controls="collapse0">¿Qué coste tiene un plan de suscripción?<span class="toggle-btn"></span>
                                    </a>
                                    <div id="collapse0" class="collapse" data-parent="#tabContent1">
                                        <div class="card-body">
                                            <p>Si quieres crear sesiones de pago, debes suscribirte a un plan de suscripción. Hay diferentes planes de suscripción con distintos precios. El precio dependerá del acceso que quieras a la plataforma y el uso que quieras hacer de ella.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <a class="collapsed card-header" href="#" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">¿Cuánto es la comisión?<span class="toggle-btn"></span>
                                    </a>
                                    <div id="collapse4" class="collapse" data-parent="#tabContent1">
                                        <div class="card-body">
                                            <p>Cada sesión que tengas con un cliente tendrá aplicada una comisión. Queremos estar seguros de que cada Expert obtiene el rendimiento que mejor le conviene, y que nadie malgaste su dinero. Nuestras comisiones están basadas en tu actividad, tanto en sesiones como eventos. Cada plan de suscripción tiene comisiones específicas para ofrecerte el mayor valor posible. </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <a class="collapsed card-header" href="#" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">¿Cómo se paga al Expert?<span class="toggle-btn"></span>
                                    </a>
                                    <div id="collapse6" class="collapse" data-parent="#tabContent1">
                                        <div class="card-body">
                                            <p>Todos los pagos se realizan mediante una pasarela segura de pago, STRIPE. Recibirás mensualmente el pago correspondiente a la actividad que hayas generado, menos el importe correspondiente a la comisión por los Servicios prestados.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <a class="collapsed card-header" href="#" data-toggle="collapse" data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">¿Cuánto debe durar una sesión?<span class="toggle-btn"></span>
                                    </a>
                                    <div id="collapse8" class="collapse" data-parent="#tabContent1">
                                        <div class="card-body">
                                            <p>Queremos darte la libertad de decidir el formato de tus sesiones. Dependiendo tus necesidades, podrás crear sesiones desde 15 minutos de duración hasta 2 horas.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="card">
                                    <a class="collapsed card-header" href="#" data-toggle="collapse" data-target="#collapse1" aria-expanded="false" aria-controls="collapse1">¿Qué precio he de asignar a cada sesión?<span class="toggle-btn"></span>
                                    </a>
                                    <div id="collapse1" class="collapse" data-parent="#tabContent1">
                                        <div class="card-body">
                                            <p>Precios flexibles para Experts es uno de nuestros principales beneficios. Tú decides cuál es el precio de cada una de tus sesiones. Nos encantaría que los Servicios que ofrece meKambio fueran accessibles para todo tipo de presupuestos e impulsar la transformación profesional sin límite alguno. Al mismo tiempo entendemos que hay un equilibrio que mantener, por eso lo dejamos a tu libre elección. Piensa en ello, sé honesto, y define tus precios. Si no estás seguro, contacta con nosotros y te ayudaremos.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <a class="collapsed card-header" href="#" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">¿Si alguien no se presenta, se me pagará la sesión?<span class="toggle-btn"></span>
                                    </a>
                                    <div id="collapse3" class="collapse" data-parent="#tabContent1">
                                        <div class="card-body">
                                            <p>Que te dejen plantado no es agradable, a nadie le gusta. Sin embargo, puede haber situaciones en las que no haya otra alternativa, y distintas situaciones requieren distintas soluciones. Echa un vistazo a nuestros <a href="/terms.html">Términos de Uso</a>  y accede a qué sucede en cada caso.</p>
                                        </div>
                                    </div>
                                </div>
                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default Faq