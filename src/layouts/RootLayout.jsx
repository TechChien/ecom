import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { GoTop } from "../components/GoTop";
import { SearchBar } from "../components/SearchBar/SearchBar";
import ScrollToTop from "../components/ScrollTop";

export default function RootLayout() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <SearchBar />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
      <GoTop />
    </div>
  );
}
