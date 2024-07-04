import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import LandingPage from "./pages/LandingPage";
import ContactUsPage from "./pages/ContactUsPage";
import ArticlesPage from "./pages/ArticlesPage";
import SchoolsPage from "./pages/SchoolsPage";
import AboutUsPage from "./pages/AboutUsPage";
import Footer from "./components/footer/Footer";
import AddSchoolsPage from "./pages/AddSchoolsPage";
import WriteArticlesPage from "./pages/writeArticlesPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/schools" element={<SchoolsPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles-write" element={<WriteArticlesPage/>} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/schools-register" element={<AddSchoolsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
