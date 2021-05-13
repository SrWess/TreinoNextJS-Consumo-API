import ReactTooltip from "react-tooltip";

import styles from "./styles.module.scss";

export default function PreviewColor({ name, hex }) {
  return (
    <div className={styles.containerPreview}>
      <a
        data-tip={name}
        className={styles.colorHex}
        style={{ background: `${hex}` }}
      />
      <ReactTooltip place="bottom" effect="solid" />
    </div>
  );
}
