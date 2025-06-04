import { Hero } from "@/components/Hero";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Objetivo } from "@/components/Objetivo";
import { ComoLogramos } from "@/components/ComoLogramos";
import { Contacto } from "@/components/Contacto";
export default function Home() {
  return (
    <>
      <Hero />
      
      <PracticeAreas />
      <Objetivo />
        
      <ComoLogramos/>
      <Contacto/> 
    </>
  );
}


