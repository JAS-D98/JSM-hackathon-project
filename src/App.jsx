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
import ArticlesPageWrite from "./pages/ArticlesPageWrite";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";
import SchoolSection from "./pages/schoolsection/SchoolSection";
import ProtectedRoutes from "./protectedroutes/ProtectedRoutes";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/schools-register" element={<AddSchoolsPage />} />
            <Route path="/articles-write" element={<ArticlesPageWrite />} />
          </Route>
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/schools" element={<SchoolsPage />} />
          <Route path="/articles" element={ <ArticlesPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/schools-section/:schoolId"
            element={<SchoolSection />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
