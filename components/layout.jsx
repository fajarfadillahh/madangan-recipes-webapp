import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Layout({ children, className }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-[1440px] bg-white">
        <div className={`container my-24 min-h-screen ${className}`}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
