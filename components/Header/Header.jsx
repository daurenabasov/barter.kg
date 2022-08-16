import React from 'react';
// import next 
import Link from 'next/link';

// import components 
import Category from './DropdownCategory/Category'
import Other from './DropdownOther/Other'

// import styles 
import s from './Header.module.css'


const Header = () => {
    return (
        <div>
            <header className={s.header}>
                <nav>
                    <ul className={s.panel__nav}>
                        <li><Category /> </li>
                        <li><Other /> </li>
                    </ul >
                </nav>

                <div className={s.header__logo}>
                    <Link href=""><a>Abba</a></Link>
                </div>

                <div className={s.panel__telephone}>
                    <a href="+996705998877">+996705998877</a>
                    <a href="+996705768584">+996705768584</a>
                </div>

                <div className={s.registration}>
                    <Link href="/Login">
                        <a>
                            <button className={s.btn__login}>
                                <p className={s.login__text}>Войти</p>
                            </button>
                        </a>
                    </Link>
                </div>


            </header>
        </div>
    );
};

export default Header;