import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
export const metadata = {
  title: "Bairesdev",
  description: "Vetted Nearshore Tech Talent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-[95%] md:w-[90%] m-auto pl-[20px] pr-[20px] min-h-[100vh] flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
