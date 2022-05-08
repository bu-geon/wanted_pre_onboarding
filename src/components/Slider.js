import { useState } from 'react'
import Card from '../UI/Card'
import styles from './Slider.module.css'

function Slider() {
  const [percentage, setPercentage] = useState(0)
  const wayPoints = [0, 25, 50, 75, 100]

  const changeHandler = (e) => {
    setPercentage(e.target.valueAsNumber)
  }

  const clickHandler = (e) => {
    setPercentage(e.target.value)
  }

  return (
    <Card title='Slider'>
      <div className={styles.wrapper}>
        <div className={styles.dashboard}>
          <span className={styles.percentage}>{percentage}</span>%
        </div>
        <section className={styles.slider}>
          <input
            type='range'
            value={percentage}
            min='0'
            max='100'
            step='1'
            onChange={changeHandler}
            style={{
              background: `linear-gradient(to right, #50acad, #50acad ${percentage}%, #ebecf0 ${percentage}%, #ebecf0 100%)`,
            }}
          />
          <div className={styles['dot-container']}>
            {wayPoints.map((el) => (
              <div
                className={styles['dot-on-slider']}
                key={`way-point(${el})`}
                style={{
                  backgroundColor: percentage >= el ? '#50acad' : '#ebecf0',
                }}
              />
            ))}
          </div>
          <div className={styles['dot-container']}>
            {wayPoints.map((el) => (
              <button type='button' className={styles['way-point']} value={el} onClick={clickHandler} key={el}>
                {el}%
              </button>
            ))}
          </div>
        </section>
      </div>
    </Card>
  )
}

export default Slider
