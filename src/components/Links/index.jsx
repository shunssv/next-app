import { Inter } from '@next/font/google';
import styles from './Links.module.css';

const inter = Inter({ subsets: ['latin'] });

export function Links({ items, handleReduce }) {
  return (
    <div className={styles.grid}>
      <button onClick={handleReduce}>delete</button>
      {items.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {item.title} <span>-&gt;</span>
            </h2>
            <p className={inter.className}>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
