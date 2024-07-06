import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./Inicio.module.css";
import Footer from "../../components/Footer";
import logo from "./Logo.png";
import GlobalContextProvider from "../../context/index";

const BasePage = () => {
  return (
    <main className={styles.container}>
      <Header logo={logo} />
      <GlobalContextProvider>
        <Outlet />
      </GlobalContextProvider>
      <Footer logo={logo} />
    </main>
  );
};

export default BasePage;