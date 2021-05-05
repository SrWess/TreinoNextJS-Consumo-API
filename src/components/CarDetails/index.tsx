import VersionsList from "../VersionsList";
import ColorsInfo from "../ColorsInfo";
import PriceInfo from "../PriceInfo";

import styles from "./styles.module.scss";

export default function CarDetails({ details }) {
  return (
    <div className={styles.containerDetails}>
      <VersionsList />
      <ColorsInfo />
      <PriceInfo />
    </div>
  );
}
