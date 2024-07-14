import React, { useState } from 'react';
import styles from './Home.module.css';
import cv from '../assets/cv/curriculum.marcos.bizzarri-24.pdf';

import aviao from '../assets/img/avioes.png';
import trabalho from '../assets/img/trabalho-uninter-bizzarri.png';
import perguntas from '../assets/img/perguntas.png';
import santander from '../assets/img/projeto-santander.png';
import facebook from '../assets/img/facebook-insta.png';

import htmlIcon from '../assets/languages/html.svg';
import cssIcon from '../assets/languages/css.svg';
import jsIcon from '../assets/languages/javascrip.svg';
import reactIcon from '../assets/languages/react.svg';
import bootstrapIcon from '../assets/languages/bootstrap.svg';

import video from '../assets/videos/bizzarriflights.mkv';
import video1 from '../assets/videos/sobre-marcos.mkv';
import video2 from '../assets/videos/perguntas-js.mkv';
import video3 from '../assets/videos/santander.mkv';
import video4 from '../assets/videos/facebook-clone.mkv';

import react from '../assets/languages/react.svg'; 
import html5 from '../assets/languages/html.svg';
import css3 from '../assets/languages/css.svg';
import js from '../assets/languages/javascrip.svg';
import bt from '../assets/languages/bootstrap.svg';

