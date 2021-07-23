import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto mt-16 antialiased">{children}</main>
      <Footer />
    </>
  );
};
