import ContactForm from "./components/contactform";
import Footer from "./components/footer";
import Homepage from "./components/homepage";
import HomeSection from "./components/homesection";
import Navbar from "./components/navbar";
import WhyChooseUs from "./components/whychooseus";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Homepage/>
      <HomeSection/>
      <WhyChooseUs/>
      <ContactForm />
      <Footer/>
      
    </main>

  );
}
