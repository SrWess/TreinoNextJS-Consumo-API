import { GetStaticProps } from "next";
import Head from "next/head";
import CardCarAvailable from "../components/CardCarAvailable";

import styles from "./home.module.scss";

type InfoCar = {
  model: string;
  marketing_name: string;
  machine_name: string;
  logo_dark: string;
  thumb: string;
};

type HondaProps = {
  carsAvailable: InfoCar[];
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
              <CardCarAvailable
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

  const detailsCars = Object.entries(data).map((car) => car[1]);

  const listCars = detailsCars.map((info: InfoCar) => {
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
