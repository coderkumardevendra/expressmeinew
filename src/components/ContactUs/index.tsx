import React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import InputMask from "react-input-mask";
import { Button, TextField } from "@mui/material";
import showSuccessDialog from "@/utils/Alerts/SuccessAlert";
import showErrorDialog from "@/utils/Alerts/ErrorAlert";
import { FormContainer } from "./styles";
import Captcha from "../Captcha";

export default function ContactUsForm() {
  const form = useRef();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [captchaRef, setCaptchaRef] = useState<any>(null);
  const handleCaptchaValidate = (value: boolean) => {
    console.log("captcha", value);
    setCaptchaRef(value);
  };

  const resetFields = () => {
    setName("");
    setNumber("");
    setEmail("");
    setEmailError("");
    setMessage("");
  };

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChangeEmail = (event : any) => {
    if (!isValidEmail(event.target.value)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError("");
    }

    setEmail(event.target.value);
  };

  async function sendEmail(e: any) {
    e.preventDefault();
    try {
      if (!captchaRef) {
        showErrorDialog("Erro ao enviar formulário", "Verifique o captcha obrigatório");
        return;
      }
      setIsSending(true);
      emailjs
        .sendForm(
          "service_m2ay99e",
          "template_kr5ftv8",
          // @ts-ignore
          form.current,
          "cF2X-20hKfOUWyWnq"
        )
        .then(
          (result) => {
            console.log(number);
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      showSuccessDialog(
        "Mensagem enviada com sucesso !",
        "Em breve nossa equipe entrará em contato com você !"
      );
      e.target.reset();
      resetFields();
      setIsSending(false);
    } catch (error) {
      showErrorDialog(
        "Erro ao enviar mensagem",
        "Tente novamente mais tarde !"
      );
      console.log(error);
    }
  }



  return (
    <FormContainer
      // @ts-ignore
      ref={form}
      onSubmit={sendEmail}
    >
      <TextField
        id="name-input"
        label="Nome"
        type="text"
        name="user_name"
        fullWidth
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <InputMask
        mask="(99) 99999 - 9999"
        disabled={false}
        id="number-input"
        variant="outlined"
        type="text"
        fullWidth
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        maskChar=" "
        name="user_number"
      >
        {
          // @ts-ignore
          () => <TextField label="Número" name="user_number" />
        }
      </InputMask>

      <TextField
        id="email-input"
        label="Email"
        type="email"
        name="user_email"
        fullWidth
        variant="outlined"
        value={email}
        helperText={emailError}
        error={emailError !== ""}
        onChange={handleChangeEmail}
        required
      />

      <TextField
        id="message-input"
        label="Mensagem"
        type="text"
        name="message"
        fullWidth
        multiline
        rows={5}
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

        <Captcha
            onValidate={handleCaptchaValidate}
        />

      <Button variant="contained" type="submit" disabled={isSending}>
        Enviar
      </Button>
    </FormContainer>
  );
}
