import VersionsList from "../VersionsList";
import ColorsInfo from "../ColorsInfo";
import PriceInfo from "../PriceInfo";

import styles from "./styles.module.scss";

export default function CarDetails({ details }) {
  return (
    <div className={styles.containerDetails}>
      <VersionsList>
        <ul className={styles.versionsList}>
          {details.map((info) => {
            return (
              <li>
                <a href="#">{info.version}</a>
              </li>
            );
          })}
        </ul>
      </VersionsList>
      <ColorsInfo />
      <PriceInfo />
    </div>
  );
}
