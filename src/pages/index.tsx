import { GetStaticProps } from "next";
import Head from "next/head";
import AvailableCarCard from "../components/AvailableCarCard";

import styles from "./home.module.scss";

type CarInfo = {
  model: string;
  marketing_name: string;
  machine_name: string;
  logo_dark: string;
  thumb: string;
};

type HondaProps = {
  carsAvailable: CarInfo[];
};

export default function Home({ carsAvailable }: HondaProps) {
  return (
    <div className={styles.homePage}>
      <Head>
        <title>Home | Honda</title>
      </Head>

      <section className={styles.listCarsContainer}>
        <h2>Carros Disponíveis</h2>
        <div className={styles.listCars}>
          {carsAvailable.map((car) => {
            return (
              <AvailableCarCard
                key={car.marketing_name}
                name={car.machine_name}
                logo={car.logo_dark}
                thumb={car.thumb}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://www.honda.com.br/automoveis/sites/hab/files/pps_estados.json"
  );
  const data = await res.json();

  const carDetails = Object.entries(data).map((car) => car[1]);

  const listCars = carDetails.map((info: CarInfo) => {
    return {
      model: info.model,
      marketing_name: info.marketing_name,
      machine_name: info.machine_name,
      logo_dark: info.logo_dark,
      thumb: info.thumb,
    };
  });

  const carsAvailable = listCars.filter((car) => car.model !== "Civic Si");

  return {
    props: {
      carsAvailable,
    },
  };
};
