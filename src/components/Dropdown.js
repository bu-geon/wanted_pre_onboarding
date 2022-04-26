import { useEffect, useRef, useState } from 'react';
import Card from '../UI/Card';
import styles from './Dropdown.module.css';

const SYMBOL_LIST = [
  'All Symbols',
  'BTCUSD.PERP',
  'ETHUSD.PERP',
  'BCHUSD.PERP',
  'LTCUSD.PERP',
  'XRPUSD.PERP',
  '1000SHIBUSD.PERP',
];

const useCloseDropdown = (ref, setShowDropdown) => {
  useEffect(() => {
    const outsideDropdownClickHandler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log('fuck');
        console.log(e.target);
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', outsideDropdownClickHandler);
    return () => {
      document.removeEventListener('click', outsideDropdownClickHandler);
    };
  }, [ref, setShowDropdown]);
};

const Dropdown = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('All Symbols');
  const [userInput, setUserInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useCloseDropdown(dropdownRef, setShowDropdown);

  const selectedSymbolClickHandler = () => {
    setShowDropdown(true);
  };

  const userInputHandler = (e) => {
    setUserInput(e.target.value.toUpperCase());
  };

  const itemClickHandler = (e) => {
    setSelectedSymbol(SYMBOL_LIST[e.target.value]);
    setUserInput('');
    setShowDropdown(false);
  };

  return (
    <Card title='Dropdown'>
      <div className={styles.wrapper} ref={dropdownRef}>
        <div className={styles.selected} onClick={selectedSymbolClickHandler}>
          {selectedSymbol}
        </div>
        {showDropdown && (
          <section className={styles.search}>
            <input
              className={styles['user-input']}
              type='search'
              placeholder='Search Symbol'
              onChange={userInputHandler}
            />
            <ul className={styles['search-list']}>
              {SYMBOL_LIST.map((symbol, index) => {
                if (symbol.includes(userInput) || symbol === 'All Symbols') {
                  return (
                    <li
                      className={styles.searched}
                      value={index}
                      onClick={itemClickHandler}
                      key={symbol}
                    >
                      {symbol}
                    </li>
                  );
                }

                return null;
              })}
            </ul>
          </section>
        )}
      </div>
    </Card>
  );
};

export default Dropdown;
