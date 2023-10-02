import ScrollToTop from "@/helpers/scrollToTop";
import AlterPage from "@/pages/Alter";
import CancelPage from "@/pages/Cancel";
import ConsultPage from "@/pages/Consult";
import DeclarePage from "@/pages/Declare";
import HomePage from "@/pages/Home";
import InstallmentPage from "@/pages/Installment";
import OpenPage from "@/pages/Open";
import PaymentDetails from "@/pages/PaymentDetails";
import PrivacyPolicyPage from "@/pages/PrivacyPolicy";
import UseTermsPage from "@/pages/UseTerms";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/abrir-mei" element={<OpenPage />} />
        <Route path="/cancelar-mei" element={<CancelPage />} />
        <Route path="/alterar-mei" element={<AlterPage />} />
        <Route path="/parcelar-mei" element={<InstallmentPage />} />
        <Route path="/declarar-mei" element={<DeclarePage />} />
        <Route path="/consultoria" element={<ConsultPage />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
        <Route path="/termos-de-uso" element={<UseTermsPage />} />
        <Route path="/compra/:id" element={<PaymentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
