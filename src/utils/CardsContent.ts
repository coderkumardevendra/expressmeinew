import OpenIcon from "@/assets/open-icon.webp";
import AlterIcon from "@/assets/refresh-icon.webp";
import CancelIcon from "@/assets/closed-icon.webp";
import DeclareIcon from "@/assets/declaration-icon.webp";
import ConsultIcon from "@/assets/consulta.webp";
import CreditCardIcon from "@/assets/credit-card.webp";

export const CardsContent = [
  {
    id: 1,
    title: "Abrir",
    description: "Abra seu MEI de forma simplificada:",
    image: {
      src: OpenIcon,
      alt: "uma placa azul com a palavra open",
      imageWidth: "35",
      imageHeight: "35",
      srcSet: `${OpenIcon} 1x, ${OpenIcon.replace('.webp', '.webp')} 2x, ${OpenIcon.replace('.webp', '.webp')} 3x`
    },
    buttonText: "Abrir MEI",
    buttonLink: "/abrir-mei",
  },
  {
    id: 2,
    title: "Alterar",
    description: "Atualize os dados do seu CNPJ MEI:",
    image: {
      src: AlterIcon,
      alt: "duas setas formando um circulo",
      imageWidth: "35",
      imageHeight: "35",
      srcSet: `${AlterIcon} 1x, ${AlterIcon.replace('.webp', '.webp')} 2x, ${AlterIcon.replace('.webp', '.webp')} 3x`
    },
    buttonText: "Alterar MEI",
    buttonLink: "/alterar-mei",
  },
  {
    id: 3,
    title: "Cancelar",
    description: "",
    descriptionContent: "Cancele seu CNPJ MEI de forma facilitada:",
    image: {
      src: CancelIcon,
      alt: "uma placa azul com a palavra closed",
      imageWidth: "35",
      imageHeight: "35",
      srcSet: `${CancelIcon} 1x, ${CancelIcon.replace('.webp', '.webp')} 2x, ${CancelIcon.replace('.webp', '.webp')} 3x`
    },
    imageAlt: "uma placa azul com a palavra closed",
    buttonText: "Cancelar MEI",
    buttonLink: "/cancelar-mei",
  },
  {
    id: 4,
    title: "Declarar",
    description:
      "Faça sua declaração de maneira simplificada com nossa ajuda:",
    image: {
      src: DeclareIcon,
      alt: "uma prancheta azul com a palavra declaration",
      imageWidth: "35",
      imageHeight: "35",
      srcSet: `${DeclareIcon} 1x, ${DeclareIcon.replace('.webp', '.webp')} 2x, ${DeclareIcon.replace('.webp', '.webp')} 3x`
    },
    buttonText: "Declarar MEI",
    buttonLink: "/declarar-mei",
  },
  {
    id: 5,
    title: "Consultoria",
    description: "Faça uma consultoria de maneira simplificada com nossa ajuda:",
    image: {
      src: ConsultIcon,
      alt: "Duas pessoas conversando sentadas em uma mesa com um computador",
      imageWidth: "35",
      imageHeight: "35",
      srcSet: `${ConsultIcon} 1x, ${ConsultIcon.replace('.webp', '.webp')} 2x, ${ConsultIcon.replace('.webp', '.webp')} 3x`
    },
    buttonText: "Fazer Consultoria",
    buttonLink: "/consultoria",
  },
  {
    id: 6,
    title: "Parcelar MEI",
    description: "Faça o parcelamento de maneira simplificada com nossa ajuda:",
    image: {
      src: CreditCardIcon,
      alt: "Ìcone de cartão de crédito",
      imageWidth: "35",
      imageHeight: "35",
      srcSet: `${CreditCardIcon} 1x, ${CreditCardIcon.replace('.webp', '.webp')} 2x, ${CreditCardIcon.replace('.webp', '.webp')} 3x`
    },
    buttonText: "Parcelar MEI",
    buttonLink: "/parcelar-mei",
  },
];