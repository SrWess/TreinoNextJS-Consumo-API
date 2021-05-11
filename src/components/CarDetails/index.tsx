import { useState } from "react";

import VersionsList from "../VersionsList";
import ColorsInfo from "../ColorsInfo";
import PriceInfo from "../PriceInfo";

import styles from "./styles.module.scss";

export default function CarDetails({ details }) {
  const [selectedVersion, setSelectedVersion] = useState("");

  const versionInfoSelected = details.filter(info => info.version === selectedVersion)  

  const handleSelectedVersion = (e) => {
    e.preventDefault();

    const { textContent } = e.currentTarget;

    setSelectedVersion(textContent);
  };

  return (
    <div className={styles.containerDetails}>
      <VersionsList>
        <ul className={styles.versionsList}>
          {details.map((info) => {
            return (
              <li key={info.version.toLowerCase()}>
                <a onClick={handleSelectedVersion}>{info.version}</a>
              </li>
            );
          })}
        </ul>
      </VersionsList>

      <ColorsInfo>
        <p>Colors Info</p>
      </ColorsInfo>

      <PriceInfo />
    </div>
  );
}