import styles from './styles.module.scss'

export default function ColorsInfo({ children }) {
  return (
    <div className={styles.colorsInfo}>
      <div className={styles.listColors}>
        {/* <p>Selecione uma versão para ver as cores disponíveis</p> */}
        { children }
      </div>
      <span className={styles.nameColorSelected}></span>
    </div>
  );
}
