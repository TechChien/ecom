import { Fragment } from "react";

import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { GoTop } from "../components/GoTop";
import { SearchBar } from "../components/SearchBar/SearchBar";
import ScrollToTop from "../components/ScrollTop";

import { BottomFixedMenu } from "../components/Header/Menu/BottomFixedMenu";

export default function RootLayout() {
  return (
    <Fragment>
      <ScrollToTop />
      <div className="container mx-auto">
        <Header />
      </div>
      <SearchBar />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
      <GoTop />
      <BottomFixedMenu />
    </Fragment>
  );
}
