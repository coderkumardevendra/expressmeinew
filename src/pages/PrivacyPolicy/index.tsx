import AppLayout from "@/layouts/App";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  InfoSectionContainer,
  PageTitle,
  TerminologySectionContainer,
} from "./styles";

export default function PrivacyPolicyPage() {
  return (
    <AppLayout>
      <Helmet>
        <title>Express Mei | Política de privacidade</title>
        <meta
          name="description"
          content="Express MEI - Facilitando sua vida com confiança, praticidade e velocidade ! Leia nossa política de privacidade."
        />
      </Helmet>
      <PageTitle data-aos="fade-up">
        <h1>Política de Privacidade</h1>
      </PageTitle>

      <InfoSectionContainer data-aos="fade-up">
        <h3>Informações da política</h3>

        <p>
          A <span>EXPRESS MEI ASSESSORIA E CONSULTORIA EMPRESARIAL LTDA</span>{" "}
          ou <span>EXPRESS MEI</span>, pessoa jurídica de direito privado,
          regularmente inscrita no CNPJ sob o nº 47.766.535/0001-31, sediada e
          estabelecida em Belo Horizonte /MG Av. Rua Rio Grande do Norte, nº
          1.435, SL 708, PAVMTO7 Bairro: Savassi, Cep.: 30.130-138, cumpridora
          de seus deveres e obrigações, adota medidas rigorosas de privacidade e
          proteção de dados pessoais em sua empresa. Os serviços ofertados pela{" "}
          <span>EXPRESS MEI</span> correspondem aos serviços combinados de
          escritório e apoio administrativo, atividades de consultoria em Gestão
          Empresarial, exceto Consultoria Técnica Específica, Atividade de
          Consultoria e Auditoria Contábil e Tributária, Tratamento de Dados,
          Provedores de Serviços de Aplicação e Serviços de Hospedagem na
          Internet, dentre outros serviços.
        </p>
        <p>
          Entendemos a importância da proteção de dados pessoais dos TITULARES
          (“usuário”, “titular de dados”) nas quais estão relacionados ao uso do
          site e de nossos serviços promovidos pela <span>EXPRESS MEI</span>.
          Entendemos a necessidade de cuidar da segurança destes dados e do
          respeito aos direitos fundamentais de liberdade, privacidade e livre
          desenvolvimento da pessoa natural, em observância à LGPD - Lei Federal
          nº 13.709/2018 conhecida como Lei Geral de Proteção de Dados
          Brasileira.
        </p>
        <p>
          Esta{" "}
          <span>
            Política de Privacidade e Proteção de Dados Pessoais (POLÍTICA)
          </span>{" "}
          expressa o nosso compromisso com o tratamento de seus dados pessoais
          de modo responsável, ético e transparente. Objetiva os meios
          empregados a respeito do tratamento dos dados, em linha com nossos
          princípios valores e, especialmente, de acordo com as regras da LGPD e
          demais legislações vigentes aplicáveis.
        </p>

        <p>
          A finalidade da POLÍTICA é apresentar a forma com a qual realizamos o
          tratamento dos dados pessoais, dentro do nosso relacionamento com o
          cliente (usuário do site) no ato da utilização de nossos serviços e em
          especial aqueles que se encontram relacionados às atividades da{" "}
          <span>EXPRESS MEI</span> além das interações em nossa página{" "}
          <span>expressmei.com.</span>
          Reconhecemos que esta é uma responsabilidade constante e, portanto,
          atualizaremos periodicamente esta POLÍTICA à medida que se fizerem
          necessários novos procedimentos de privacidade e proteção esperados
          aos seus dados pessoais.
        </p>

        <p>
          Ao utilizar nossos serviços, bem como nosso site ou nosso sistema,
          você deverá ler integralmente seu conteúdo, ao aceita-lo, você
          reconhece que leu, entendeu o seu conteúdo, propósito e que concorda
          com o tratamento dos seus dados pessoais como está descrito nesta
          Política. Na hipótese de haver divergência da sua parte, discordância
          com o disposto desta POLÍTICA, solicitamos que interrompa o uso dos
          serviços e não utilize os da{" "}
          <span>Portal EXPRESS MEI (expressmei.com)</span>, ainda, caso deseja,
          pedimos que exclua sua conta e entre em contato com o canal de
          relacionamento com o cliente a fim de solicitar o seu direito a
          exclusão dos seus dados de nossa empresa.
        </p>
      </InfoSectionContainer>

      <TerminologySectionContainer data-aos="fade-up">
        <h2>1. TERMINOLOGIA E DEFINIÇÕES</h2>

        <h3>
          1.1 Para a compreensão dessa POLÍTICA, os termos e definições seguem
          abaixo:
        </h3>

        <ul>
          <li>
            <p>
              I. LGPD: Lei Geral de Proteção de Dados a lei federal nº
              13.709/2018, dispõe sobre o tratamento de dados pessoais,
              inclusive nos meios digitais, por pessoa natural ou por pessoa
              jurídica de direito público ou privado, com o objetivo de proteger
              os direitos fundamentais de liberdade e de privacidade e o livre
              desenvolvimento da personalidade da pessoa natural.
            </p>
          </li>
          <li>
            <p>
              II. Cookies: são pequenas unidades de arquivos de dados
              armazenados pelo seu navegador (dispositivo do cliente) no disco
              rígido do seu computador. Os cookies são necessários para o uso do
              site <span>EXPRESS MEI</span> disponível em expressmei.com;
            </p>
          </li>

          <li>
            <p>III. Agentes de tratamento: controlador e/ou operador;</p>
          </li>

          <li>
            <p>
              IV. Controlador: pessoa física ou jurídica, de direito público ou
              privado, a quem compete a decisão sobre o tratamento do dado
              pessoal;
            </p>
          </li>

          <li>
            <p>
              V. Operador: pessoa física ou jurídica, de direito público ou
              privado, que realiza o tratamento de dados em nome do controlador,
              sem tomar qualquer decisão sobre como tratar os dados;
            </p>
          </li>

          <li>
            <p>
              VI. Cliente: pessoa física que utiliza os serviços da{" "}
              <span>EXPRESS MEI</span>;
            </p>
          </li>

          <li>
            <p>
              VII. Terceiros: pessoas físicas ou jurídicas parceiras da equipe{" "}
              <span>EXPRESS MEI</span>, prestadores de serviços, parceiros e ou
              fornecedores;
            </p>
          </li>

          <li>
            <p>
              VIII. Titular: Toda a pessoa natural, também conhecida como
              “titular”, “você”, ou “ele” ou “Titulares”, “usuário do site”,
              “funcionário”, “cliente”, “terceiros pessoas físicas”, “Idoso”
              pessoa física a quem se referem os dados pessoais que são objeto
              do tratamento, podendo se encaixar aqui na qualidade de usuário do
              site da <span>EXPRESS MEI</span>, inclusive como aquele que
              preenche dados e informações em formulários para cadastro e está
              de acordo com esta POLÍTICA;
            </p>
          </li>

          <li>
            <p>
              IX. Dado Pessoal: É constituída de seus dados (titular de dados) é
              toda a informação que é relativa à pessoa natural seja ela
              identificada ou identificável inclusive direta ou indireta.
              Exemplos: nome, endereço, e-mail, CPF, RG, título de eleitor,
              telefone (s), profissão, sexo, data de nascimento, estado civil,
              grau de instrução, nacionalidade, dados do cônjuge/dependentes,
              entre outros;
            </p>
          </li>

          <li>
            <p>
              X. Dado Pessoal Sensível: categoria de dado pessoal que, pelo seu
              potencial discriminatório, requer um nível extra de proteção e um
              elevado dever de cuidado. São dados pessoais que podem revelar
              origem racial ou étnica, convicção religiosa, opinião política,
              filiação a sindicato ou à organização de caráter religioso,
              filosófico ou político, dado referente à saúde ou à vida sexual,
              dado genético ou biométrico, quando vinculado a uma pessoa
              natural;
            </p>
          </li>

          <li>
            <p>
              XI. Adolescente: pessoa física, entre 12 (doze) e 18 (dezoito)
              anos de idade, segundo o Estatuto da Criança e do Adolescente
              (“ECA”);
            </p>
          </li>

          <li>
            <p>
              XII. Criança: pessoa física, com até 12 (doze) anos de idade
              incompletos, segundo o Estatuto da Criança e do Adolescente
              (“ECA”);
            </p>
          </li>

          <li>
            <p>
              XII. Tratamento de Dados: toda operação realizada com dados
              pessoais, como as que se referem a coleta, produção, recepção,
              classificação, utilização, acesso, reprodução, transmissão,
              distribuição, processamento, arquivamento, armazenamento,
              eliminação, avaliação ou controle da informação, modificação,
              comunicação, transferência, difusão ou extração;
            </p>
          </li>

          <li>
            <p>
              XIV. Direitos do titular: o titular do dado tem o direito de obter
              informações e realizar solicitações junto ao controlador, tais
              como: (i) confirmação da existência de tratamento; (ii) acesso aos
              dados; (iii) correção de dados incompletos, inexatos ou
              desatualizados; (iv) anonimização, bloqueio ou eliminação de dados
              desnecessários, excessivos ou tratados em desconformidade com a
              Lei Geral de Proteção de Dados Pessoais - “LGPD”; (v)
              portabilidade dos dados a outro fornecedor de serviço ou produto,
              mediante requisição expressa, de acordo com a regulamentação da
              autoridade nacional, observados os segredos comercial e
              industrial; (vi) eliminação dos dados pessoais tratados com o
              consentimento do titular; (vii) informação das entidades públicas
              e privadas com as quais o controlador realizou uso compartilhado
              de dados; (viii) informação sobre a possibilidade de não fornecer
              consentimento e sobre as consequências da negativa; e (ix)
              revogação do consentimento;
            </p>
          </li>

          <li>
            <p>
              XV. Confidencialidade: garantia de que os dados pessoais não serão
              divulgados para pessoas não autorizadas;
            </p>
          </li>

          <li>
            <p>
              XVI. Consentimento: manifestação livre, informada e inequívoca do
              titular do dado confirmando sua concordância quanto ao tratamento
              de seus dados pessoais;
            </p>
          </li>

          <li>
            <p>
              XVII. Anonimização: utilização de meios técnicos razoáveis e
              disponíveis no momento do tratamento, por meio dos quais um dado
              perde a possibilidade de associação, direta ou indireta, a um
              indivíduo;
            </p>
          </li>

          <li>
            <p>
              XVIII. Pseudonimização: processo a ser aplicado em um dado pessoal
              para torná-lo pseudonimizado, ou seja, dado pessoal que tenha sido
              descaracterizado ou codificado de modo que não permita a
              identificação do titular em um primeiro momento, mas que, após
              associação com outros dados, leva à sua identificação. Os dados
              pseudonimizados são aqueles que permitem a associação a um
              indivíduo a partir de informações mantidas pelo controlador em
              ambiente separado e seguro, como no caso da segregação da base de
              dados ou da atribuição de identificadores a indivíduos.;
            </p>
          </li>

          <li>
            <p>
              XIX. Bloqueio: suspensão temporária de qualquer operação de
              tratamento, mediante guarda do dado pessoal;
            </p>
          </li>

          <li>
            <p>
              XX. Compartilhamento: transferência ou interconexão de dados
              pessoais com áreas internas ou terceiros relacionados a{" "}
              <span>EXPRESS MEI</span>;
            </p>
          </li>

          <li>
            <p>
              XXI. Autoridade Nacional de Proteção de Dados – ANPD: órgão da
              administração pública responsável por zelar, implementar e
              fiscalizar o cumprimento da LGPD em todo o território nacional;
            </p>
          </li>

          <li>
            <p>
              XXII. Encarregado/DPO: Data Protection Officer; Eliminação:
              exclusão de dado pessoal ou de conjunto de dados pessoais
              armazenados em banco de dados, independentemente do procedimento
              empregado;
            </p>
          </li>

          <li>
            <p>
              XXIII. Marco Civil da Internet: Lei 12.965/2014, que estabelece
              princípios, garantias, direitos e deveres para o uso da Internet
              no Brasil;
            </p>
          </li>

          <li>
            <p>
              XXIV. Retenção dos dados pessoais: período pelo qual os dados
              pessoais permanecem armazenados mesmo após o término da finalidade
              do tratamento;
            </p>
          </li>

          <li>
            <p>
              XXV. Vazamento de dados: divulgação ilícita ou acesso não
              autorizado a dados pessoais por terceiros.
            </p>
          </li>

          <li>
            <p>
              XXVI. SITE ou Portal da <span>EXPRESS MEI</span>: No âmbito dessa
              política é exclusivamente o endereço eletrônico divulgado de forma
              oficial em nossos canais de comunicação, excluindo-se quaisquer
              outro divergente do endereço eletrônico: disponível em{" "}
              <a href="#" target="_blank">
                expressmei.com
              </a>{" "}
              e pertinente a essa POLÍTICA.
            </p>
          </li>

          <li>
            <p>
              XXVII. <span> Portal EXPRESS MEI</span>: Definido como Plataforma
              Express MEI Empreendedor (“Express MEI Portal Empreendedor”,
              “Plataforma”, “nós”, “nossos”) é uma empresa privada que presta
              serviços combinados de escritório e apoio administrativo,
              atividades de consultoria em Gestão Empresarial, exceto
              Consultoria Técnica Específica, Atividade de Consultoria e
              Auditoria Contábil e Tributária, Tratamento de Dados, Provedores
              de Serviços de Aplicação e Serviços de Hospedagem na Internet,
              dentre outros serviços.
            </p>
          </li>
        </ul>

        <h3>2.1 Responsáveis envolvidos e suas competências</h3>

        <p>
          <span> Encarregado de Proteção de Dados ou DPO</span>: É a pessoa
          física ou jurídica, indicada pelo controlador e operador, para atuar
          como canal de comunicação entre o controlador, os titulares dos dados
          e a Autoridade Nacional de Proteção de Dados (ANPD). Todo e qualquer
          tipo de dúvida sobre esta POLÍTICA deverá ser direcionada para o canal
          de comunicação junto ao contato do responsável o encarregado de
          proteção de dados pelo e-mail contato@expressmei.com.
        </p>

        <p>
          <span>Demais Colaboradores e ou Funcionários</span>: Cabe a todos os
          funcionários, terceiros e ou colaboradores que auxiliam a{" "}
          <span>EXPRESS MEI</span> respeitar a todas as diretrizes presentes
          nessa POLÍTICA.
        </p>

        <p>
          <span>Prestadores de Serviços e Terceiros</span>: São todos aqueles
          que prestam serviços a <span>EXPRESS MEI </span> assim como seus
          funcionários e colaboradores, devendo tomar conhecimento das
          diretrizes de proteção de dados em curso adotadas pela{" "}
          <span>EXPRESS MEI </span> e ainda receber e respeitar todas as
          orientações a respeito do tratamento de dados previsto pela{" "}
          <span>EXPRESS MEI</span>.
        </p>

        <h3>2.2 Tratamento de dados nos termos legais</h3>

        <p>
          A POLÍTICA informa quais dados pessoais coletamos sobre você, para o
          que usamos, como e onde armazenamos e com quem compartilhamos. Aqui
          estão contidos o uso de nossos serviços, relacionamento com o cliente,
          utilização de nossa plataforma para acesso aos serviços e além da
          melhoria da sua navegação em nosso site.
        </p>

        <p>
          Os dados que serão fornecidos no ato do preenchimento de formulários
          ou no uso de nossos serviços, ou quando for entrar em contato conosco
          pelos canais de comunicação e de atendimento do site, ou o trabalho
          conosco, ou, ainda, no envio de currículos destinados ao processo de
          recrutamento e contratação para o Recursos Humanos (RH), utiliza
          e-mails e sendo todos eles em conjunto referidos nesta POLÍTICA
          simplesmente tratados como “dados pessoais”. Também coletamos seus
          dados pessoais durante a prestação de nossos serviços e indiferente do
          tipo de dados que forem fornecidos a <span>EXPRESS MEI </span>, eles
          serão utilizados somente para as finalidades específicas e necessárias
          para alcançar os objetivos descritos em cada área de coleta dos dados,
          variando de área ou departamento conforme o caso.
        </p>

        <p>Logo abaixo temos as seções desta POLÍTICA:</p>

        <p>
          Uso e Coleta de Dados. Somente coletamos dados com base nas
          autorizações previstas em lei, incluindo o legítimo interesse da
          Plataforma na viabilização do fornecimento dos serviços e seu
          melhoramento, a execução contratual dos serviços, o cumprimento de
          obrigações legais e a base legal do consentimento. Realizamos a coleta
          da seguinte forma, sem prejuízo a outras coletas realizadas conforme
          autorizações específicas do Usuário ou com base em autorizações
          legais:
        </p>

        <p>
          Dados Fornecidos Diretamente pelo Usuário. Podemos coletar dados
          pessoais que você nos forneceu quando, por exemplo, você nos contrata
          para prestação de serviços, quando está na condição de cliente. Isso
          quer dizer que você poderá nos fornece diferentes informações ao
          responder nossos formulários ou ao interagir em nossa plataforma ou
          site.
        </p>

        <p>
          Cadastro no Site. Em duas situações, a primeira o usuário pode navegar
          pelo nosso site https://expressmei.com e sem a necessidade de fornecer
          os seus dados. Embora, para o funcionamento do site coletamos dados
          conhecidos como Cookies efetivamente necessários para o funcionamento
          do site em dispositivos, computadores e etc do cliente e voltados para
          o seu bom funcionamento. Em um segundo caso, ao preencher o formulário
          de cadastramento na Plataforma no qual, de forma prévia é solicitado o
          vosso consentimento, você nos fornece os seguintes dados pessoais:
          nome completo, telefone, RG, CPF, título de eleitor, data de
          nascimento, nome completo da mãe, além das informações da pessoa
          jurídica a ser aberta, qual seja nome fantasia, capital social,
          ocupação principal, ocupação secundária e endereço completo. Essas
          informações são essenciais e compatíveis com as finalidades esperadas
          para que a Plataforma possa prestar os Serviços contratados.
        </p>

        <p>
          Pagamento. No pagamento dos valores relativos aos Serviços fornecidos,
          a plataforma de pagamento solicitará os seguintes dados: nome, data de
          nascimento, tipo de cartão de crédito, data de validade, dígitos de
          número do cartão, CPF, número de celular e e-mail. Essas informações
          são essenciais e necessárias para concretizar o pagamento das compras
          dos serviços realizados para o cliente.
        </p>

        <p>
          Consentimento. Iremos pedir a sua autorização para coletarmos o seu
          e-mail e quais dados relativos a ações para fins de marketing, com o
          objetivo de permitir que a Plataforma e parceiros enviem comunicações
          de marketing ou, alternativamente, poderemos realizar o envio de
          comunicações que relevantes, adequadas ao seu interesse, resguardado o
          seu direito a optar pela interrupção nas comunicações sempre que
          desejar.
        </p>

        <p>
          Anonimização de Dados. Sempre que utilizarmos os seus dados para
          outras finalidades, como desenvolvimento de sistemas, de novos
          recursos e ou funcionalidades, isso será previamente comunicado,
          ainda, respeitando os preceitos legais, os seus dados serão submetidos
          a mecanismos de segurança conhecido como processo de anonimização,
          medida essa na qual impedirá, irreversivelmente, que saibamos de quem
          eram os dados coletados e eleva o grau de proteção de dados empregada.
        </p>

        <p>
          Cookies. O uso de cookies é feito apenas para o funcionamento mínimo
          do sistema do site, reconhecer um visitante constante e melhorar a sua
          experiência em sua visita ao site da <span>EXPRESS MEI</span>. Os
          cookies são pequenos arquivos de dados transferidos de um site da web
          para o disco do seu computador ou para outros dispositivos (como
          smartphones ou tablets) e não armazenam dados pessoais.
        </p>

        <h3>2.3 Como utilizamos seus dados pessoais</h3>

        <p>
          Como utilizamos seus dados pessoais coletamos, armazenamos e tratamos
          seus dados pessoais para diversas finalidades ligadas ao nosso
          negócio, tais como:
        </p>

        <p>
          Dados identificação: para identificar e confirmar sua identidade para
          atendimentos;
        </p>

        <p>
          Dados financeiros: identificar, agendar e faturar pagamentos e atender
          questões fiscais, legais e regulatórias;
        </p>

        <p>
          Dados de identificação: para fins de identificação e controle de
          acesso a entrega de serviços;
        </p>

        <p>
          Dados de identificação de profissionais e quando necessário de
          qualificação profissional: para fins de identificação, confirmação da
          solicitação de registro.
        </p>

        <h3>2.4 Fundamentos legais para tratar os seus dados pessoais</h3>

        <p>
          A LGPD entre as várias regulamentações da proteção de dados, também
          dispõe que o tratamento de dados pessoais apenas deva ocorrer mediante
          o amparo e o uso de fundamentação legal.
        </p>

        <p>
          Logo abaixo destacamos hipóteses legais em que os seus dados pessoais
          poderão ser tratados, com aplicação variada a depender do caso
          concreto (finalidade, tipos de dados e as operações de tratamento de
          dados) inclusive quando houver dados pessoais ou dados pessoais
          sensíveis:
        </p>

        <ul>
          <li>
            <p>
              I. mediante o fornecimento do seu consentimento para tratamento de
              seus dados pessoais, como por exemplo, para lhe conceder acesso a
              resultado de serviços contratados ou receber informações via
              e-mail sobre assuntos do seu interesse;
            </p>
          </li>

          <li>
            <p>
              II. quando existentes legítimos interesses para tratamento de seus
              dados pessoais a depender do caso, finalidade e melhor adequação,
              más a exemplo no oferecimento e na entrega de nossos serviços para
              você, bem como para o funcionamento eficaz e lícito de nossa
              prestação de serviços, desde que tais interesses não sejam
              superados pelos seus interesses, direitos e liberdades
              fundamentais;
            </p>
          </li>

          <li>
            <p>
              III. para o cumprimento de obrigações legais e regulatórias que
              podem exigir a coleta, armazenamento e compartilhamento de seus
              dados pessoais e dados pessoais sensíveis, tais como manutenção de
              registros para fins fiscais ou fornecimento de informações a um
              órgão público ou entidade reguladora de leis/atividades e
              cumprimento de obrigações de combate à corrupção, lavagem de
              dinheiro, fraude e condutas irregulares;
            </p>
          </li>

          <li>
            <p>
              IV. para executar eventual contrato, bem como para fornecer nossos
              serviços a você; V. para exercer regularmente nossos direitos em
              contratos, processos judiciais, administrativos ou arbitrais;
            </p>
          </li>

          <li>
            <p>
              V. para exercer regularmente nossos direitos em contratos,
              processos judiciais, administrativos ou arbitrais;
            </p>
          </li>

          <li>
            <p>VI. para proteção da vida ou da sua incolumidade física;</p>
          </li>

          <li>
            <p>VII. para proteção de nosso crédito;</p>
          </li>

          <li>
            <p>
              VIII. Quando a <span>EXPRESS MEI</span> estiver funcionando na
              posição de Operador, a hipótese legal em que os dados pessoais
              serão tratados será definida pelo Controlador do dado pessoal.
            </p>
          </li>
        </ul>

        <h3>2.5 Compartilhamento de seus dados pessoais</h3>

        <p>
          No decorrer da prestação de nossos serviços, poderemos compartilhar
          seus dados pessoais com:
        </p>

        <ul>
          <li>
            <p>
              I. Terceiros que nos prestam serviços nas condições de operadores
              de tratamento de dados pessoais, sendo os mesmos devidamente
              orientados das instruções respectivas do tratamento de dados de
              titulares pela <span>EXPRESS MEI</span> e a fim de serem seguidos
              na correspondente prestação de serviços deles.
            </p>
          </li>

          <li>
            <p>
              II. Autoridades competentes (incluindo tribunais e autoridades que
              nos regulam);
            </p>
          </li>

          <li>
            <p>
              III. Empresas de tecnologia que fazem a gestão dos nossos sistemas
              integrados ou responsáveis pelo armazenamento e garantia de
              segurança no tratamento de seus dos dados pessoais;
            </p>
          </li>

          <li>
            <p>
              IV. internamente para áreas e departamentos que necessitam ter
              acesso aos seus dados, tais como: área fiscal e administrativa de
              responsável pelos serviços contábeis, área de atendimento ao
              cliente e área jurídica para cumprir alguma obrigação legal
              regulatória ou exercício regular dos nossos direitos.
            </p>
          </li>
        </ul>

        <h3>2.6 Dados de Crianças e Adolescentes</h3>

        <p>
          Durante a prestação de serviços, a EXPRESS MEI não irá coletar dados
          pessoais de crianças e adolescentes. Posto isso, caso seja
          identificado o cadastro de menores e ou adolescentes nosso sistema irá
          automaticamente deletar de nosso banco de dados esses dados e
          informações.
        </p>

        <h2>3. Retenção de seus dados pessoais</h2>

        <h3>3.1 Armazenamento dos dados:</h3>

        <p>
          Armazenamos e mantemos seus dados pessoais de forma segura em data
          centers localizados no Brasil, em conformidade com a legislação
          aplicável e pelo período necessário ou permitido em vista das
          finalidades para as quais os dados pessoais foram coletados, conforme
          exposto nesta POLÍTICA.
        </p>

        <p>
          Os critérios utilizados para determinar os períodos de retenção
          incluem, mas não se limitam a: (i) duração do nosso relacionamento com
          você; (ii) enquanto válido seu consentimento, nas hipóteses
          aplicáveis; (iii) diante de eventual obrigação legal ou regulatória
          que exija a manutenção dos dados pessoais; (iv) quando necessário para
          atividade ou serviços relevantes; e; (v) para atender prazos
          prescricionais aplicáveis, conforme previsto em lei ou regulamento.
        </p>

        <h3>a. Conservação e Exclusão dos Dados:</h3>
        <ul>
          <li>
            <h3>i. Conservação dos Dados.</h3>

            <p>
              Os seus dados serão conservados pela Plataforma enquanto for
              Usuário, de modo que consiga utilizar nossos Serviços. Podemos,
              ainda, reter seus dados, mesmo após desativação da conta ou
              interrupção do uso dos Serviços, sempre que necessário para
              cumprimento de obrigações legais ou regulamentares e motivos
              legítimos e legais.
            </p>
          </li>

          <li>
            <h3>ii. Exclusão dos Dados.</h3>
            <p>
              Quando não for mais necessário a conservação dos dados, eles serão
              removidos dos nossos sistemas ou mantidos anonimamente, de modo a
              não ser mais possível identificar a sua origem. Garantimos que a
              exclusão e a anonimização seguirão todos os protocolos de
              segurança necessários para a proteção dos seus dados.
            </p>
            <p>
              Ainda, nós manteremos os dados somente durante o período em que
              eles são necessários para as finalidades descritas nessa política.
              Na hipótese em que a <span>EXPRESS MEI</span> seja obrigada pela
              legislação em vigor, contrato, ou alguma outra razão legítima para
              mantê-los, o que será então devidamente justificado. Caso haja o
              desejo de excluir os seus dados, porém poderemos mantê-los na
              medida do que for exigido e ou permitido em lei.
            </p>
          </li>
        </ul>

        <h3>3.2 Segurança de seus dados pessoais</h3>

        <p>
          Estamos comprometidos em proteger a sua privacidade e seus dados. Para
          isso, adotamos medidas de segurança, técnicas e administrativas aptas
          a proteger os seus dados pessoais de acessos não autorizados e de
          situações acidentais ou ilícitas de destruição, perda, alteração,
          comunicação ou qualquer forma de tratamento inadequado ou ilícito, o
          que inclui, mas não se limita à: (I).Limitação do acesso a dados
          pessoais por parte dos colaboradores, prestadores de serviços e
          visitantes, restringindo-o apenas nos limites da necessidade e
          finalidade de tratamento dos dados pessoais; (II).Garantia de que os
          nossos colaboradores, (prestadores de serviços e visitantes cumpram
          esta POLÍTICA e todos os procedimentos adequados para o correto
          tratamento de dados pessoais; (III).Utilizamos processos e medidas,
          como boas práticas de mercado voltadas a detecção e a resposta a
          tentativas de violação dos nossos sistemas. Entretanto, não existe um
          método de transmissão pela Internet ou um método de armazenamento
          eletrônico que seja 100% seguro. Por conseguinte, não podemos garantir
          a segurança absoluta das suas informações, apesar de serem tomadas
          todas as precauções necessárias e exigidas pelos órgãos competentes.
          (IV). A Internet, dada a sua natureza, é um fórum público e por isso
          recomendamos que você tenha cautela ao divulgar informações online.
          Frequentemente, você se encontra na melhor posição para proteger a si
          mesmo online. Você é responsável pela proteção do seu nome de usuário
          e senha contra o acesso de terceiros, assim como pela escolha de
          senhas seguras. Recomendamos que a sua senha de acesso aos seus dados
          (serviços contratados) não seja compartilhada com terceiros em
          hipótese alguma. O compartilhamento de senhas pelo cliente com
          terceiros, não poderá ser atribuído a <span>EXPRESS MEI</span>.
        </p>

        <h3>3.3 Direitos dos titulares de dados</h3>

        <p>
          Aqui se enquadram todos os titulares de dados definidos por essa
          POLÍTICA ou pela legislação de proteção de dados.
        </p>

        <h3>3.4 Direitos do Usuário</h3>

        <p>
          O Usuário dos Serviços da Plataforma tem direito de: (i) confirmação
          da existência do tratamento; (ii) acesso aos dados coletados; (iii)
          retificação dos dados incorretos; (iv) solicitação de exclusão dos
          dados de nossa base de dados; (v) oposição ao tratamento, caso entenda
          que os seus direitos estão ameaçados; (vi) solicitação de
          anonimização, bloqueio ou eliminação dos dados; (vii) portabilidade à
          terceiros, ou seja, solicitar a transmissão dos dados pessoais que
          tratamos sobre você para outro fornecedor; (viii) consentimento,
          quando o tratamento não for baseado em outra hipótese prevista em lei.
          Ainda, quando desejado, revogar o consentimento concedido, solicitar a
          eliminação dos dados pessoais tratados com base em consentimento, bem
          como de ter acesso a informações sobre a possibilidade de você não
          fornecer o consentimento e as respectivas consequências dessa
          negativa; (ix) retirar o consentimento a qualquer momento; (x)
          solicitar informações das entidades públicas e ou privadas com as
          quais compartilhamos seus dados pessoais; e; (xi) solicitar a revisão
          do tratamento de dados pessoais com base em decisões automatizadas.
        </p>

        <h3>3.5 Revogação de consentimento</h3>

        <p>
          Se você desejar revogar o consentimento de seus dados pessoais
          atribuído a <span>EXPRESS MEI</span>, conforme o descrito no item
          10.1, logo acima, a respeito do tratamento dos seus dados (coleta e ou
          o uso de seus dados pessoais), nessa hipótese, deverá encaminhar a sua
          solicitação de revogação para o contato através do e-mail
          contato@expressmei.com.
        </p>

        <h3>3.6 Dúvidas e canal de comunicação com o titular</h3>

        <p>
          Após essa explicação acima, se você tiver alguma dúvida, observação,
          solicitação ou reclamação sobre a coleta ou o uso de seus dados
          pessoais ou sobre esta Política, entre em contato com o nosso
          encarregado, através do e-mail contato@expressmei.com.
        </p>

        <h2>4. Diretrizes da proteção e privacidade de dados</h2>

        <h3>
          4.1 Cumprimento de finalidades de tratamento dos dados esperadas pelos
          titulares
        </h3>

        <p>
          As diretrizes utilizadas pela <span>EXPRESS MEI</span> são pautadas no
          respeito à sua privacidade, agir com transparência e assegurar o
          sigilo (confidencialidade) das informações e dos dados fornecidos.
          Quando você se comunica com a <span>EXPRESS MEI</span>, seus dados são
          utilizados apenas para as finalidades para as quais foram coletados.
        </p>

        <h3>4.2 Alterações nesta POLÍTICA</h3>

        <p>
          A presente POLÍTICA poderá ser alterada a qualquer tempo. Portanto,
          recomendamos que você reveja esta POLÍTICA de tempos em tempos para
          ser informado sobre como estamos protegendo suas informações.
          Quaisquer alterações a POLÍTICA, deverão ser comunicadas previamente
          por meio de aviso em destaque em nossa tela inicial do site ou por
          meio de qualquer outra forma de comunicação estabelecida com o
          titular.
        </p>

        <h3>4.3 Ciência dos termos e condições da POLÍTICA</h3>

        <p>
          Mediante ao compromisso exposto nessa POLÍTICA, ao navegar em nosso
          site, enviar-nos e fornecer-nos seus dados em nossos canais, você, que
          é o titular dos seus dados, declara ciência dos termos e condições
          presentes em nossa Política de Privacidade, conferindo desde já, o seu
          livre e inequívoco consentimento para o tratamento dos seus dados
          pessoais para as necessidades e finalidades aqui determinadas.
        </p>

        <h3>5. Disposições finais</h3>

        <p>
          5.1 Nenhuma tecnologia utilizada pela <span>EXPRESS MEI</span> ofende
          a legislação vigente e os termos desta Política.
        </p>

        <p>
          5.2 A POLÍTICA estabelece que os agentes de tratamento de dados
          envolvidos com a <span>EXPRESS MEI</span>, sejam eles operadores e/ou
          controladores (empresas terceirizadas que realizarem operações a
          exemplo manutenção de sistemas) com os dados que coletam advindos
          dessa Política, por meio de compartilhamento, sejam instruídos e sejam
          notificados dos meios tecnológicos aptos para assegurar a proteção dos
          dados.
        </p>

        <p>
          5.3 Na hipótese da ANPD (autoridade Nacional de Proteção de Dados) ou
          haja decisão judicial cabível que traga novas alterações a regulação e
          repute qualquer das disposições dessa Política, por serem inadequadas,
          inapropriadas ou contrárias a legislação vigente, as demais condições
          permanecerão em pleno vigor e efeito.
        </p>

        <p>
          5.4 Em caso de interpretação dessa Política, os termos legais
          empregados deverão ser interpretados nos termos da LGPD. Já os termos
          técnicos com entendimento complementares a legislação em vigor, devem
          ser compreendidos conforme dispõe o Glossário de termos de vocábulo
          técnico, disponibilizado pelo site oficial do STJ ou da ANPD.
        </p>

        <h3>LEGISLAÇÃO APLICÁVEL E JURISDIÇÃO</h3>

        <p>
          A presente Política será regida e interpretada segundo a legislação
          brasileira, na língua portuguesa, sendo eleito o Foro da Comarca da
          cidade de Belo Horizonte, estado de Minas Gerais para dirimir qualquer
          litígio ou controvérsia envolvendo o presente documento, salvo
          ressalva específica de competência pessoal, territorial ou funcional
          pela legislação aplicável.
        </p>

        <p>A presente Política entra em vigor na data de sua publicação.</p>

        <p>Última atualização em (data da publicação): 17 de outubro de 2022</p>

        <h3>Site privado! Este não é um site governamental!</h3>

        <p>
          Os serviços prestados através deste site, intitulado como Portal
          Express MEI (expressmei.com) são privados e opcionais, todos os
          serviços realizados neste site podem ser feitos gratuitamente e sem o
          nosso acompanhamento profissional através das plataformas
          governamentais tais como{" "}
          <a href="https://www.gov.br/pt-br" target="_blank">https://www.gov.br/pt-br</a> e
          <a href="http://www8.receita.fazenda.gov.br/SimplesNacional" target="_blank">
            http://www8.receita.fazenda.gov.br/SimplesNacional
          </a>
          , do quais nosso site Portal Express MEI (expressmei.com) não faz
          parte.
        </p>

        <h2>Contato</h2>

        <p>
          <span>Telefone/Whatsapp</span>: (31) 97322-4040
        </p>

        <p>
          <span>Email:</span> contato@expressmei.com
        </p>

        <p>
          <span>Empresa:</span> EXPRESS MEI ASSESSORIA E CONSULTORIA EMPRESARIAL
          LTDA - CNPJ: 47.766.535/0001-31
        </p>

        <p>
          <span>Endereço:</span> Rua Rio Grande do Norte, Nº 1435, Sala 708,
          Savassi, Belo Horizonte/MG
        </p>
      </TerminologySectionContainer>
    </AppLayout>
  );
}
