import styles from './styles.module.scss'

export default function CardCarAvailable({ name, thumb, logo }) {
  return (
    <div className={styles.cardContainer}>
      <a href="#" className={styles.carAvailable}>
        <img src={thumb} alt="" className={styles.previewCar}/>
        <img src={logo} alt="" className={styles.logoCar}/>

      </a>
    </div>
  )
}