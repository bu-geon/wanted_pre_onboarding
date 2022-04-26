import { useState } from 'react';
import Card from '../UI/Card';
import styles from './Toggle.module.css';

const OPTION_NAME = { BASIC: '기본', DETAIL: '상세' };

const RadioInput = (props) => {
  return (
    <>
      <input
        className={props.style}
        type='radio'
        id={props.id}
        name='option'
        value={props.option}
        checked={props.checked}
        readOnly
      />
      <label className={styles.label} htmlFor={props.option}>
        {OPTION_NAME[props.option]}
      </label>
    </>
  );
};

const Toggle = () => {
  const [isBasic, setIsBasic] = useState(true);

  const clickHandler = () => {
    setIsBasic((prev) => !prev);
  };

  return (
    <Card title='Toggle'>
      <div className={styles.wrapper} onClick={clickHandler}>
        <RadioInput
          option='BASIC'
          style={styles['toggle-switch']}
          checked={isBasic}
        />
        <RadioInput
          option='DETAIL'
          style={styles['toggle-switch']}
          checked={!isBasic}
        />
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
