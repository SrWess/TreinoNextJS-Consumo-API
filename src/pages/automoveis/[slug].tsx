import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import DetailsCar from "../../components/DetailsCar";

import SlideCar from "../../components/SlideCar";

import styles from "./automoveis.module.scss";

type InfoCar = {
  model: string;
  machine_name: string;
  marketing_name: string;
  logo: string;
  thumb: string;
  versions: Array<[]>;
};

type InfoCarProps = {
  detailsCars: Array<InfoCar>;
};

type StaticPathsProps = {
  machine_name: string;
};

export default function Automoveis({ detailsCars }: InfoCarProps) {
  return (
    <main className={styles.automoveisContainer}>
      <Link href="/">
        <span className={styles.linkBack}>
          <img src="/arrow-left.svg" alt="" />
          Voltar
        </span>
      </Link>
      {detailsCars.map((car) => {
        return (
          <div key={car.machine_name} className={styles.wrapper}>
            <SlideCar nameCar={car.marketing_name} />
   
            <DetailsCar/>
          </div>
        );
      })}
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

  const detailsCars = Object.keys(data)
    .map((info) => data[info])
    .filter((carSelected) => carSelected.machine_name === slug)
    .map((car) => {
      return {
        model: car.model,
        machine_name: car.machine_name,
        marketing_name: car.marketing_name,
        logo: car.logo_dark,
        thumb: car.thumb,
        versions: car.version_features,
      };
    });

  return {
    props: {
      detailsCars,
    },
    revalidate: 60 * 60 * 24,
  };
};
