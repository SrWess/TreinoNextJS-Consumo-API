import styles from './styles.module.scss'

export default function SlideCar({ carName }) {
  return (
    <div className={styles.imagesCar}>
      <h1 className={styles.carName}>{carName}</h1>
      <p>Imagens do Carro</p>
    </div>
  );
}
