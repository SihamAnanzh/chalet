import Head from "next/head";
import Filter from "../components/filter/Filter";
import Footer from "../components/Footer/Footer";
import MainSecion from "../components/mainSecion/MainSecion";
export default function Home() {
  return (
    <div className="">
      <MainSecion />
      <Filter />
      <Footer />
    </div>
  );
}
