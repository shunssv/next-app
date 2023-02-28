import Link from 'next/link';
import { Inter } from '@next/font/google';
import styles from './Header.module.css';

const inter = Inter({ subsets: ['latin'] });

const NAV_ITEMS = [
  {href: '/', label: 'Index'},
  {href: '/works', label: 'Works'},
  {href: '/new', label: 'New!'},
];

export function Header() {
  return (
    <header className={`${styles.header} ${inter.className}`}>
      {
        NAV_ITEMS.map((item) => {
      return <Link key={item.href} href={item.href}>{item.label}</Link>
        })
      }

      {/* <Link href="/">Index</Link>
      <Link href="/works">Works</Link> */}
    </header>
  );
}