import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { StepsContainer } from "./styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputMask from "react-input-mask";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/fr";
import { brazilianStates } from "@/utils/BrasilianStates";
import { CnpjCategories } from "@/utils/CnpjCategories";
import showErrorDialog from "@/utils/Alerts/ErrorAlert";
import axios from "@/api/api";

import { Link } from "react-router-dom";
import FinishShop from "../FinishShop";

type StepProps = {
  id: number;
  title: string;
  value: number;
};

export default function Steps({ id, title, value }: StepProps) {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Dados Pessoais", "Dados CNPJ", "Endereço", "Pagamento"];

  const productInfo = {
    id,
    title,
    value,
  };

  // step 1
  const [stepOne, setStepOne] = useState({
    name: "",
    lastName: "",
    motherName: "",
    cpf: "",
    rg: "",
    ufRg: "",
    bornDate: dayjs() as Dayjs | null,
    sex: "",
    email: "",
    areaCode: "",
    phone: "",
  });

  // step 2
  const [stepTwo, setStepTwo] = useState({
    mainCnpjType: "",
    secundaryCnpjType: "",
    fantasyName: "",
    cnpjType: {
      estabelecimentoFixo: false,
      internet: false,
      fixoForaDaLoja: false,
      correio: false,
      portaAPorta: false,
      postoMovelOuAmbulante: false,
      televenda: false,
      maquinasAutomaticas: false,
    },
  });

  const handleCnpjType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const booleanValue = event.target.checked;
    setStepTwo({
      ...stepTwo,
      cnpjType: {
        ...stepTwo.cnpjType,
        [event.target.name]: booleanValue,
      },
    });
  };

  // step 3
  const [stepThree, setStepThree] = useState({
    cep: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
    acceptTerms: false,
    validCnpj: false,
  });

  const handleChange = (event: SelectChangeEvent) => {
    setStepOne({ ...stepOne, sex: event.target.value });
  };

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };


  const checkStepOne = () => {
    if (
      !stepOne.name ||
      !stepOne.lastName ||
      !stepOne.motherName ||
      !stepOne.cpf ||
      !stepOne.rg ||
      !stepOne.ufRg ||
      !stepOne.bornDate ||
      !stepOne.sex ||
      !stepOne.email
    ) {
      showErrorDialog(
        "Verifique os dados",
        "parece que tem algum campo faltando =("
      );
      return;
    }
    handleNext();
  };

  const checkStepTwo = () => {
    const hasAnyCnpjType = Object.values(stepTwo.cnpjType).some(
      (value) => value === true
    );
    if (!stepTwo.mainCnpjType || !stepTwo.fantasyName || !hasAnyCnpjType) {
      showErrorDialog(
        "Verifique os dados",
        "parece que tem algum campo faltando =("
      );
      return;
    }
    handleNext();
  };

  const checkStepThree = () => {
    if (
      !stepThree.cep ||
      !stepThree.address ||
      !stepThree.number ||
      !stepThree.neighborhood ||
      !stepThree.city ||
      !stepThree.state ||
      !stepThree.acceptTerms ||
      !stepThree.validCnpj
    ) {
      showErrorDialog(
        "Verifique os dados",
        "parece que tem algum campo faltando =("
      );
      return;
    }
    handleNext();
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <StepsContainer sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps} className="labelStep">
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className="content">
        {activeStep === 0 && (
          <Box
            sx={{ display: "flex", flexDirection: "column", p: 2 }}
            className="step1"
            data-aos="fade-right"
          >
            <Typography sx={{ mt: 1, mb: 2 }}>Dados Pessoais</Typography>
            <div className="persoanlDataForm">
              <div className="slice">
                <TextField
                  id="name"
                  label="Nome *"
                  variant="outlined"
                  fullWidth
                  value={stepOne.name}
                  onChange={(e) =>
                    setStepOne({ ...stepOne, name: e.target.value })
                  }
                />
                <TextField
                  id="lastName"
                  label="Sobrenome *"
                  variant="outlined"
                  fullWidth
                  value={stepOne.lastName}
                  onChange={(e) =>
                    setStepOne({ ...stepOne, lastName: e.target.value })
                  }
                />
              </div>

              <TextField
                id="motherName"
                label="Nome da mãe *"
                variant="outlined"
                fullWidth
                value={stepOne.motherName}
                onChange={(e) =>
                  setStepOne({ ...stepOne, motherName: e.target.value })
                }
              />

              <div className="slice">
                <InputMask
                  mask="(99)"
                  disabled={false}
                  id="ddd"
                  variant="outlined"
                  type="text"
                  fullWidth
                  value={stepOne.areaCode}
                  onChange={(e) =>
                    setStepOne({ ...stepOne, areaCode: e.target.value })
                  }
                  maskChar=" "
                >
                  {
                    // @ts-ignore
                    () => <TextField fullWidth label="DDD *" />
                  }
                </InputMask>

                <InputMask
                  mask="99999-9999"
                  disabled={false}
                  id="phone"
                  variant="outlined"
                  type="text"
                  fullWidth
                  value={stepOne.phone}
                  onChange={(e) =>
                    setStepOne({ ...stepOne, phone: e.target.value })
                  }
                  maskChar=" "
                >
                  {
                    // @ts-ignore
                    () => <TextField fullWidth label="Telefone *" />
                  }
                </InputMask>

              </div>

              <InputMask
                mask="999.999.999-99"
                disabled={false}
                id="cpf"
                variant="outlined"
                type="text"
                fullWidth
                value={stepOne.cpf}
                onChange={(e) =>
                  setStepOne({ ...stepOne, cpf: e.target.value })
                }
                maskChar=" "
              >
                {
                  // @ts-ignore
                  () => <TextField label="CPF *" />
                }
              </InputMask>

              <InputMask
                mask="99.999.999"
                disabled={false}
                id="rg"
                variant="outlined"
                type="text"
                fullWidth
                value={stepOne.rg}
                onChange={(e) => setStepOne({ ...stepOne, rg: e.target.value })}
                maskChar=" "
              >
                {
                  // @ts-ignore
                  () => <TextField label="RG *" />
                }
              </InputMask>

              <FormControl>
                <InputLabel id="entregaUF-label">UF *</InputLabel>
                <Select
                  id="entregaUF"
                  labelId="entregaUF-label"
                  value={stepOne.ufRg}
                  onChange={(e) =>
                    setStepOne({ ...stepOne, ufRg: e.target.value })
                  }
                >
                  {brazilianStates.map((state, index) => (
                    <MenuItem key={index} value={state.value}>
                      {state.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <div className="slice">
                <LocalizationProvider
                  dateAdapter={AdapterDayjs}
                  adapterLocale={"fr"}
                >
                  <DatePicker
                    disableFuture
                    label="Data de nascimento *"
                    openTo="year"
                    views={["year", "month", "day"]}
                    value={stepOne.bornDate}
                    onChange={(newValue) => {
                      setStepOne({ ...stepOne, bornDate: newValue });
                    }}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                  />
                </LocalizationProvider>
                <FormControl fullWidth>
                  <InputLabel id="sexo">Sexo *</InputLabel>
                  <Select
                    labelId="sexo"
                    id="sexo"
                    label="Sexo"
                    value={stepOne.sex}
                    onChange={handleChange}
                    fullWidth
                  >
                    <MenuItem value="masculino">Masculino</MenuItem>
                    <MenuItem value="feminino">Feminino</MenuItem>
                    <MenuItem value="outros">Outros</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <TextField
                id="email"
                label="Email *"
                type="email"
                variant="outlined"
                fullWidth
                value={stepOne.email}
                onChange={(e) =>
                  setStepOne({ ...stepOne, email: e.target.value })
                }
              />
            </div>
          </Box>
        )}

        {activeStep === 1 && (
          <Box
            sx={{ display: "flex", flexDirection: "column", p: 2 }}
            className="step2"
            data-aos="fade-right"
          >
            <Typography sx={{ mt: 1, mb: 2 }}>Dados CNPJ</Typography>
            <div className="cnpjDataForm">
              <FormControl>
                <InputLabel id="main-cnpj-type">
                  Selecione a atividade principal do CNPJ *
                </InputLabel>
                <Select
                  id="main-cnpj-type"
                  labelId="main-cnpj-type"
                  value={stepTwo.mainCnpjType}
                  onChange={(e) =>
                    setStepTwo({ ...stepTwo, mainCnpjType: e.target.value })
                  }
                >
                  {CnpjCategories.map((state, index) => (
                    <MenuItem key={index} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <InputLabel id="secundary-cnpj-type">
                  Selecione as atividades secundárias do CNPJ (opcional)
                </InputLabel>
                <Select
                  id="secundary-cnpj-type"
                  labelId="secundary-cnpj-type"
                  value={stepTwo.secundaryCnpjType}
                  onChange={(e) =>
                    setStepTwo({
                      ...stepTwo,
                      secundaryCnpjType: e.target.value,
                    })
                  }
                >
                  {CnpjCategories.map((state, index) => (
                    <MenuItem key={index} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                id="fantasyName"
                label="Nome Fantasia *"
                variant="outlined"
                fullWidth
                value={stepTwo.fantasyName}
                onChange={(e) =>
                  setStepTwo({ ...stepTwo, fantasyName: e.target.value })
                }
              />
              <span>Formas de atuação do CNPJ *</span>
              <FormGroup>
                <div className="checkbox-slice">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={stepTwo.cnpjType.estabelecimentoFixo}
                        onChange={handleCnpjType}
                        name="estabelecimentoFixo"
                        value={stepTwo.cnpjType.estabelecimentoFixo}
                      />
                    }
                    label="Estabelecimento fixo"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={stepTwo.cnpjType.internet}
                        onChange={handleCnpjType}
                        name="internet"
                        value={stepTwo.cnpjType.internet}
                      />
                    }
                    label="Internet"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={stepTwo.cnpjType.fixoForaDaLoja}
                        onChange={handleCnpjType}
                        name="fixoForaDaLoja"
                        value={stepTwo.cnpjType.fixoForaDaLoja}
                      />
                    }
                    label="Em local fixo fora da loja"
                  />
                </div>
                <div className="checkbox-slice">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={stepTwo.cnpjType.correio}
                        onChange={handleCnpjType}
                        name="correio"
                        value={stepTwo.cnpjType.correio}
                      />
                    }
                    label="Correio"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={stepTwo.cnpjType.portaAPorta}
                        onChange={handleCnpjType}
                        name="portaAPorta"
                        value={stepTwo.cnpjType.portaAPorta}
                      />
                    }
                    label="Porta A Porta"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={stepTwo.cnpjType.postoMovelOuAmbulante}
                        onChange={handleCnpjType}
                        name="postoMovelOuAmbulante"
                        value={stepTwo.cnpjType.postoMovelOuAmbulante}
                      />
                    }
                    label="Postos móveis ou por ambulantes"
                  />
                </div>
                <div className="checkbox-slice">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={stepTwo.cnpjType.televenda}
                        onChange={handleCnpjType}
                        name="televenda"
                        value={stepTwo.cnpjType.televenda}
                      />
                    }
                    label="Televenda"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={stepTwo.cnpjType.maquinasAutomaticas}
                        onChange={handleCnpjType}
                        name="maquinasAutomaticas"
                        value={stepTwo.cnpjType.maquinasAutomaticas}
                      />
                    }
                    label="Máquinas automáticas"
                  />
                </div>
              </FormGroup>
            </div>
          </Box>
        )}

        {activeStep === 2 && (
          <Box
            sx={{ display: "flex", flexDirection: "column", p: 2 }}
            className="step3"
            data-aos="fade-right"
          >
            <Typography sx={{ mt: 1, mb: 2 }}>Endereço Residencial</Typography>
            <div className="adressForm">
              <InputMask
                mask="99999-999"
                id="cep"
                variant="outlined"
                type="text"
                fullWidth
                value={stepThree.cep}
                onChange={(e) => setStepThree({ ...stepThree, cep: e.target.value })}
                maskChar=" "
              >
                {
                  // @ts-ignore
                  () => <TextField label="CEP *" />
                }
              </InputMask>

              <div className="slice">
                <TextField
                  id="street"
                  label="Rua *"
                  variant="outlined"
                  fullWidth
                  value={stepThree.address}
                  onChange={(e) =>
                    setStepThree({ ...stepThree, address: e.target.value })
                  }
                />
                <TextField
                  id="number"
                  label="Número *"
                  variant="outlined"
                  fullWidth
                  value={stepThree.number}
                  onChange={(e) =>
                    setStepThree({ ...stepThree, number: e.target.value })
                  }
                />
              </div>

              <TextField
                id="complement"
                label="Complemento"
                variant="outlined"
                fullWidth
                value={stepThree.complement}
                onChange={(e) =>
                  setStepThree({ ...stepThree, complement: e.target.value })
                }
              />

              <div className="slice">
                <TextField
                  id="neighborhood"
                  label="Bairro *"
                  variant="outlined"
                  fullWidth
                  value={stepThree.neighborhood}
                  onChange={(e) =>
                    setStepThree({ ...stepThree, neighborhood: e.target.value })
                  }
                />

                <TextField
                  id="city"
                  label="Cidade *"
                  variant="outlined"
                  fullWidth
                  value={stepThree.city}
                  onChange={(e) =>
                    setStepThree({ ...stepThree, city: e.target.value })
                  }
                />
              </div>

              <FormControl>
                <InputLabel id="state-label">Estado *</InputLabel>
                <Select
                  id="state"
                  labelId="state-label"
                  value={stepThree.state}
                  onChange={(e) =>
                    setStepThree({ ...stepThree, state: e.target.value })
                  }
                  fullWidth
                  variant="outlined"
                >
                  {brazilianStates.map((state, index) => (
                    <MenuItem key={index} value={state.value}>
                      {state.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={stepThree.acceptTerms}
                    onChange={(e) =>
                      setStepThree({
                        ...stepThree,
                        acceptTerms: e.target.checked,
                      })
                    }
                    name="acceptTerms"
                    value={stepThree.acceptTerms}
                  />
                }
                label={
                  <div>
                      <span>Eu li e aceito os </span>
                      <Link className="link-term" to={'/termos-de-uso'} target="_blank" rel="noopener noreferrer">termos de uso</Link>
                      <span> e </span>
                      <Link className="link-term" to={'/politica-de-privacidade'} target="_blank" rel="noopener noreferrer">política de privacidade</Link>.
                  </div>
                  }
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={stepThree.validCnpj}
                    onChange={(e) =>
                      setStepThree({
                        ...stepThree,
                        validCnpj: e.target.checked,
                      })
                    }
                    name="validCnpj"
                    value={stepThree.validCnpj}
                  />
                }
                label={
                  <div>
                    <span>Declaro que para obter os benefícios do CNPJ MEI, preciso estar em dia com a cobrança mensal da DAS(boleto) emitido pela Receita Federal. *</span>
                  </div>
                }
              />
            </div>
          </Box>
        )}

        {activeStep === 3 && (
          <Box
            sx={{ display: "flex", flexDirection: "column", p: 2 }}
            className="step4"
            data-aos="fade-right"
          >
            <div className="payment-form">
              {/* <DirectPayment 
                senderData={stepOne}
                cnpjData={stepTwo}
                adressData={stepThree}
                productInfo={productInfo}
              /> */}

              <FinishShop
                senderData={stepOne}
                cnpjData={stepTwo}
                adressData={stepThree}
                productInfo={productInfo}
              />
            </div>
          </Box>
        )}
      </div>
      <div className="actions">
        {activeStep == 0 && (
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} sx={{ mr: 1 }}>
              Voltar
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={checkStepOne}>Próximo</Button>
          </Box>
        )}

        {activeStep == 1 && (
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
              Voltar
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={checkStepTwo}>Próximo</Button>
          </Box>
        )}

        {activeStep == 2 && (
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button color="inherit" onClick={handleBack} sx={{ mr: 1 }}>
              Voltar
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={checkStepThree}>Próximo</Button>
          </Box>
        )}
      </div>
    </StepsContainer>
  );
}
