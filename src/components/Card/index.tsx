import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CardContainer } from "./styles";

type Props = {
  id: number;
  title: string;
  description: string;
  descriptionContent?: string;
  image: string;
  imageWidth: string;
  imageHeight: string;
  imageAlt: string;
  srcSet:string;
  buttonText: string;
  buttonLink: string;
};

export default function Card({
  id,
  title,
  description,
  descriptionContent,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  srcSet,
  buttonText,
  buttonLink,
}: Props) {
  const navigate = useNavigate();

  const navigateTo = (page: string) => {
    navigate(page);
  };

  return (
    <CardContainer component="div" data-aos="fade-up">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{descriptionContent}</p>
      <hr></hr>

      <img src={image} width={imageWidth} height={imageHeight} srcSet={srcSet} alt={imageAlt} />
      <Button onClick={() => navigateTo(buttonLink)} variant="contained" fullWidth>
        {buttonText}
      </Button>
    </CardContainer>
  );
}
