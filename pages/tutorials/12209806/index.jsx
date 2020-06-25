import styles from './styles.module.scss';

export default function Blurr() {
  return (
    <main className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerNav}>
          <div className={styles.navItem}>Libraries</div>
          <div className={styles.navItem}>Resources</div>
          <div className={styles.navItem}>Overview</div>
          <div className={styles.navItem}>Learn</div>
        </div>
        <div className={styles.headerButtons}>second section</div>
      </header>
      <section className={styles.content}>
        <article className={styles.article}>
          <h2 className={styles.articleTitle}>Spacing</h2>
          <p className={styles.articleSummary}>
            Use our most popular design and development resources to jumpstart
            your latest project
          </p>
          <button className={styles.articleExpand}>+</button>
        </article>

        <article className={styles.article}>
          <h2 className={styles.articleTitle}>Spacing</h2>
          <p className={styles.articleSummary}>
            Use our most popular design and development resources to jumpstart
            your latest project
          </p>
          <button className={styles.articleExpand}>+</button>
        </article>

        <article className={styles.article}>
          <h2 className={styles.articleTitle}>Spacing</h2>
          <p className={styles.articleSummary}>
            Use our most popular design and development resources to jumpstart
            your latest project
          </p>
          <button className={styles.articleExpand}>+</button>
        </article>
      </section>
    </main>
  );
}
