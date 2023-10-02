import {
  Accordion,
  AccordionSummary,
  FormControlLabel,
  Radio,
  Divider,
  AccordionDetails,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import InputMask from "react-input-mask";
import months from "@/utils/months";
import { CreditCard } from "@mui/icons-material";
import VisaCardIcon from "@/assets/visa.svg";
import MasterCardIcon from "@/assets/mastercard.svg";
import yearData from "@/utils/cardYears";
import { useState } from "react";
import generateInstallments from "@/utils/installments";
import { FaBarcode, FaCreditCard } from "react-icons/fa";
import { MdPix } from "react-icons/md";

type PaymentOptionsProps = {
  itemValue: number;
  onChangeAccordion: (type: string | false) => void;
  onChangeCreditCard: (creditCard: any) => void;
};

const PaymentOptions = ({
  itemValue,
  onChangeAccordion,
  onChangeCreditCard,
}: PaymentOptionsProps) => {
  const [cardType, setCardType] = useState("");

  const [creditCard, setCreditCard] = useState({
    number: "",
    name: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
    installments: 1,
  });

  const changeCardNumber = (event: any) => {
    const { value } = event.target;
    setCreditCard((prevState) => ({ ...prevState, number: value }));
    onChangeCreditCard({ ...creditCard, number: value });
    if (value.startsWith("4")) {
      setCardType("visa");
    } else if (value.startsWith("5")) {
      setCardType("mastercard");
    } else {
      setCardType("");
    }
  };

  const handleCreditCardChange = (event: any) => {
    const { name, value } = event.target;
    setCreditCard((prevState) => ({ ...prevState, [name]: value }));
    onChangeCreditCard({ ...creditCard, [name]: value });
  };

  const [expanded, setExpanded] = useState<string | false>("pix");

  const handleChangeAccordion =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      onChangeAccordion(isExpanded ? panel : false);
    };

  const installmentsObject = generateInstallments(itemValue);

  return (
    <>
      <Accordion
        expanded={expanded === "pix"}
        onChange={handleChangeAccordion("pix")}
        style={{
          backgroundColor: "var(--bg-blue)",
        }}
      >
        <AccordionSummary aria-controls="pix-content" id="pix-header">
          <FormControlLabel
            value="pix"
            label={
              <div className="label-payment">
                <MdPix />
                <span>Pix</span>
              </div>
            }
            labelPlacement="end"
            onChange={handleChangeAccordion("pix")}
            control={<Radio checked={expanded === "pix"} />}
          />
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <p className="description-payment">
            O QR Code para seu pagamento através de PIX será gerado após a
            confirmação da compra. Aponte seu celular para a tela para capturar
            o código ou copie e cole o código em seu aplicativo de pagamentos.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "creditCard"}
        onChange={handleChangeAccordion("creditCard")}
        style={{
          backgroundColor: "var(--bg-blue)",
        }}
      >
        <AccordionSummary
          aria-controls="creditCard-content"
          id="creditCard-header"
        >
          <FormControlLabel
            value="creditCard"
            label={
              <div className="label-payment">
                <FaCreditCard />
                <span>Cartão de Crédito</span>
              </div>
            }
            labelPlacement="end"
            onChange={handleChangeAccordion("creditCard")}
            control={<Radio checked={expanded === "creditCard"} />}
          />
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <InputMask
            className="input-mask"
            mask="9999 9999 9999 9999"
            onChange={changeCardNumber}
            onFocus={changeCardNumber}
            value={creditCard.number}
          >
            {
              // @ts-ignore
              (inputProps) => (
                <TextField
                  id="input-with-icon-textfield"
                  label="Número do Cartão"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {cardType === "visa" && (
                          <img src={VisaCardIcon} alt="ìcone cartão visa" />
                        )}
                        {cardType === "mastercard" && (
                          <img src={MasterCardIcon} alt="ìcone cartão visa" />
                        )}
                        {cardType === "" && <CreditCard />}
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  {...inputProps}
                />
              )
            }
          </InputMask>

          <TextField
            className="input-mask"
            label="Nome do Titular"
            fullWidth
            variant="outlined"
            name="name"
            value={creditCard.name}
            onChange={handleCreditCardChange}
          />
          <div className="slice">
            <FormControl className="input-mask" fullWidth variant="outlined">
              <InputLabel id="rgEmission-label">Mês de validade *</InputLabel>
              <Select
                labelId="cardMonthValidity-label"
                label="Mês de validade *"
                id="expirationMonth"
                name="expirationMonth"
                value={creditCard.expirationMonth}
                onChange={handleCreditCardChange}
                onBlur={handleCreditCardChange}
              >
                {months.map((month) => (
                  <MenuItem key={month.value} value={month.value}>
                    {month.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className="input-mask" fullWidth variant="outlined">
              <InputLabel id="rgEmission-label">Ano de validade *</InputLabel>
              <Select
                labelId="cardYearValidity-label"
                label="Ano de validade *"
                id="expirationYear"
                name="expirationYear"
                value={creditCard.expirationYear}
                onChange={handleCreditCardChange}
                onBlur={handleCreditCardChange}
              >
                {yearData.map((year) => (
                  <MenuItem key={year.value} value={year.value}>
                    {year.year}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="slice">
            <TextField
              className="input-mask"
              label="CVV"
              variant="outlined"
              name="cvv"
              value={creditCard.cvv}
              onChange={handleCreditCardChange}
            />

            <FormControl className="input-mask" fullWidth variant="outlined">
              <InputLabel id="rgEmission-label">Parcelas</InputLabel>
              <Select
                labelId="cardInstallments-label"
                label="Parcelas"
                id="installments"
                name="installments"
                value={creditCard.installments}
                onChange={handleCreditCardChange}
                onBlur={handleCreditCardChange}
              >
                {installmentsObject.map((installment) => (
                  <MenuItem key={installment.key} value={installment.key}>
                    {installment.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "boleto"}
        onChange={handleChangeAccordion("boleto")}
        style={{
          backgroundColor: "var(--bg-blue)",
        }}
      >
        <AccordionSummary aria-controls="boleto-content" id="boleto-header">
          <FormControlLabel
            value="boleto"
            label={
              <div className="label-payment">
                <FaBarcode />
                <span>Boleto Bancário</span>
              </div>
            }
            labelPlacement="end"
            onChange={handleChangeAccordion("boleto")}
            control={
              <Radio id="boleto-radio" checked={expanded === "boleto"} />
            }
            htmlFor="boleto-radio"
          />
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <p className="description-payment">
            O Boleto bancário será exibido após a confirmação da compra e poderá
            ser pago em qualquer agência bancária, pelo seu smartphone ou
            computador através de serviços digitais de bancos.
          </p>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PaymentOptions;
