'use strict'


    document.getElementById("servicios").innerHTML= /*html */`
            <!-- Services-->
            <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Servicios</h2>
                    
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-wifi fa-stack-1x fa-inverse"></i>
                            
                        </span>
                        <h4 class="my-3">Social Wifi</h4>
                        <p class="text-muted">Somos pioneros en la monetizacion de redes de Wifi mediante diversos medios.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            
                            <i class="fas fa-photo-video fa-stack-1x fa-inverse"></i>
                            
                        </span>
                        <h4 class="my-3">Generación De Contenido</h4>
                        <p class="text-muted">Generamos el contenido que usted necesita para su público objetivo.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            
                            <i class="fas fa-bullseye fa-stack-1x fa-inverse"></i>
                            
                        </span>
                        <h4 class="my-3">Ultra Segmentación</h4>
                        <p class="text-muted">Nuestro sistema permite segmentar(genero, hora y ubicación) dentro de un recinto para que los anuncios sean super direccionados.</p>
                    </div>
                </div>
            </div>
        </section>
    
            
    `
    ;

    document.getElementById("galeria").innerHTML= /*html */`
    <!-- Galeria-->
    <section class="page-section bg-light" id="portfolio">
    <div class="container">
        <div class="text-center">
            <h2 class="section-heading text-uppercase">Galería</h2>
            <h3 class="section-subheading text-muted">Ejemplos de como funciona nuestro sistema.</h3>
        </div>
        <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/cabecera-post-ideas-de-negocios.png" alt="" />
                    </a>
                    <div class="portfolio-caption">
                        
                        <div class="portfolio-caption-heading">Anúncie con Nosotros</div>
                      
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/CFUN.png" alt="" />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">¿Como Funciona?</div>
                        
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/aumente.jpg" alt="" />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">Aumente sus ingresos</div>
                        
                    </div>
                </div>
            </div>

           
            
        </div>
    </div>
</section>
    

    
            
    `
;

document.getElementById("clientes").innerHTML= /*html */`
    <div class="py-5">
    <div class="container">
        
        <h2 class="text-center">Empresas Que Confian En Nosotros</h2>
        <div class="row">
            
            <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt="" /></a>
            </div>
            <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
            </div>
            <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
            </div>
            <div class="col-md-3 col-sm-6 my-3">
                <a href="#!"><img class="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
            </div>
        </div>
    </div>
    </div>
    
            
    `
;

document.getElementById("modales").innerHTML= /*html */`
    <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="modal-body">
                            <!-- Detalles del proyecto van acá-->
                            <h2 class="text-uppercase">¿Como Funciona?</h2>
                            <div class="video-responsive">
                                <video controls>
                                    <source src="assets/videos/leanon.mp4" type="video/mp4">
                                </video>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- Modal 2-->
    <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="modal-body">
                            <!-- Detalles del proyecto van acá-->
                            <h2 class="text-uppercase">Anuncie con nosotros</h2>
                            <div class="video-responsive">
                                <video controls>
                                    <source src="assets/videos/anuncieconnosotros.mp4" type="video/mp4">
                                </video>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- Modal 3-->
    <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="modal-body">
                            <!-- Detalles del proyecto van acá-->
                            <h2 class="text-uppercase">Aumente sus ingresos</h2>
                        
                            <a href="assets/img/Captira belleza.jpg" data-lightbox="roadtrip"><img class="img-fluid mx-auto" src="assets/img/Captira belleza.jpg" alt="" /></a>
                            <a href="assets/img/Captura hombre deporte.jpg" data-lightbox="roadtrip"><img class="img-fluid  mx-auto" src="assets/img/Captura hombre deporte.jpg" alt="" /></a>
                            
                            
                            
                            
                            <p>Al generar contenido exclusivo de productos o servicios usted puede hablarle directamente a sus clientes, sea certero en su publicidad.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
            
    `
 ;