import Link from "next/link";
import InfoColors from "../../components/InfoColors";
import InfoPrice from "../../components/InfoPrice";
import ListVersions from "../../components/ListVersions";
import SlideCar from "../../components/SlideCar";

import styles from "./automoveis.module.scss";

export default function Automoveis() {
  return (
    <main className={styles.automoveisContainer}>
      <Link href="/">
        <span className={styles.linkBack}>
          <img src="/arrow-left.svg" alt="" />
          Voltar
        </span>
      </Link>
      <div className={styles.wrapper}>
        <SlideCar />

        <section className={styles.detailsCar}>
          <ListVersions />
          <InfoColors />
          <InfoPrice />
        </section>
      </div>
    </main>
  );
}
