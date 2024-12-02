import Homepage from "./components/homepage";
import HomeSection from "./components/homesection";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Homepage/>
      {/* <WhyChooseUs/> */}
      {/* <ContactForm /> */}
      <HomeSection/>
    </main>

  );
}
