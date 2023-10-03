import { useRef, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = ({ onValidate }: any) => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const captchaRef = useRef(null);

  const onChangeCaptcha = async () => {
    // @ts-expect-error
    onValidate(captchaRef.current.getValue());
  };

  useEffect(() => {
    const loadReCAPTCHA = () => {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setRecaptchaLoaded(true);
      };
      document.head.appendChild(script);
    };

    loadReCAPTCHA();
  }, []);

  return (
    <>
    {recaptchaLoaded && (
        <ReCAPTCHA
          ref={captchaRef}
          sitekey={import.meta.env.VITE_CAPTCHA_KEY_SITE}
          hl="pt-BR"
          onChange={onChangeCaptcha}
        />
      )}
    </>
  );
};

export default Captcha;
