import ContactForm from "./components/home/contactform";
import Homepage from "./components/home/homepage";
import HomeSection from "./components/home/homesection";
import WhyChooseUs from "./components/home/whychooseus";

export default function Home() {
  return (
    <>
      <Homepage/>
      <HomeSection/>
      <WhyChooseUs/>
      <ContactForm />
    </>
  );
}
