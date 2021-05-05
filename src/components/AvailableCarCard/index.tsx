import Link from "next/link";

import styles from "./styles.module.scss";

export default function AvailableCarCard({ name, thumb, logo }) {
  return (
    <Link href={`/automoveis/${name}`}>
      <div className={styles.cardContainer}>
        <div className={styles.availableCar}>
          <img src={thumb} alt="" className={styles.carPreview} />
          <img src={logo} alt="" className={styles.carLogo} />
        </div>
      </div>
    </Link>
  );
}
