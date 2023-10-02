import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import WhatsAppCall from "@/components/WhatsAppCall";
import { AppLayoutContainer } from "./styles";

type Props = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <WhatsAppCall />
      <div style={{ background: "var(--white)" }}>
        <AppLayoutContainer className="container" data-aos="fade-up">
          {children}
        </AppLayoutContainer>
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;
