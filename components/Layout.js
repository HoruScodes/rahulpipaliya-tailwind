import { Header } from "./Header";
import { Footer } from "./Footer";
import Gradientbg from "./Gradientbg";

export const Layout = ({ children }) => {
  return (
    <div className="bg-[#f6f4f4] antialiased selection:bg-sHover selection:text-white flex flex-col justify-between font-jakarta">
      <Gradientbg />
      <Header />
      <main className="max-w-4xl mx-auto mt-16 antialiased flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
