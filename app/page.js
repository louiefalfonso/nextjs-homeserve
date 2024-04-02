import Image from "next/image";
import styles from "./page.module.css";
import HeroArea from "@/components/HeroArea";
import AboutArea from "@/components/AboutArea";

export default function Home() {
  return (
    <>
    <HeroArea/> 
    <AboutArea/>
    </>
  );
}
