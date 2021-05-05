import InfoColors from "../InfoColors";
import InfoPrice from "../InfoPrice";
import ListVersions from "../ListVersions";

import styles from "./styles.module.scss";

export default function DetailsCar() {
  return (
    <div className={styles.containerDetails}>
      <ListVersions />
      <InfoColors />
      <InfoPrice />
    </div>
  );
}
