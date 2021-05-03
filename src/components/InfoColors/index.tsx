import styles from './styles.module.scss'

export default function InfoColors() {
  return (
    <div className={styles.infoColors}>
      <div className={styles.listColors}>
        <p>Selecione uma versão para ver as cores disponíveis</p>
      </div>
      <span className={styles.nameColorSelected}></span>
    </div>
  );
}
