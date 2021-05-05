import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Head from 'next/head'

import CarDetails from "../../components/CarDetails";
import SlideCar from "../../components/SlideCar";

import styles from "./automoveis.module.scss";

type CarInfo = {
  model: string;
  machine_name: string;
  marketing_name: string;
  logo: string;
  thumb: string;
  versions: Array<[]>;
};

type CarInfoProps = {
  carDetails: Array<CarInfo>;
};

type StaticPathsProps = {
  machine_name: string;
};

export default function Automoveis({ carDetails }: CarInfoProps) {
  return (
    <main className={styles.automoveisContainer}>

      <Head>
        <title>Honda Automóveis</title>
      </Head>

      <Link href="/">
        <span className={styles.linkBack}>
          <img src="/arrow-left.svg" alt="" />
          Voltar
        </span>
      </Link>
      {carDetails.map((car) => {
        return (
          <div key={car.machine_name} className={styles.wrapper}>
            <SlideCar carName={car.marketing_name} />
   
            <CarDetails details={car.versions}/>
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

  const carDetails = Object.entries(data).map((car) => car[1]);

  const paths = carDetails.map((info: StaticPathsProps) => {
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

  const carDetails = Object.keys(data)
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
      carDetails,
    },
    revalidate: 60 * 60 * 24,
  };
};
