import Link from "next/link";

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
        <section className={styles.imagesCar}>
          <h1 className={styles.nameCar}>Nome do carro</h1>
          <p>Imagens do Carro</p>
        </section>

        <section className={styles.detailsCar}>
          <div className={styles.listCarVersions}>
            <p>Lista versões disponíveis</p>
          </div>

          <div className={styles.infoColors}>
            <div className={styles.listColors}>
              <p>Selecione uma versão para ver as cores disponíveis</p>
            </div>
            <span className={styles.nameColorSelected}></span>
          </div>

          <div className={styles.infoPrice}>
            <span>Selecione uma versão para visualizar o valor</span>
          </div>
        </section>
      </div>
    </main>
  );
}
