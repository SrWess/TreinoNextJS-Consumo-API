import Link from "next/link";

import styles from "./styles.module.scss";

export default function CardCarAvailable({ name, thumb, logo }) {
  return (
    <Link href={`/automoveis/${name}`}>
      <div className={styles.cardContainer}>
        <div className={styles.carAvailable}>
          <img src={thumb} alt="" className={styles.previewCar} />
          <img src={logo} alt="" className={styles.logoCar} />
        </div>
      </div>
    </Link>
  );
}
