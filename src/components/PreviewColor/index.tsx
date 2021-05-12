import styles from "./styles.module.scss";

export default function PreviewColor({ name, hex }) {
  return (
    <div className={styles.containerPreview}>
      <div className={styles.colorHex} style={{ background: `${hex}` }} />
    </div>
  );
}
