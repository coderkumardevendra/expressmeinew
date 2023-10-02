import {
  FooterContainer,
  FooterContent,
  FooterCopy,
  FooterLink,
} from "./styles";
import LogoG from "@/assets/logo-g.webp";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  return (
    <FooterContainer className="container">
      <FooterContent>
        <div className="footer_logo">
        <img src={LogoG} width={304} height={101} alt="Logo G" />
        </div>

        <div className="footer_paths">
          <h2>Nosso Site</h3>

          <ul>
            <li>
              <FooterLink to="/abrir-mei">Abrir</FooterLink>
            </li>
            <li>
              <FooterLink to="/alterar-mei">Alterar</FooterLink>
            </li>
            <li>
              <FooterLink to="/cancelar-mei">Cancelar</FooterLink>
            </li>
            <li>
              <FooterLink to="/declarar-mei">Declarar</FooterLink>
            </li>
            <li>
              <FooterLink to="/politica-de-privacidade">Política de privacidade</FooterLink>
            </li>
            <li>
              <FooterLink to="/termos-de-uso">Termos de uso</FooterLink>
            </li>
          </ul>
        </div>

        <div className="footer_about">
          <h2>Fale Conosco</h2>

          <ul>
            <li>
              <FmdGoodOutlinedIcon />
              <div>
                <p>Rio Grande do Norte, Nº 1435,</p>
                <p>Sala 708,Savassi, Belo Horizonte/MG</p>
              </div>
            </li>
            <li>
              <PhoneInTalkOutlinedIcon />
              <span>(31) 97322-4040</span>
            </li>
            <li>
              <EmailOutlinedIcon />
              <span>contato@expressmei.com</span>
            </li>
          </ul>
        </div>
      </FooterContent>

      <FooterCopy>
        <p>&copy; 2022 Express MEI CNPJ nº 47.766.535/0001-31 - Todos os direitos reservados.</p>
      </FooterCopy>
    </FooterContainer>
  );
};

export default Footer;
