import { useState } from 'react';
import Card from '../UI/Card';
import styles from './Toggle.module.css';

const Toggle = () => {
  const [isBasic, setIsBasic] = useState(true);

  const clickHandler = () => {
    setIsBasic((prev) => !prev);
  };

  return (
    <Card title='Toggle'>
      <div className={styles.wrapper} onClick={clickHandler}>
        <input
          className={styles['toggle-switch']}
          type='radio'
          id='basic'
          name='option'
          value='BASIC'
          checked={isBasic}
          readOnly
        />
        <label htmlFor='BASIC'>기본</label>
        <input
          className=''
          type='radio'
          id='detail'
          name='option'
          value='DETAIL'
          checked={!isBasic}
          readOnly
        />
        <label htmlFor='DETAIL'>상세</label>
        <div
          className={styles['toggle-on']}
          style={{
            transform: `translateX(${isBasic ? '0' : '100%'})`,
            transition: 'transform 0.5s',
          }}
        />
      </div>
    </Card>
  );
};

export default Toggle;
