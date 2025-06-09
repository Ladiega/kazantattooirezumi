import Image from "next/image";
import Neva from "../../../public/img/nevaProfile.jpeg";
import Diego from "../../../public/img/diegoProfile.jpeg";
import Montan from "../../../public/img/montana.png";

import { FiInstagram } from "react-icons/fi";

import Link from "next/link";

export default function About() {
  return (
    <section className="py-20 ">
      <h1 className="text-5xl md:text-7xl font-serif mb-6">
        Kazan Tattoo Irezumi <br /> 火山 彫り物
      </h1>
      <p>
        Kazan Tattoo Irezumi es un estudio donde el tatuaje se toma en serio,
        pero también se vive con cercanía y respeto. Creemos en el oficio, en la
        historia detrás de cada estilo, y en el valor que tiene marcar la piel
        con intención. Aquí trabajan dos tatuadores con caminos largos, cada uno
        con una visión particular, pero unidos por una misma ética: hacer
        tatuajes con técnica, compromiso y honestidad.
      </p>

      <div className="flex flex-col mb-10 justify-center items-center">
        <div>
          <Image
            src={Neva}
            alt="Tatuador trabajando en un diseño"
            width={300}
            className="mt-10 rounded-lg shadow-lg mr-auto ml-auto max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]"
          />
        </div>
        <div className=" mt-3">
          <Link
            href="https://www.instagram.com/nevatattoos/"
            className="flex items-center"
            target="_blank"
          >
            <FiInstagram />
            @nevatattoos
          </Link>
        </div>
      </div>
      <p>
        Nelson Neva tiene más de 30 años de experiencia y es uno de los nombres
        fundamentales en la historia del tatuaje en Colombia. Su estilo es
        único, resultado de muchos años explorando distintas influencias: desde
        el tradicional americano hasta el japonés, el chicano y más. A lo largo
        de los años ha desarrollado una voz propia que se siente firme, clara y
        auténtica. Además, Nelson es reconocido por construir máquinas de bobina
        completamente artesanales, hechas a mano, con precisión y dedicación,
        sin procesos industriales. Sus herramientas son una extensión de su
        forma de entender el tatuaje: directa, cuidada y profundamente conectada
        al trabajo real.
      </p>

      <div className="flex flex-col mb-10 justify-center items-center">
        <div>
          <Image
            src={Diego}
            alt="Tatuador trabajando en un diseño"
            width={300}
            className="  mt-10  rounded-lg shadow-lg mr-auto ml-auto max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]"
          />
        </div>
        <div className=" mt-3">
          <Link
            href="https://www.instagram.com/ladiegatattoo/"
            className="flex items-center"
            target="_blank"
          >
            <FiInstagram />
            @ladiegatattoo
          </Link>
        </div>
      </div>

      <p>
        Diego Gutiérrez, conocido como La Diego, lleva más de 20 años tatuando.
        Su especialidad es el tatuaje japonés (irezumi), una tradición que
        aborda con respeto por su historia, simbología y estructura. Más allá de
        repetir fórmulas, busca que cada pieza tenga vida, cuerpo y coherencia.
        También explora otras estéticas más contemporáneas, siempre desde un
        lugar reflexivo, técnico y con una mirada crítica sobre el oficio.
      </p>
      <Image
        src={Montan}
        alt="Tatuador trabajando en un diseño"
        width={300}
        className="grayscale-90 mt-10 mb-10 rounded-lg shadow-lg mr-auto ml-auto max-w-[400px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]"
      />
      <p>
        En Kazan hacemos tanto tatuajes tradicionales como propuestas más
        actuales. No trabajamos en serie ni por moda: creemos en el proceso, en
        el diálogo con cada persona, y en construir piezas que tengan sentido a
        largo plazo. Si estás buscando un lugar donde tatuarte sea una
        experiencia pensada, cuidada y con profundidad, te invitamos a
        conocernos. Estás en buenas manos.
      </p>
    </section>
  );
}
