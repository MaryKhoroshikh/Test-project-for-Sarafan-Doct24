import React from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button/Button';

const Header = () => {
    const location = useLocation();
    return (
        <header className={styles.header}>
            <nav className={styles.navMenu}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link to={'/products'}>
                            <Button
                                className={`${styles.navButton} ${location.pathname === '/products' ? styles.active : ''}`}
                                aria-label='перейти на страницу карточек'
                            >
                                Карточки
                            </Button>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to={'/create-new-card'}>
                            <Button
                                className={`${styles.navButton} ${location.pathname === '/create-new-card' ? styles.active : ''}`}
                                aria-label='перейти на страницу создания новой карточки'
                            >
                                Создать новую карточку
                            </Button>
                        </Link>
                    </li>
                </ul>
            </nav>

            <Link to={'https://salfa.ru/'} className={styles.logoLink}>
                <div className={styles.logo}>
                    <img
                        src='https://yaart-web-alice-images.s3.yandex.net/79115b65c6d211f0b5846676413dfd84:2'
                        alt='Логотип'
                        width='80'
                    ></img>
                </div>
            </Link>
        </header>
    );
};

export default Header;
