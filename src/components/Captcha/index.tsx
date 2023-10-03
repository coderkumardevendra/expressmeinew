import { useRef, useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Captcha = ({ onValidate, isScriptLoaded, isScriptLoadSucceed }: any) => {
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const captchaRef = useRef<ReCAPTCHA | null>(null);

  const onChangeCaptcha = async () => {
    if (captchaRef.current) {
      onValidate(captchaRef.current.getValue());
    }
  };

  useEffect(() => {
    if (isScriptLoaded && isScriptLoadSucceed) {
      // ReCAPTCHA script has loaded successfully
      setRecaptchaLoaded(true);
    }
  }, [isScriptLoaded, isScriptLoadSucceed]);

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
