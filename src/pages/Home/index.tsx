import React, { lazy, Suspense, useEffect } from 'react';
import NavBar from "@/components/NavBar";
import {
  AboutContainer,
  AboutMeiContainer,
  ContactUsContainer,
  ContactUsContent,
  FirstCallContainer,
  ServicesContainer,
} from "./styles";
import MettingHands from "@/assets/metting-hands.webp";
import MettingSuccess from "@/assets/metting-success.webp";
import LikeBussinessMan from "@/assets/like-bussiness-man.webp";
import { CardsContent } from "@/utils/CardsContent";
import Card from "@/components/Card";
import SecurityMessage from "@/components/SecurityMessage";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from '@tjoskar/react-lazyload-img'
import ReactGA from 'react-ga';

const Benefits = lazy(() => import('@/components/Benefits'));
const ContactUsForm = lazy(() => import('@/components/ContactUs'));
const WhatsAppCall = lazy(() => import('@/components/WhatsAppCall'));
const Warning = lazy(() => import('@/components/WarningMessage'));
const Footer = lazy(() => import('@/components/Footer'));

const HomePage = () => {
  const defaultImage = "data:image/png;base64,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"
  const MettingHandsSrcSet = `${MettingHands} 1x, ${MettingHands.replace('.webp', '.webp')} 2x, ${MettingHands.replace('.webp', '.webp')} 3x`;
  const MettingSuccessSrcSet = `${MettingSuccess} 1x, ${MettingSuccess.replace('.webp', '.webp')} 2x, ${MettingSuccess.replace('.webp', '.webp')} 3x`;
  const LikeBussinessManSrcSet = `${LikeBussinessMan} 1x, ${LikeBussinessMan.replace('.webp', '.webp')} 2x, ${LikeBussinessMan.replace('.webp', '.webp')} 3x`;
  const imageWidth = 480;
  const imageHeight = 318;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  },[])
  

  return (
    <>
      <Helmet>
        <title>Express Mei | Home</title>
        <meta
          name="description"
          content="Express MEI, Facilitando sua vida com confiança, praticidade e velocidade !"
        />
        <meta
          name="keywords"
          content="react, CNPJ, MEI, abrir mei, alterar mei, cancelar mei, declarar mei, consultoria financeira, consultoria, finanças, notas fiscais, impostos, declarações"
        />
      </Helmet>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <WhatsAppCall />
      </Suspense>
      
      <main>
        <FirstCallContainer>
          <div className="container">
            <div className="info" data-aos="fade-up">
              <h1>Express MEI</h1>
              <p>
                Facilitando sua vida com confiança, praticidade e velocidade!
              </p>
            </div>

            <div className="image">
            <LazyLoadImage 
              width={imageWidth} 
              height={imageHeight} 
              defaultImage={defaultImage}
              srcSet={MettingHandsSrcSet} 
              image={MettingHands} 
              alt='Duas pessoas em uma mesa de reunião sorrindo e dando um aperto de mãos.' />
            </div>
          </div>
        </FirstCallContainer>

        <ServicesContainer className="container">
          <div className="call" data-aos="fade-up">
            <h2>Facilitando sua vida!</h2>
            <h1>
              Conheça nossos <span>Serviços</span>
            </h1>
          </div>

          <div className="cards">
          {CardsContent.map((card, index) => (
              <Card
                key={index}
                id={card.id}
                title={card.title}
                description={card.description}
                descriptionContent={card.descriptionContent}
                image={card.image.src} // Pass the image source
                imageAlt={card.image.alt} // Pass the image alt
                imageWidth={card.image.imageWidth} // Pass the image width
                imageHeight={card.image.imageHeight} // Pass the image height
                srcSet={card.image.srcSet}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
              />
          ))}
          </div>
          <SecurityMessage />
        </ServicesContainer>

        <Suspense fallback={<div>Loading...</div>}>
          <Benefits />
        </Suspense>

        <div style={{ background: "var(--bg-blue)", marginTop: "1.5rem" }}>
          <AboutMeiContainer className="container">
            <div className="call" data-aos="fade-up">
              <h2>Conheça nossos serviços e consultorias:</h2>
              <ul>
                <li>
                  <p>Emissão de DAS(guia de recolhimento de imposto);</p>
                </li>
                <li>
                  <p>Auxilio com impostos e declarações;</p>
                </li>
                <li>
                  <p>Parcelamento de DAS (guia de recolhimento de imposto).</p>
                </li>
              </ul>
            </div>

            <div className="call" data-aos="fade-up">
              <h2>O que é o MEI ?</h2>
              <p>
                MEI significa Microeemprendedor Individual, ou seja, um
                profissional autônomo,um modelo empresarial simplificado, com
                limite de faturamento anual de R$ 81 mil quando exercer
                atividades gerais e R$ 251 mil quando for exercer atividades de
                transporte de cargas (MEI Caminhoneiro), criado para facilitar a
                formalização de pessoas que trabalham de maneira autônoma.
              </p>
            </div>
          </AboutMeiContainer>
        </div>

        <AboutContainer className="container">
          <div className="image" data-aos="fade-up">
          <img
              src={LikeBussinessMan}
              srcSet={LikeBussinessManSrcSet}
              width={480}
              height={318}
              alt="Um desenho de um homem de camisa azul, segurando um certificado" />
          </div>
          <div className="content" data-aos="fade-up">
            <h1>
              Um pouco <br /> da <span>Express Mei</span> !
            </h1>
            <p>
              Somos uma empresa com profissionais qualificados e experientes
              para ajudar você a alcançar o sucesso empresarial.
            </p>
            <p>
              Nos comprometemos a fazer com que o micro empresário atinja seus
              objetivos átraves de auxílio e consultorias de uma maneira rápida
              e sem burocracia.
            </p>
          </div>
        </AboutContainer>

        <ContactUsContainer>
          <div className="title container" data-aos="fade-up">
            <h1>Fale Conosco</h1>
            <p>Fale com um de nossos profissionais !</p>
          </div>
          <ContactUsContent className="container">
            <div className="content" data-aos="fade-up">
            <Suspense fallback={<div>Loading...</div>}>
              <ContactUsForm />
            </Suspense>
              
            </div>
            <div className="image" data-aos="fade-up">
              <img
                  src={MettingSuccess}
                  srcSet={MettingSuccessSrcSet}
                  width={480}
                  height={318}
                  alt="5 pessoas sentdas em uma mesa, com as maos se tocando no centro da mesa" />
            </div>
          </ContactUsContent>
        </ContactUsContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Warning />
        </Suspense>
        
      </main>
      <Suspense fallback={<div>Loading...</div>}>
          <Footer />
      </Suspense>
    </>
  );
};

export default HomePage;
