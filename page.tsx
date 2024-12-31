import Navbar from "@/app/Components/Navbar";
import Hero from "@/app/Components/Hero";
import Fleet from "@/app/Components/Fleet";
import Reason from "@/app/Components/reason";
import Footer from "@/app/Components/Footer";
import Cta from "@/app/Components/cta";

export default function Home() {
  return (
    <div>
        <section className="bg-gradient-to-r from-white from-20% via-red-100 via-40% to-white">
            <Navbar/>
            <Hero/>
        </section>
        <Fleet/>
        <Reason/>
        <section className="bg-gray-50">
            <Cta/>
            <Footer/>
        </section>
    </div>
  );
}
