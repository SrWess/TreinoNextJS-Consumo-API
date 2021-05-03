import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import InfoColors from "../../components/InfoColors";
import InfoPrice from "../../components/InfoPrice";
import ListVersions from "../../components/ListVersions";
import SlideCar from "../../components/SlideCar";

import styles from "./automoveis.module.scss";

type InfoCar = {
  model: string;
  marketing_name: string;
  machine_name: string;
  logo_dark: string;
  thumb: string;
};

type InfoCarProps = {
  carSelected: InfoCar;
}

type StaticPathsProps = {
  machine_name: string;
};

export default function Automoveis({ carSelected }: InfoCarProps) {
  return (
    <main className={styles.automoveisContainer}>
      <Link href="/">
        <span className={styles.linkBack}>
          <img src="/arrow-left.svg" alt="" />
          Voltar
        </span>
      </Link>
      <div className={styles.wrapper}>
        <SlideCar 
          nameCar={carSelected.marketing_name}
        />

        <section className={styles.detailsCar}>
          <ListVersions />
          <InfoColors />
          <InfoPrice />
        </section>
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://www.honda.com.br/automoveis/sites/hab/files/pps_estados.json"
  );

  const data = await res.json();

  const detailsCars = Object.entries(data).map((car) => car[1]);

  const paths = detailsCars.map((info: StaticPathsProps) => {
    return {
      params: {
        slug: info.machine_name,
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params;
  const res = await fetch(
    "https://www.honda.com.br/automoveis/sites/hab/files/pps_estados.json"
  );
  const data = await res.json();

  const detailsCars = Object.entries(data).map((info) => info[1]);

  const carSelected = detailsCars.find(
    (car: InfoCar) => car.machine_name === slug
  );

  return {
    props: {
      carSelected,
    },
    revalidate: 60 * 60 * 24,
  };
};
