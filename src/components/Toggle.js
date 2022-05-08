import { useState } from 'react'
import Card from '../UI/Card'
import styles from './Toggle.module.css'
import PropTypes from 'prop-types'

const OPTION_NAME = { BASIC: '기본', DETAIL: '상세' }

function RadioInput({ style, option, checked }) {
  return (
    <>
      <input className={style} type='radio' name='option' value={option} checked={checked} readOnly />
      <label className={styles.label} htmlFor={option}>
        {OPTION_NAME[option]}
      </label>
    </>
  )
}

RadioInput.propTypes = {
  style: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
}

function Toggle() {
  const [isBasic, setIsBasic] = useState(true)

  const clickHandler = () => {
    setIsBasic((prev) => !prev)
  }

  return (
    <Card title='Toggle'>
      <button className={styles.wrapper} onClick={clickHandler} type='button'>
        <RadioInput option='BASIC' style={styles['toggle-switch']} checked={isBasic} />
        <RadioInput option='DETAIL' style={styles['toggle-switch']} checked={!isBasic} />
        <div
          className={styles['toggle-on']}
          style={{
            transform: `translateX(${isBasic ? '0' : '100%'})`,
            transition: 'transform 0.5s',
          }}
        />
      </button>
    </Card>
  )
}

export default Toggle
