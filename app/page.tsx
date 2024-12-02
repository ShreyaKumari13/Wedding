import Image from "next/image";
import Navbar from './components/navbar';
import ContactForm from "./components/contactform";
import WhyChooseUs from "./components/whychooseus";
import Homepage from "./components/homepage";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Homepage/>
      {/* <WhyChooseUs/> */}
      {/* <ContactForm /> */}
    </main>

  );
}
