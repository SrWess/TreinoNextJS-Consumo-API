import styles from './styles.module.scss'

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div>
        <img src="/logo.svg" alt=""/>
      </div>

      <div className={styles.location}>
        <p>
          Você está em
          <div className={styles.locationPicked}>
            <span>Escolha um Estado</span>
            <img src="/edit.svg" alt="Botão para editar Estado"/>
          </div>
        </p>
      </div>
    </header>
  )
}