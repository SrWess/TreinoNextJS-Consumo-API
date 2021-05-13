import { useState } from "react";

import VersionsList from "../VersionsList";
import PriceInfo from "../PriceInfo";
import PreviewColor from "../PreviewColor";

import styles from "./styles.module.scss";

export default function CarDetails({ details }) {
  const [selectedVersion, setSelectedVersion] = useState("");

  const versionInfoSelected = details.filter(
    ({ version }) => version === selectedVersion
  );

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
                <a href="#" onClick={handleSelectedVersion} className={selectedVersion === info.version ? styles.linkActive : ''}>{info.version}</a>
              </li>
            );
          })}
        </ul>
      </VersionsList>

      <div className={styles.colorsInfo}>
        {versionInfoSelected.length ? (
          versionInfoSelected.map(({ colors }) => {
            return colors
              .map(({ name, machine_name, hex }) => {
                return (
                  <PreviewColor key={machine_name} name={name} hex={hex} />
                );
              })
              .sort(() => 0.5 - Math.random());
          })
        ) : (
          <p>Selecione uma versão para ver as cores disponíveis</p>
        )}
      </div>

      <PriceInfo />
    </div>
  );
}
