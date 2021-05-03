import styles from './styles.module.scss'

export default function SlideCar({ nameCar }) {
  return (
    <div className={styles.imagesCar}>
      <h1 className={styles.nameCar}>{nameCar}</h1>
      <p>Imagens do Carro</p>
    </div>
  );
}
