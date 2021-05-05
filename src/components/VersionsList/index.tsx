import styles from './styles.module.scss'

export default function VersionsList({ children }) {
  return (
    <div className={styles.versionsListContainer}>
      { children }
    </div>
  );
}
