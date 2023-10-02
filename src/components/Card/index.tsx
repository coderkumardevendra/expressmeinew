import { Button, Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer } from "./styles";

type Props = {
  id: number;
  title: string;
  description: string;
  descriptionContent?: string;
  image: string;
  imageAlt: string;
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

      <img src={image} alt={imageAlt} />
      <Button onClick={() => navigateTo(buttonLink)} variant="contained" fullWidth>
        {buttonText}
      </Button>
    </CardContainer>
  );
}
