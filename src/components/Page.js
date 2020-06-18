import React from 'react';
import { Link } from "react-scroll";

import i1 from './img/about3.jpeg';
import i2 from './img/habilities/1.JPG';
import i3 from './img/design/1.JPG';
import i4 from './img/design/2.gif';
import i5 from './img/design/3.gif';
import i6 from './img/design/4.gif';
import i7 from './img/design/5.png';

function Page () {

    // Cuando se baja la pantalla se ejecuta esta funcion
    window.onscroll = function() {myFunction()};

    //Agrega la clase sticky a al header cuando se baja la pantalla. Quita sticky cuando se vuelve al estado inicial de la pagina 
    function myFunction() {
        // Variable de header
        var header = document.getElementById("myTopnav");

        // Ve o encuentra la offsetTop del header 
        var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    }

    return(
        // Main container
        <div className="main-container">
            
            {/* Header */}
            <div className="header" id="myTopnav">
                <h2 className="logo">Portafolio</h2>
                <input type="checkbox" id="chk"/>
                <label htmlFor="chk" className="show-menu-btn">
                    <i className="fa fa-ellipsis-h"></i>
                </label>

                <ul className="menu">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration= {500}
                    >Home</Link>

                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration= {500}
                    >Acerca de</Link>

                    <Link
                        activeClass="active"
                        to="habilities"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration= {500}
                    >Habilidades</Link>

                    <Link
                        activeClass="active"
                        to="design"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration= {500}
                    >Trabajos</Link>

                    <Link
                        activeClass="active"
                        to="video"
                        spy={true}
                        smooth={true}
                        offset={-90}
                        duration= {500}
                    >Videos</Link>

                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                    >Contacto</Link>

                    <label htmlFor="chk" className="hide-menu-btn">
                        <i className="fa fa-times"></i>
                    </label>
                </ul>

            </div>
            {/* Header */}

            {/* Main content */}
            <div className="main-content">

                {/* Home Section */}
                <section className="home section" id="home">
                    <div className="container">
                        <div className="intro">
                            <img src={i1} alt="profile" className="shadow-dark"/>
                            <h1>Jose Andres</h1>
                            <p>Programador y Diseñador Web</p>
                            <div className="social-link">
                                <a href="https://www.facebook.com/joseandres.duartehidalgo"><i className="fa fa-facebook"></i></a>
                                <a href="https://twitter.com/JoawAndres"><i className="fa fa-twitter"></i></a>
                                <a href="https://github.com/JoseCR-27"><i className="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Home Section*/}

                {/*About Section*/}
                <section className="about section" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>Acerca de</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="about-content padd-15">
                                <div className="row">
                                    <div className="about-text padd-15">
                                        <h3>Me llamo Jose Andres y soy estudiante de <span>ITM</span></h3>
                                        <p>Soy un estudiante de tercer año de la carrera de Informática y Tecnología Multimedia en la Universidad de Costa Rica. Durante la carrera he trabajado en las areas de diseño y desarrollo web, estoy preparado para adaptarme a diferentes ambientes laborales, disfruto lo que hago y siempre estoy en busca de mejorar.</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="personal-info padd-15">
                                        <div className="row">
                                            <div className="info-item padd-15">
                                                <p>Fecha Nacimiento : <span>23/12/1999</span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>Edad : <span>20</span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>Estado Civil : <span>Soltero</span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>País : <span>Costa Rica</span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>Ciudad : <span>Heredia</span></p>
                                            </div>
                                            <div className="info-item padd-15">
                                                <p>Telefono : <span>+506 83414500</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="skills padd-15">
                                       <div className="row">
                                            <div className="skill-item padd-15">
                                                <h5>HTML</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style={{width: '90%'}}></div>
                                                    <div className="skill-percent">90%</div>
                                                </div>
                                            </div>

                                            <div className="skill-item padd-15">
                                                <h5>CSS</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style={{width: '80%'}}></div>
                                                    <div className="skill-percent">80%</div>
                                                </div>
                                            </div>

                                            <div className="skill-item padd-15">
                                                <h5>JavaScript</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style={{width: '60%'}}></div>
                                                    <div className="skill-percent">60%</div>
                                                </div>
                                            </div>

                                            <div className="skill-item padd-15">
                                                <h5>BootStrap</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style={{width: '70%'}}></div>
                                                    <div className="skill-percent">70%</div>
                                                </div>
                                            </div>

                                            <div className="skill-item padd-15">
                                                <h5>Java</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style={{width: '30%'}}></div>
                                                    <div className="skill-percent">30%</div>
                                                </div>
                                            </div>

                                            <div className="skill-item padd-15">
                                                <h5>Adobe</h5>
                                                <div className="progress">
                                                    <div className="progress-in" style={{width: '70%'}}></div>
                                                    <div className="skill-percent">70%</div>
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="education padd-15">
                                        <h3 className="title">Educación</h3>
                                        <div className="row">
                                            <div className="timeline-box padd-15">
                                                <div className="timeline shadow-dark">
                                                {/* Timeline Item*/}
                                                    <div className="timeline-item">
                                                        <div className="circle-dot"></div>
                                                        <h6 className="timeline-date"><i className="fa fa-calendar"></i>2010 - 2016</h6>
                                                        <h4 className="timeline-title">Bachillerato Colegio Biligüe Nueva Esperanza</h4>
                                                        <p className="timeline-text">Durante esos 6 años recibí clases y me gradue del Colegio Biligüe Nueva Esperanza</p>
                                                    </div>
                                                {/* End Timeline Item*/}
                                                {/* Timeline Item*/}
                                                <div className="timeline-item">
                                                    <div className="circle-dot"></div>
                                                    <h6 className="timeline-date"><i className="fa fa-calendar"></i>2017 - 2020</h6>
                                                    <h4 className="timeline-title">Estudiando Informática y Tecnología Multimedia</h4>
                                                    <p className="timeline-text">Actualmente cursando el 3 año</p>
                                                </div>
                                                {/* End Timeline Item*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End About Section*/}

                {/*Habilities Section*/}
                <section className="habilities section" id="habilities">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>Habilidades</h2>
                            </div>
                        </div>
                        <div className="row">
                            {/* Habilities Item */}
                            <div className="habilities-item padd-15">
                                <div className="habilities-item-inner">
                                    <div className="icon">
                                        <i className="fa fa-laptop"></i>       
                                    </div>
                                    <h4>Diseñador Web</h4>
                                    <p>Apto para Diseñar una Pagina Web y sus componentes</p>
                                </div>
                            </div>
                                {/* End Habilities Item */}

                            {/* Habilities Item */}
                            <div className="habilities-item padd-15">
                                <div className="habilities-item-inner">
                                    <div className="icon">
                                        <i className="fa fa-code"></i>       
                                    </div>
                                    <h4>Programador Web</h4>
                                    <p>Calificado para programar una Pagina Web</p>
                                </div>
                            </div>
                                {/* End Habilities Item */}

                            {/* Habilities Item */}
                            <div className="habilities-item padd-15">
                                <div className="habilities-item-inner">
                                    <div className="icon">
                                        <i className="fa fa-film"></i>       
                                    </div>
                                    <h4>Editor de Video</h4>
                                    <p>Eficaz con los programas de edición de video</p>
                                </div>
                            </div>
                            {/* End Habilities Item */}

                            {/* Habilities Item */}
                            <div className="habilities-item padd-15">
                                <div className="habilities-item-inner">
                                    <div className="icon">
                                        <i className="fa fa-camera-retro"></i>      
                                    </div>
                                    <h4>Montador  Editor</h4>
                                    <p>Competente para grabar y editar cortos de peliculas</p>
                                </div>
                            </div>
                            {/* End Habilities Item */}

                            {/* Habilities Item */}
                            <div className="habilities-item padd-15">
                                <div className="habilities-item-inner">
                                    <div className="icon">
                                        <i className="fa fa-pencil"></i>      
                                    </div>
                                    <h4>Diseñador de Identidad Grafica</h4>
                                    <p>Idoneo para diseñar un imagotipo y su libro de marca</p>
                                </div>
                            </div>
                            {/* End Habilities Item */}
                        </div>
                    </div>
                </section>
                {/*End Habilities Section*/}

                {/*Design Section*/}
                <section className="design section" id="design">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>Trabajos</h2>
                            </div>
                        </div>
                        <div className="row">
                            {/* Design Items */}
                            <div className="design-item padd-15">
                                <div className="design-item-inner shadow-dark">
                                    <div className="design-img">
                                        <img src={i2} alt="design"/>
                                    </div>
                                    <div className="design-info">
                                        <h4>Habilities</h4>
                                    </div>
                                </div>
                            </div>
                            {/* Design Items */}

                            {/* Design Items */}
                            <div className="design-item padd-15" >
                                <div className="design-item-inner shadow-dark">
                                    <div className="design-img">
                                        <img src={i3} alt="design"/>
                                    </div>
                                    <div className="design-info">
                                        <h4>Design</h4>
                                    </div>
                                </div>
                            </div>
                            {/* Design Items */}

                            {/* Design Items */}
                            <div className="design-item padd-15" >
                              <div className="design-item-inner shadow-dark">
                                    <div className="design-img">
                                        <img src={i4} alt="design"/>
                                    </div>
                                    <div className="design-info">
                                        <h4>Design</h4>
                                    </div>
                                </div>
                            </div>
                            {/* Design Items */}

                            {/* Design Items */}
                            <div className="design-item padd-15" >
                              <div className="design-item-inner shadow-dark">
                                    <div className="design-img">
                                        <img src={i5} alt="design"/>
                                    </div>
                                    <div className="design-info">
                                        <h4>Design</h4>
                                    </div>
                                </div>
                            </div>
                            {/* Design Items */}


                            {/* Design Items */}
                            <div className="design-item padd-15" >
                              <div className="design-item-inner shadow-dark">
                                    <div className="design-img">
                                        <img src={i6} alt="design"/>
                                    </div>
                                    <div className="design-info">
                                        <h4>Design</h4>
                                    </div>
                                </div>
                            </div>
                            {/* Design Items */}


                            {/* Design Items */}
                            <div className="design-item padd-15" >
                              <div className="design-item-inner shadow-dark">
                                    <div className="design-img">
                                        <img src={i7} alt="design"/>
                                    </div>
                                    <div className="design-info">
                                        <h4>Design</h4>
                                    </div>
                                </div>
                            </div>
                            {/* Design Items */}
                        </div>
                    </div>
                </section>
                {/*End Design Section*/}

                {/* Videos Section */}
                <section className="video section" id="video">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>Videos</h2>
                            </div>
                        </div>

                        <div className="row">

                            {/* Video Item */}
                            <div className="videos-item padd-15">
                                <div className="responsive-iframe">    
                                    <iframe
                                        title="Video"
                                        width="530" 
                                        height="315"  
                                        src="https://www.youtube.com/embed/yD9Q9sMujuE" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                            {/*Fin Video Item */}

                            {/* Video Item */}
                            <div className="videos-item padd-15">
                                <div className="responsive-iframe">    
                                    <iframe
                                        title="Video"
                                        width="530" 
                                        height="315"  
                                        src="https://www.youtube.com/embed/ZDOPAhQ4QHk" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                            {/*Fin Video Item */}

                            {/* Video Item */}
                            <div className="videos-item padd-15">
                                <div className="responsive-iframe">    
                                    <iframe
                                        title="Video"
                                        width="530" 
                                        height="315"  
                                        src="https://www.youtube.com/embed/5ICl7MKCPdg" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                            {/*Fin Video Item */}

                            {/* Video Item */}
                            <div className="videos-item padd-15">
                                <div className="responsive-iframe">    
                                    <iframe
                                        title="Video"
                                        width="530" 
                                        height="315"  
                                        src="https://www.youtube.com/embed/Duwjg3BXa4c" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                            {/*Fin Video Item */}


                            {/* Video Item */}
                            <div className="videos-item padd-15">
                                <div className="responsive-iframe">    
                                    <iframe
                                        title="Video"
                                        width="530" 
                                        height="315"  
                                        src="https://www.youtube.com/embed/VUW4qPe5HQk" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                            {/*Fin Video Item */}

                            {/* Video Item */}
                            <div className="videos-item padd-15">
                                <div className="responsive-iframe">    
                                    <iframe
                                        title="Video"
                                        width="530" 
                                        height="315"  
                                        src="https://www.youtube.com/embed/KSqcKmLdir4" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                                        allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                            {/*Fin Video Item */}

                        </div>
                    
                    </div>
                </section>
                {/* Fin Videos Section */}

                {/*Contact Section*/}
                <section className="contact section" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="section-title padd-15">
                                <h2>Contacto</h2>
                            </div>
                        </div>
                        <div className="row">
                            {/* Informacion de contacto */}
                            <div className="contact-info-item padd-15">
                                <div className="icon"><i className="fa fa-phone"></i></div>
                                <h4>Numero Telefónico</h4>
                                <p>+506 83414500</p>
                            </div>
                            {/*Final Informacion de contacto */}

                            {/* Informacion de contacto */}
                            <div className="contact-info-item padd-15">
                                <div className="icon"><i className="fa fa-map-pin"></i></div>
                                <h4>Dirección</h4>
                                <p>Condominio el Bulevar en la Liliana, Casa 28</p>
                            </div>
                            {/*Final Informacion de contacto */}

                            {/* Informacion de contacto */}
                            <div className="contact-info-item padd-15">
                                <div className="icon"><i className="fa fa-envelope-open"></i></div>
                                <h4>Email</h4>
                                <p>vitodua07@gmail.com <br/> joseandres9912@hotmail.com</p>
                            </div>
                            {/*Final Informacion de contacto */}
                        </div>
                    </div>
                </section>
                {/*End Contact Section*/}

            </div>
            {/* Fin Main content */}

        </div>
        // {/* Fin Main container */}
    );
};

export default Page;

