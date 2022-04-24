import { useState } from 'react';
import Card from '../UI/Card';
import styles from './Slider.module.css';

const Slider = () => {
  const [percentage, setPercentage] = useState(0);
  const wayPoints = [0, 25, 50, 75, 100];

  const changeHandler = (e) => {
    setPercentage(e.target.valueAsNumber);
  };

  const clickHandler = (e) => {
    setPercentage(e.target.value);
  };

  return (
    <Card title='Slider'>
      <div className={styles.slider}>
        <div className={styles.dashboard}>
          <span className={styles.percentage}>{percentage}</span>%
        </div>
        <input type='range' value={percentage} onChange={changeHandler} />
        {wayPoints.map((el) => (
          <button
            type='button'
            className={styles['way-point']}
            value={el}
            onClick={clickHandler}
            style={{ left: el + '%' }}
            key={el}
          >
            {el}%
          </button>
        ))}
      </div>
    </Card>
  );
};

export default Slider;