import mailIcon from '../assets/contatos/mail.svg';
import phoneIcon from '../assets/contatos/phone.svg';
import linkedinIcon from '../assets/contatos/linkedin.svg';
import githubIcon from '../assets/contatos/github.svg';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseVideo = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.textContainer}>
          <h5 className={styles.titulo_um}>Olá, eu sou o</h5>
          <span className={styles.titulo_dois}>Marcos Bizzarri :)</span>
          <br />
          <p className={styles.titulo_tres}>Desenvolvedor Front-End em React!</p>
          <div className={`${styles.actions} mt-3`}>
            <a href={cv} download className="btn btn-primary mr-2">Download CV</a>
            <a href="https://wa.me/5519994449107" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Entrar em contato</a>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <h2 className={styles.texto_um}>Sobre mim</h2>
        <p className={styles.texto}>
          Desenvolvedor Front-End com experiência em React, JavaScript, Styled Components, Bootstrap e Firebase.<br/>
          Apaixonado por criar interfaces web. <br/>
          Cursando o último semestre em Análise e Desenvolvimento de Sistemas.<br/> 
          Possui também experiência em projetos pessoais em HTML, CSS, JavaScript e React.<br/>
        </p>
      </div>
      <div className={styles.container_um}>
        <h2 className={styles.habilidades}>Habilidades</h2>
        <div className={styles.cards}>
          <div className={styles.box}>
            <img src={htmlIcon} alt="html" className={styles.img_html} />
            <p className={styles.paragra}>HTML5</p>
          </div>
          <div className={styles.box}>
            <img src={cssIcon} alt="css" className={styles.img_html} />
            <p className={styles.paragra}>CSS3</p>
          </div>
          <div className={styles.box}>
            <img src={jsIcon} alt="javascript" className={styles.img_html} />
            <p className={styles.paragra}>JavaScript</p>
          </div>
          <div className={styles.box}>
            <img src={reactIcon} alt="react" className={styles.img_html} />
            <p className={styles.paragra}>React</p>
          </div>
          <div className={styles.box}>
            <img src={bootstrapIcon} alt="bootstrap" className={styles.img_html} />
            <p className={styles.paragra}>Bootstrap</p>
          </div>
        </div>
      </div>
      <div className={styles.projeto}>
        <h1 className={styles.titulo_projeto}>Projetos</h1>
        
        <div className={styles.imagemContainer} onClick={() => handleImageClick('bizzarriFlights')}>
          <img src={aviao} alt="aviões" className={styles.imagem_aviao} />
          <div className={styles.overlay}>
            <div className={styles.textoOverlay}>
              <img src={react} alt="overlay" className={styles.imageinter} />
              <img src={html5} alt="overlay" className={styles.imageinter} />
              <img src={css3} alt="overlay" className={styles.imageinter} />
              <img src={bt} alt="overlay" className={styles.imageinter} />
            </div>
          </div>
        </div>
        <h2 className={styles.titulo_projeto_texto}>Projeto Bizzarri Flights</h2>
        {selectedProject === 'bizzarriFlights' && (
          <div className={styles.videoContainer}>
            <video className={styles.video} controls>
              <source src={video} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className={styles.links}>
              <a href="https://bizzarri-flights-2bb60.web.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Ver Projeto</a>
              <p className={styles.paragrafo_projeto}> O projeto <strong className={styles.color}>Bizzarri Flights</strong><br/>
                 é uma aplicação web desenvolvida em React.<br/>
                O objetivo do projeto é demonstrar<br/> habilidades em desenvolvimento front-end, <br/>
                utilizando várias tecnologias e práticas modernas.<br/></p>            
            </div>
            <button onClick={handleCloseVideo} className={styles.closeButton}>Fechar</button>
          </div>
        )}
      </div>

      <div className={styles.projeto}>
        <div className={styles.imagemContainer} onClick={() => handleImageClick('sobreMarcos')}>
          <img src={trabalho} alt="aviões" className={styles.imagem_aviao} />
          <div className={styles.overlay}>
            <div className={styles.textoOverlay}>
              <img src={html5} alt="overlay" className={styles.imageinter} />
              <img src={css3} alt="overlay" className={styles.imageinter} />
              <img src={js} alt="overlay" className={styles.imageinter} />
            </div>
          </div>
        </div>
        <h2 className={styles.titulo_projeto_texto}>Projeto sobre Marcos Bizzarri</h2>
        {selectedProject === 'sobreMarcos' && (
          <div className={styles.videoContainer}>
            <video className={styles.video} controls>
              <source src={video1} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className={styles.links}>
              <a href="https://marcosbizzarri.github.io/Portfolio-Marcos-Bizzarri/#" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Ver Projeto</a>
              <a href="https://github.com/MarcosBizzarri/Portfolio-Marcos-Bizzarri" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Ver Repositório</a>
               <br/>
               <br/>
               <br/>
              <p className={styles.paragrafo_projeto}> Projeto feito sobre o  <strong className={styles.color}> Marcos Bizzarri </strong>,<br/>
                 é uma aplicação web desenvolvida em HTML, CSS e JavaScript.<br/>
                O objetivo do projeto é demonstrar<br/> habilidades em desenvolvimento front-end, <br/>
                utilizando várias tecnologias e práticas modernas.<br/></p>            
            </div>
            <button onClick={handleCloseVideo} className={styles.closeButton}>Fechar</button>
          </div>
        )}
      </div>

      <div className={styles.projeto}>
        <div className={styles.imagemContainer} onClick={() => handleImageClick('perguntas')}>
          <img src={perguntas} alt="aviões" className={styles.imagem_aviao} />
          <div className={styles.overlay}>
            <div className={styles.textoOverlay}>
              <img src={html5} alt="overlay" className={styles.imageinter} />
              <img src={css3} alt="overlay" className={styles.imageinter} />
              <img src={js} alt="overlay" className={styles.imageinter} />
            </div>
          </div>
        </div>
        <h2 className={styles.titulo_projeto_texto}>Projeto Perguntas em JavaScript</h2>
        {selectedProject === 'perguntas' && (
          <div className={styles.videoContainer}>
            <video className={styles.video} controls>
              <source src={video2} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className={styles.links}>
              <a href="https://marcosbizzarri.github.io/PerguntasJavaScript/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Ver Projeto</a>
              <a href="https://github.com/MarcosBizzarri/PerguntasJavaScript" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Ver Repositório</a>
               <br/>
               <br/>
               <br/>
              <p className={styles.paragrafo_projeto}> Projeto feito sobre  <strong className={styles.color}> Perguntas em Desenvolvimento Web </strong>,<br/>
                 é uma aplicação web desenvolvida em HTML, CSS e JavaScript.<br/>
                O objetivo do projeto é demonstrar<br/> habilidades em desenvolvimento front-end, <br/>
                utilizando várias tecnologias e práticas modernas.<br/></p>            
            </div>
            <button onClick={handleCloseVideo} className={styles.closeButton}>Fechar</button>
          </div>
        )}
      </div>

      <div className={styles.projeto}>
        <div className={styles.imagemContainer} onClick={() => handleImageClick('projetoSantander')}>
          <img src={santander} alt="aviões" className={styles.imagem_aviao} />
          <div className={styles.overlay}>
            <div className={styles.textoOverlay}>
              <img src={html5} alt="overlay" className={styles.imageinter} />
              <img src={css3} alt="overlay" className={styles.imageinter} />
             
            </div>
          </div>
        </div>
        <h2 className={styles.titulo_projeto_texto}>Projeto Santander</h2>
        {selectedProject === 'projetoSantander' && (
          <div className={styles.videoContainer}>
            <video className={styles.video} controls>
              <source src={video3} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className={styles.links}>
              <a href="https://marcosbizzarri.github.io/Santander-DevWeek/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Ver Projeto</a>
              <a href="https://github.com/MarcosBizzarri/Santander-DevWeek" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Ver Repositório</a>
               <br/>
               <br/>
               <br/>
              <p className={styles.paragrafo_projeto}> Projeto feito sobre  <strong className={styles.color}> O Santander DevWeek</strong>,<br/>
                 é uma aplicação web desenvolvida em HTML, CSS, JavaScript e Bootstrap.<br/>
                O objetivo do projeto é demonstrar<br/> habilidades em desenvolvimento front-end, <br/>
                utilizando várias tecnologias e práticas modernas.<br/></p>            
            </div>
            <button onClick={handleCloseVideo} className={styles.closeButton}>Fechar</button>
          </div>
        )}
      </div>

      <div className={styles.projeto}>
        <div className={styles.imagemContainer} onClick={() => handleImageClick('facebookClone')}>
          <img src={facebook} alt="aviões" className={styles.imagem_aviao} />
          <div className={styles.overlay}>
            <div className={styles.textoOverlay}>
              <img src={html5} alt="overlay" className={styles.imageinter} />
              <img src={css3} alt="overlay" className={styles.imageinter} />
              
            </div>
          </div>
        </div>
        <h2 className={styles.titulo_projeto_texto}>Projeto Clone Facebook cores instagram</h2>
        {selectedProject === 'facebookClone' && (
          <div className={styles.videoContainer}>
            <video className={styles.video} controls>
              <source src={video4} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className={styles.links}>
              <a href="https://marcosbizzarri.github.io/Facebook-clone/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Ver Projeto</a>
              <a href="https://github.com/MarcosBizzarri/Facebook-clone" target="_blank" rel="noopener noreferrer" className="btn btn-primary mr-2">Ver Repositório</a>
               <br/>
               <br/>
               <br/>
              <p className={styles.paragrafo_projeto}> Projeto feito sobre o <strong className={styles.color}> Clone do Facebook e Instagram</strong>,<br/>
                 é uma aplicação web desenvolvida em HTML, CSS, JavaScript e React.<br/>
                O objetivo do projeto é demonstrar<br/> habilidades em desenvolvimento front-end, <br/>
                utilizando várias tecnologias e práticas modernas.<br/></p>            
            </div>
            <button onClick={handleCloseVideo} className={styles.closeButton}>Fechar</button>
          </div>
        )}
      </div>

      <div className={styles.contacts}>
  <div className={styles.contatos}>
    <h2 className={styles.mini_titulo}>Contato</h2>
    <div className={styles.icons}>
      <div className={styles.icon}>
        <a href="mailto:marcos-bizzarri@hotmail.com" target="_blank" className={styles.buttonLink}>
          <div className={styles.box}>
            <img src={mailIcon} alt="e-mail" />
          </div>
        </a> <p className={styles.mini_paragrafo}>E-mail</p>
      </div>
      <div className={styles.icon}>
        <a href="https://api.whatsapp.com/send/?phone=5519994449107&text&type=phone_number&app_absent=0" target="_blank" className={styles.buttonLink}>
          <div className={styles.box}>
            <img src={phoneIcon} alt="telefone" />
          </div>
        </a><p className={styles.mini_paragrafo} >Telefone</p>
      </div>
      <div className={styles.icon}>
        <a href="https://linkedin.com/in/marcos-bizzarri" target="_blank" className={styles.buttonLink}>
          <div className={styles.box}>
            <img src={linkedinIcon} alt="linkedin" />
          </div>
        </a><p className={styles.mini_paragrafo}>Linkedin</p>
      </div>
      <div className={styles.icon}>
        <a href="https://github.com/MarcosBizzarri" target="_blank" className={styles.buttonLink}>
          <div className={styles.box}>
            <img src={githubIcon} alt="github" />
          </div>
        </a><p className={styles.mini_paragrafo}>Github</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
