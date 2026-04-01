import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Contact } from "@/pages/Contact";
import { Home } from "@/pages/Home";
import { Projects } from "@/pages/Projects";
import { ServicesPage } from "@/pages/ServicesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
