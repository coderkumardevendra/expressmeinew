import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";


const Captcha = ({ onValidate }: any) => {
  const captchaRef = useRef(null);

  const onChangeCaptcha = async () => {
    // @ts-expect-error
    onValidate(captchaRef.current.getValue());
  };

  return (
    <ReCAPTCHA
      sitekey={import.meta.env.VITE_CAPTCHA_KEY_SITE}
      ref={captchaRef}
      hl="pt-BR"
      onChange={onChangeCaptcha}
    />
  );
};

export default Captcha;