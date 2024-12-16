import Image from "next/image";
import Hero from "./Hero";
import Header from "./Header";
import Footer from "./Footer";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Footer />
    </div>
  );
}
