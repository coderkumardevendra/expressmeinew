import SecurityMessage from "@/components/SecurityMessage";
import AppLayout from "@/layouts/App";
import { Helmet } from "react-helmet";
import { OpenPageContainer, PaymentContainer } from "./styles";
import { useFormik } from "formik";
import * as yup from "yup";
import InputMask from "react-input-mask";
import axios from "axios";
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { brazilianStates } from "@/utils/BrasilianStates";
import { CnpjCategories } from "@/utils/CnpjCategories";
import { useRef, useState } from "react";
import showErrorDialog from "@/utils/Alerts/ErrorAlert";
import { Link, useNavigate } from "react-router-dom";
import sendPayment from "@/utils/SendPayment";
import PaymentOptions from "@/components/PaymentOptions";
import ProductDescribe from "@/components/ProductDescribe";
import DataColectWarning from "@/components/DataColectWarning";
import { NumericFormat } from "react-number-format";
import Captcha from "@/components/Captcha";
import validateCPF from "@/utils/validateCpf";

import { useEffect } from 'react';
import ReactGA from 'react-ga';

export default function OpenPage() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  },[])


  const [loading, setLoading] = useState(false);
  const [captchaRef, setCaptchaRef] = useState<any>(null);
  const handleCaptchaValidate = (value: boolean) => {
    setCaptchaRef(value);
  };

  const productInfo = {
    quantity: 1,
    name: "Abrir MEI",
    amount: 14990,
    description: "Abertura de MEI",
    code: "157",
  };

  const optionsList = [
    { label: "Estabelecimento fixo", value: "estabelecimento" },
    { label: "Internet", value: "internet" },
    { label: "Em local fixo fora da loja", value: "local" },
    { label: "Correio Porta A Porta", value: "correio" },
    { label: "Postos móveis ou por ambulantes", value: "postos" },
    { label: "Televenda", value: "televenda" },
    { label: "Máquinas automáticas", value: "maquinas" },
  ];

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
  };

  const handleCpfChange = async (cpf: string) => {
    formik.setFieldValue("cpf", cpf);
    const isValid = validateCPF(cpf);
    console.log(isValid);
    if (!isValid) {
      formik.setErrors({ cpf: "CPF inválido" });
      await formik.setTouched({ cpf: true });
      return;
    } else {
      formik.setErrors({ cpf: "" });
      await formik.setTouched({ cpf: false });
    }
  };

  const resetCep = () => {
    formik.setFieldValue("street", "");
    formik.setFieldValue("neighborhood", "");
    formik.setFieldValue("number", "");
    formik.setFieldValue("city", "");
    formik.setFieldValue("state", "");
    formik.setFieldValue("complement", "");
  };

  const buscarCep = async (cep: string) => {
    try {
      if (cep.length === 9 && cep.includes("-")) {
        const formatedCep = cep.replace("-", "");
        formik.setFieldValue("cep", formatedCep);
      }
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      formik.setFieldValue("street", response.data.logradouro);
      formik.setFieldValue("neighborhood", response.data.bairro);
      formik.setFieldValue("city", response.data.localidade);
      formik.setFieldValue("state", response.data.uf);
      formik.setFieldValue("complement", response.data.complemento);

      if (response.data.erro) {
        resetCep();
        showErrorDialog(
          "CEP não encontrado",
          "O CEP informado não foi encontrado"
        );
      }
    } catch (error) {
      resetCep();
    }
  };

  const validationSchema = yup.object({
    // personal data
    name: yup.string().required("Campo obrigatório"),
    lastname: yup.string().required("Campo obrigatório"),
    motherName: yup.string().required("Campo obrigatório"),
    cpf: yup
      .string()
      .required("Campo obrigatório")
      .test("cpf", "CPF inválido", (value) => {
        return validateCPF(value);
      }),
    rgNumber: yup.string().required("Campo obrigatório"),
    rgEmission: yup.string().required("Campo obrigatório"),
    rgEmissionOrganization: yup.string().required("Campo obrigatório"),
    bornDate: yup.mixed().required("Campo obrigatório"),
    sex: yup.string().required("Campo obrigatório"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Campo obrigatório"),
    numberPhone: yup.string().required("Campo obrigatório"),
    numberCelphone: yup.string().required("Campo obrigatório"),
    tituloEleitor: yup.string(),
    // cnpj data
    mainActivity: yup.string().required("Campo obrigatório"),
    secondActivity: yup.string(),
    inicialCapital: yup.string().required("Campo obrigatório"),
    cnpjName: yup.string(),
    cnpjOptions: yup.array().min(1, "Selecione pelo menos uma opção"),
    // endereço
    cep: yup.string().required("Campo obrigatório"),
    street: yup.string().required("Campo obrigatório"),
    number: yup.string().required("Campo obrigatório"),
    complement: yup.string(),
    neighborhood: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    state: yup.string().required("Campo obrigatório"),
    // termos
    terms: yup
      .boolean()
      .required("Você precisa aceitar os termos")
      .oneOf([true], "Você precisa aceitar os termos"),
    declaracaoDai: yup.boolean().oneOf([true], "Campo obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      // personal data
      name: "",
      lastname: "",
      motherName: "",
      cpf: "",
      rgNumber: "",
      rgEmission: "MG",
      rgEmissionOrganization: "",
      bornDate: "",
      sex: "",
      email: "",
      numberPhone: "",
      numberCelphone: "",
      tituloEleitor: "",
      // cnpj data
      mainActivity: "",
      secondActivity: "",
      inicialCapital: "",
      cnpjName: "",
      cnpjOptions: [],
      // endereço
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
      // termos
      terms: false,
      declaracaoDai: false,
    },
    validationSchema: validationSchema,
    async validate(values) {},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const isEmpty = (value: Object) => {
    return Object.keys(value).length === 0;
  };

  const [paymentType, setPaymentType] = useState<string | false>("pix");
  const [creditCardData, setCreditCardData] = useState("");

  const handlePaymentType = (type: string | false) => {
    setPaymentType(type);
  };

  const handleChangeCreditCard = (data: string) => {
    setCreditCardData(data);
  };

  const navigate = useNavigate();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const errors = await formik.validateForm();

    
    if (isEmpty(errors)) {
      if (!captchaRef) {
        showErrorDialog("Erro ao enviar formulário", "Verifique o captcha obrigatório");
        return;
      }
      setLoading(true);
      const id = await sendPayment(
        formik.values,
        productInfo,
        paymentType,
        creditCardData,
        captchaRef,
      );
      setLoading(false);
      if (id) {
        navigate(`/compra/${id}`);
      }
    } else {
      // @ts-ignore
      formik.setTouched(errors);
      showErrorDialog(
        "Erro ao enviar formulário",
        "Verifique os campos obrigatórios"
      );
    }
  };

  return (
    <AppLayout>
      <Helmet>
        <title>Express Mei | Abertura de MEI</title>
        <meta
          name="description"
          content="Express MEI, Facilitando sua vida com confiança, praticidade e velocidade ! Faça sua abertura de MEI agora mesmo de forma facilitada."
        />
      </Helmet>
      <OpenPageContainer>
        <div className="call">
          <h1 data-aos="fade-up">
            <span>Abertura</span> de MEI
          </h1>
          <p data-aos="fade-up">
            Seu CNPJ chegará no e-mail informado em até 24 horas úteis após a
            confirmação do pagamento.
          </p>
        </div>

        <PaymentContainer onSubmit={onSubmit}>
          <div>
            <p data-aos="fade-up" className="fill-data">
              Preencha os dados abaixo para realizar sua compra
            </p>
            <div className="personalData">
              <h3>Dados Pessoais</h3>
              <p>Campos com * são obrigatórios</p>
              <div className="slice">
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Nome *"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />

                <TextField
                  fullWidth
                  id="lastname"
                  name="lastname"
                  label="Sobrenome *"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastname && Boolean(formik.errors.lastname)
                  }
                  helperText={formik.touched.lastname && formik.errors.lastname}
                />
              </div>
              <TextField
                fullWidth
                id="motherName"
                name="motherName"
                label="Nome da Mãe *"
                size="small"
                variant="outlined"
                margin="dense"
                value={formik.values.motherName}
                onChange={formik.handleChange}
                error={
                  formik.touched.motherName && Boolean(formik.errors.motherName)
                }
                helperText={
                  formik.touched.motherName && formik.errors.motherName
                }
              />
              <InputMask
                className="input-mask"
                mask="999.999.999-99"
                value={formik.values.cpf}
                onChange={(e) => handleCpfChange(e.target.value)}
                onBlur={formik.handleBlur("cpf")}
              >
                {
                  // @ts-ignore
                  (inputProps) => (
                    <TextField
                      label="CPF *"
                      variant="outlined"
                      margin="dense"
                      name="cpf"
                      fullWidth
                      size="small"
                      error={formik.touched.cpf && Boolean(formik.errors.cpf)}
                      helperText={formik.touched.cpf && formik.errors.cpf}
                      {...inputProps}
                    />
                  )
                }
              </InputMask>
              <TextField
                className="input-mask"
                fullWidth
                id="rgNumber"
                name="rgNumber"
                label="RG *"
                size="small"
                variant="outlined"
                margin="dense"
                value={formik.values.rgNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.rgNumber && Boolean(formik.errors.rgNumber)
                }
                helperText={formik.touched.rgNumber && formik.errors.rgNumber}
              />

              <FormControl
                className="input-mask"
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
                error={
                  formik.touched.rgEmission && Boolean(formik.errors.rgEmission)
                }
              >
                <InputLabel id="rgEmission-label">Estado Emissor *</InputLabel>
                <Select
                  labelId="rgEmission"
                  label="Estado emissor *"
                  name="rgEmission"
                  id="rgEmission"
                  value={formik.values.rgEmission}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                >
                  {brazilianStates.map((state, index) => (
                    <MenuItem key={index} value={state.value}>
                      {state.label}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.rgEmission && formik.errors.rgEmission && (
                  <span className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-k4qjio-MuiFormHelperText-root">
                    {formik.errors.rgEmission}
                  </span>
                )}
              </FormControl>

              <TextField
                className="input-mask"
                fullWidth
                id="rgEmissionOrganization"
                name="rgEmissionOrganization"
                label="Órgão Emissor *"
                size="small"
                variant="outlined"
                margin="dense"
                value={formik.values.rgEmissionOrganization}
                onChange={formik.handleChange}
                error={
                  formik.touched.rgEmissionOrganization &&
                  Boolean(formik.errors.rgEmissionOrganization)
                }
                helperText={
                  formik.touched.rgEmissionOrganization &&
                  formik.errors.rgEmissionOrganization
                }
              />

              <InputMask
                className="input-mask"
                mask="99/99/9999"
                placeholder="dd/mm/aaaa"
                value={formik.values.bornDate}
                onChange={formik.handleChange("bornDate")}
                onBlur={formik.handleBlur("bornDate")}
              >
                {
                  // @ts-ignore
                  (inputProps) => (
                    <TextField
                      label="Data de nascimento *"
                      variant="outlined"
                      margin="dense"
                      name="bornDate"
                      fullWidth
                      size="small"
                      error={
                        formik.touched.bornDate &&
                        Boolean(formik.errors.bornDate)
                      }
                      helperText={
                        formik.touched.bornDate && formik.errors.bornDate
                      }
                      {...inputProps}
                    />
                  )
                }
              </InputMask>

              <TextField
                fullWidth
                id="email"
                name="email"
                label="E-mail *"
                size="small"
                variant="outlined"
                margin="dense"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              <FormControl
                className="input-mask"
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
                error={formik.touched.sex && Boolean(formik.errors.sex)}
              >
                <InputLabel id="sex-label">Sexo</InputLabel>
                <Select
                  labelId="sex-label"
                  label="Sexo"
                  name="sex"
                  id="sex"
                  value={formik.values.sex}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                >
                  <MenuItem value="masculino">Masculino</MenuItem>
                  <MenuItem value="feminino">Feminino</MenuItem>
                  <MenuItem value="outros">Outros</MenuItem>
                </Select>
                {formik.touched.sex && formik.errors.sex && (
                  <span className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-k4qjio-MuiFormHelperText-root">
                    {formik.errors.sex}
                  </span>
                )}
              </FormControl>

              <InputMask
                className="input-mask"
                mask="(99) 9999-9999"
                value={formik.values.numberPhone}
                onChange={formik.handleChange("numberPhone")}
                onBlur={formik.handleBlur("numberPhone")}
              >
                {
                  // @ts-ignore
                  (inputProps) => (
                    <TextField
                      label="Telefone *"
                      variant="outlined"
                      margin="dense"
                      name="numberPhone"
                      fullWidth
                      size="small"
                      error={
                        formik.touched.numberPhone &&
                        Boolean(formik.errors.numberPhone)
                      }
                      helperText={
                        formik.touched.numberPhone && formik.errors.numberPhone
                      }
                      {...inputProps}
                    />
                  )
                }
              </InputMask>

              <InputMask
                className="input-mask"
                mask="(99) 99999-9999"
                name="numberCelphone"
                value={formik.values.numberCelphone}
                onChange={formik.handleChange("numberCelphone")}
                onBlur={formik.handleBlur("numberCelphone")}
              >
                {
                  // @ts-ignore
                  (inputProps) => (
                    <TextField
                      label="Celular *"
                      variant="outlined"
                      margin="dense"
                      name="numberCelphone"
                      id="numberCelphone"
                      fullWidth
                      size="small"
                      error={
                        formik.touched.numberCelphone &&
                        Boolean(formik.errors.numberCelphone)
                      }
                      helperText={
                        formik.touched.numberCelphone &&
                        formik.errors.numberCelphone
                      }
                      {...inputProps}
                    />
                  )
                }
              </InputMask>

              <TextField
                className="input-mask"
                fullWidth
                id="tituloEleitor"
                name="tituloEleitor"
                label="Titulo eleitor (opcional)"
                size="small"
                variant="outlined"
                margin="dense"
                value={formik.values.tituloEleitor}
                onChange={formik.handleChange}
                error={
                  formik.touched.tituloEleitor &&
                  Boolean(formik.errors.tituloEleitor)
                }
                helperText={
                  formik.touched.tituloEleitor && formik.errors.tituloEleitor
                }
              />
            </div>

            <div className="cnpjData">
              <h3>Dados básicos do CNPJ</h3>

              <FormControl
                fullWidth
                size="small"
                className="input-mask"
                variant="outlined"
                margin="dense"
              >
                <InputLabel id="main-cnpj-type">
                  Selecione a atividade principal do CNPJ *
                </InputLabel>
                <Select
                  id="main-cnpj-type"
                  labelId="main-cnpj-type"
                  value={formik.values.mainActivity}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth
                  name="mainActivity"
                  variant="outlined"
                  margin="dense"
                  error={
                    formik.touched.mainActivity &&
                    Boolean(formik.errors.mainActivity)
                  }
                >
                  {CnpjCategories.map((state, index) => (
                    <MenuItem key={index} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.mainActivity && formik.errors.mainActivity && (
                  <span className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-k4qjio-MuiFormHelperText-root">
                    {formik.errors.mainActivity}
                  </span>
                )}
              </FormControl>

              <FormControl
                fullWidth
                size="small"
                className="input-mask"
                variant="outlined"
                margin="dense"
              >
                <InputLabel id="secondary-cnpj-type">
                  Selecione as atividades secundárias do CNPJ (opcional)
                </InputLabel>
                <Select
                  id="secondary-cnpj-type"
                  labelId="secondary-cnpj-type"
                  value={formik.values.secondActivity}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                  fullWidth
                  name="secondActivity"
                  variant="outlined"
                  margin="dense"
                >
                  {CnpjCategories.map((state, index) => (
                    <MenuItem key={index} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <NumericFormat
                className="input-mask"
                value={formik.values.inicialCapital}
                displayType="input"
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                allowNegative={false}
                onValueChange={(values: any) => {
                  formik.setFieldValue(
                    "inicialCapital",
                    values.floatValue
                  );
                }}
                fullWidth
                id="inicialCapital"
                name="inicialCapital"
                variant="outlined"
                customInput={TextField}
                size="small"
                margin="dense"
                label={"Capital inicial *"}
                error={
                  formik.touched.inicialCapital &&
                  Boolean(formik.errors.inicialCapital)
                }
                helperText={
                  formik.touched.inicialCapital && formik.errors.inicialCapital
                }
              />

              <TextField
                fullWidth
                id="cnpjName"
                name="cnpjName"
                label="Nome fantasia (opcional)"
                size="small"
                variant="outlined"
                margin="dense"
                value={formik.values.cnpjName}
                onChange={formik.handleChange}
                error={
                  formik.touched.cnpjName && Boolean(formik.errors.cnpjName)
                }
                helperText={formik.touched.cnpjName && formik.errors.cnpjName}
              />
              <span className="checkbox-title">
                Formas de atuação do CNPJ *
              </span>

              <FormControl
                error={
                  formik.touched.cnpjOptions &&
                  Boolean(formik.errors.cnpjOptions)
                }
              >
                {optionsList.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    control={
                      <Checkbox
                        checked={formik.values.cnpjOptions.includes(
                          // @ts-ignore
                          option.value
                        )}
                        onChange={(event) => {
                          const { checked, value } = event.target;
                          if (checked) {
                            formik.setFieldValue("cnpjOptions", [
                              ...formik.values.cnpjOptions,
                              value,
                            ]);
                          } else {
                            formik.setFieldValue(
                              "cnpjOptions",
                              formik.values.cnpjOptions.filter(
                                (optionValue) => optionValue !== value
                              )
                            );
                          }
                        }}
                        value={option.value}
                      />
                    }
                    label={option.label}
                  />
                ))}
                {formik.touched.cnpjOptions && formik.errors.cnpjOptions && (
                  <span className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-k4qjio-MuiFormHelperText-root">
                    {formik.errors.cnpjOptions}
                  </span>
                )}
              </FormControl>
            </div>

            <div className="adressData">
              <h3>Endereço</h3>

              <div className="slice">
                <TextField
                  fullWidth
                  id="cep"
                  name="cep"
                  label="CEP *"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  value={formik.values.cep}
                  onChange={(event) => {
                    handleChange(event);
                    if (event.target.value.length === 8) {
                      buscarCep(event.target.value);
                    }
                    if (event.target.value.length === 9) {
                      buscarCep(event.target.value);
                    }
                  }}
                  error={formik.touched.cep && Boolean(formik.errors.cep)}
                  helperText={formik.touched.cep && formik.errors.cep}
                />

                <TextField
                  fullWidth
                  id="street"
                  name="street"
                  label="Rua *"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  value={formik.values.street}
                  onChange={handleChange}
                  error={formik.touched.street && Boolean(formik.errors.street)}
                  helperText={formik.touched.street && formik.errors.street}
                />
              </div>

              <div className="slice">
                <TextField
                  fullWidth
                  id="number"
                  name="number"
                  label="Número *"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  value={formik.values.number}
                  onChange={handleChange}
                  error={formik.touched.number && Boolean(formik.errors.number)}
                  helperText={formik.touched.number && formik.errors.number}
                />

                <TextField
                  fullWidth
                  id="complement"
                  name="complement"
                  label="Complemento (opcional)"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  value={formik.values.complement}
                  onChange={handleChange}
                  error={
                    formik.touched.complement &&
                    Boolean(formik.errors.complement)
                  }
                  helperText={
                    formik.touched.complement && formik.errors.complement
                  }
                />
              </div>

              <div className="slice">
                <TextField
                  fullWidth
                  id="neighborhood"
                  name="neighborhood"
                  label="Bairro *"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  value={formik.values.neighborhood}
                  onChange={handleChange}
                  error={
                    formik.touched.neighborhood &&
                    Boolean(formik.errors.neighborhood)
                  }
                  helperText={
                    formik.touched.neighborhood && formik.errors.neighborhood
                  }
                />

                <TextField
                  fullWidth
                  id="city"
                  name="city"
                  label="Cidade *"
                  size="small"
                  variant="outlined"
                  margin="dense"
                  value={formik.values.city}
                  onChange={handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </div>

              <FormControl
                className="input-mask"
                size="small"
                fullWidth
                variant="outlined"
                margin="dense"
                error={formik.touched.state && Boolean(formik.errors.state)}
              >
                <InputLabel id="state-label">Estado *</InputLabel>
                <Select
                  labelId="state"
                  label="Estado *"
                  name="state"
                  id="state"
                  value={formik.values.state}
                  onChange={handleChange}
                  onBlur={formik.handleBlur}
                >
                  {brazilianStates.map((state, index) => (
                    <MenuItem key={index} value={state.value}>
                      {state.label}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.state && formik.errors.state && (
                  <span className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-k4qjio-MuiFormHelperText-root">
                    {formik.errors.state}
                  </span>
                )}
              </FormControl>
            </div>

            <div className="termsData">
              <label className="label-input">
                <input
                  type="checkbox"
                  name="terms"
                  className="input-checkbox"
                  checked={formik.values.terms}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="big">
                  <p>
                    Eu li e aceito os
                    <Link
                      className="link-term"
                      to={"/termos-de-uso"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      termos de uso
                    </Link>
                    e
                    <Link
                      className="link-term"
                      to={"/politica-de-privacidade"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      política de privacidade.
                    </Link>
                  </p>
                </div>
              </label>
              {formik.touched.terms && formik.errors.terms && (
                <span className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-k4qjio-MuiFormHelperText-root">
                  {formik.errors.terms}
                </span>
              )}

              <label className="label-input">
                <input
                  type="checkbox"
                  name="declaracaoDai"
                  className="input-checkbox"
                  checked={formik.values.declaracaoDai}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <div className="big">
                  <p>
                    Declaro que para obter os benefícios do CNPJ MEI, preciso
                    estar em dia com a cobrança mensal da DAS(boleto) emitido
                    pela Receita Federal. *
                  </p>
                </div>
              </label>
              {formik.touched.declaracaoDai && formik.errors.declaracaoDai && (
                <span className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeSmall MuiFormHelperText-contained css-k4qjio-MuiFormHelperText-root">
                  {formik.errors.declaracaoDai}
                </span>
              )}
            </div>

            <Button
              className="button-payment-choose"
              color="primary"
              variant="outlined"
              onClick={() => {
                const paymentChoose = document.getElementById("payment-choose");
                paymentChoose?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              escolher forma de pagamento
            </Button>
          </div>

          <div id="payment-choose">
            <p className="fill-data">Descrição do serviço</p>

            <ProductDescribe
              description={productInfo.description}
              amount={productInfo.amount}
            />

            <PaymentOptions
              itemValue={productInfo.amount}
              onChangeAccordion={handlePaymentType}
              onChangeCreditCard={handleChangeCreditCard}
            />

            <DataColectWarning />
            
            <Captcha
              onValidate={handleCaptchaValidate}
            />

            <Button
              color="primary"
              variant="contained"
              fullWidth
              size="large"
              type="submit"
              disabled={formik.isSubmitting || loading}
              className="button-payment"
            >
              {loading ? (
                <CircularProgress size={24} color="primary" />
              ) : (
                <span>Realizar Pagamento R$ 149,90</span>
              )}
            </Button>
          </div>
        </PaymentContainer>
        <SecurityMessage />
      </OpenPageContainer>
    </AppLayout>
  );
}
