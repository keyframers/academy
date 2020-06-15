import styles from '../styles/mobileFrame.module.scss';

export const MobileFrame = ({ children }) => {
  return <main className={styles.app}>{children}</main>;
};
