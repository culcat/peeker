import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

interface HeaderProps {
    // дополнительные props, если нужны
}

const Header: React.FC<HeaderProps> = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="header-logo">
                    PEEKER.ME
                </Link>
                <div className="header-search">
                    <input
                        type="text"
                        placeholder="Введите название товара"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
                <nav className="header-nav">
                    <Link to="/about">О нас</Link>
                    <Link to="/contacts">Контакты</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
