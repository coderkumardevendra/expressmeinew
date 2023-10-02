import { Button, TextField } from "@mui/material";
import React from "react";
import { CnpjContainer } from "./styles";
import InputMask from "react-input-mask";

export default function CnpjConfirm({ checkCnpj, helperText }: any) {
  const [cnpj, setCnpj] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCnpj(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(cnpj);
    if (cnpj.replace("_", "").trim().length === 18) {
      localStorage.setItem("cnpj-user", cnpj);
      checkCnpj(true);
    } else {
      setError(true);
      checkCnpj(false);
    }
  };

  return (
    <CnpjContainer>
      <InputMask
        mask="99.999.999/9999-99"
        disabled={false}
        id="cnpj"
        variant="outlined"
        type="text"
        fullWidth
        value={cnpj}
        helperText={helperText}
        onChange={handleChange}
        onKeyUp={(e) => {
          setError(false);
        }}
        error={error}
      >
        {
          // @ts-ignore
          () => (
            <TextField
              label="CNPJ"
              fullWidth
              helperText={
                error
                  ? "Por favor, verifique o CNPJ digitado, e tente novamente !"
                  : helperText
              }
              error={error}
              onKeyUp={(e) => {
                setError(false);
              }}
            />
          )
        }
      </InputMask>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Confirmar
      </Button>
    </CnpjContainer>
  );
}
