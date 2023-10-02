import AppLayout from "@/layouts/App";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { OpenPageContainer, PaymentContainer } from "../Open/styles";
import PaymentOptions from "@/components/PaymentOptions";
import SecurityMessage from "@/components/SecurityMessage";
import showErrorDialog from "@/utils/Alerts/ErrorAlert";
import { brazilianStates } from "@/utils/BrasilianStates";
import sendPayment from "@/utils/SendPayment";
import validarCNPJ from "@/utils/validateCnpj";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import InputMask from "react-input-mask";
import ProductDescribe from "@/components/ProductDescribe";
import DataColectWarning from "@/components/DataColectWarning";
import Captcha from "@/components/Captcha";

export default function InstallmentPage() {
  const [loading, setLoading] = useState(false);
  const [captchaRef, setCaptchaRef] = useState<any>(null);
  const handleCaptchaValidate = (value: boolean) => {
    setCaptchaRef(value);
  };

  const productInfo = {
    quantity: 1,
    name: "Parcelar MEI",
    amount: 7990,
    description: "Parcelamento de MEI",
    code: "159",
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    formik.setFieldValue(name, value);
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

  const handleCnpjChange = async (cnpj: string) => {
    formik.setFieldValue("cnpj", cnpj);
    const isValid = validarCNPJ(cnpj);
    if (!isValid) {
      formik.setErrors({ cnpj: "CNPJ inválido" });
      await formik.setTouched({ cnpj: true });
      return;
    } else {
      formik.setErrors({ cnpj: "" });
      await formik.setTouched({ cnpj: false });
    }
  };

  const validationSchema = yup.object({
    // cnpj to cancel
    cnpj: yup
      .string()
      .required("Campo obrigatório")
      .test("cnpj", "CNPJ inválido", (value) => {
        return validarCNPJ(value);
      }),
    // personal data
    name: yup.string().required("Campo obrigatório"),
    lastname: yup.string().required("Campo obrigatório"),
    motherName: yup.string().required("Campo obrigatório"),
    cpf: yup.string().required("Campo obrigatório"),
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
    mainActivity: yup.string(),
    secondActivity: yup.string(),
    inicialCapital: yup.string(),
    cnpjName: yup.string(),
    cnpjOptions: yup.array(),
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
      // cnpj to cancel
      cnpj: "",
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
        captchaRef
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
        <title>Express Mei | Parcelamento de MEI</title>
        <meta
          name="description"
          content="Express MEI - Facilitando sua vida com confiança, praticidade e velocidade ! Faça seu parcelamento de MEI agora mesmo de forma facilitada."
        />
      </Helmet>

      <OpenPageContainer>
        <div className="call">
          <h1 data-aos="fade-up">
            <span>Parcelamento</span> de MEI
          </h1>
          <p data-aos="fade-up">
            Seu recibo de parcelamento chegará no e-mail informado em até 24 horas úteis após a
            confirmação do pagamento.
          </p>
        </div>
      </OpenPageContainer>

      <PaymentContainer onSubmit={onSubmit}>
        <div>
          <p data-aos="fade-up" className="fill-data">
            Preencha os dados abaixo para realizar sua compra
          </p>

          <div className="cnpjData">
            <h3>CNPJ a ser cancelado</h3>
            <InputMask
              className="input-mask"
              mask="99.999.999/9999-99"
              value={formik.values.cnpj}
              onChange={(e) => handleCnpjChange(e.target.value)}
              onBlur={formik.handleBlur("cnpj")}
            >
              {
                // @ts-ignore
                (inputProps) => (
                  <TextField
                    label="CNPJ *"
                    variant="outlined"
                    margin="dense"
                    name="cnpj"
                    fullWidth
                    size="small"
                    error={formik.touched.cnpj && Boolean(formik.errors.cnpj)}
                    helperText={formik.touched.cnpj && formik.errors.cnpj}
                    {...inputProps}
                  />
                )
              }
            </InputMask>
          </div>
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
              helperText={formik.touched.motherName && formik.errors.motherName}
            />
            <InputMask
              className="input-mask"
              mask="999.999.999-99"
              value={formik.values.cpf}
              onChange={formik.handleChange("cpf")}
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
              error={formik.touched.rgNumber && Boolean(formik.errors.rgNumber)}
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
                      formik.touched.bornDate && Boolean(formik.errors.bornDate)
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
                  formik.touched.complement && Boolean(formik.errors.complement)
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
                checked={formik.values.terms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div>
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
                checked={formik.values.declaracaoDai}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <div>
                <p>
                  Declaro que para obter os benefícios do CNPJ MEI, preciso
                  estar em dia com a cobrança mensal da DAS(boleto) emitido pela
                  Receita Federal. *
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
              <span>Realizar Pagamento R$ 79,90</span>
            )}
          </Button>
        </div>
      </PaymentContainer>

      <SecurityMessage />
    </AppLayout>
  );
}
