import { useReducer, useState } from 'react'
import Card from '../UI/Card'
import { ReactComponent as EmailVaildation } from '../assets/check.svg'
import { ReactComponent as Visible } from '../assets/visible.svg'
import { ReactComponent as Invisible } from '../assets/invisible.svg'
import styles from './Input.module.css'

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(\.[a-z]{2,5}){1,2}$/

const emailReducer = (state, action) => {
  if (action.type === 'EMAIL_INPUT') {
    return {
      address: action.address,
      isValid: emailRegex.test(action.address),
    }
  }

  return { address: state.address, isValid: state.isValid }
}

function Input() {
  const [isPWVisible, setIsPWVisible] = useState(false)
  const [inputCount, setInputCount] = useState(0)
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    address: '',
    isValid: false,
  })

  const emailValidationHandler = (e) => {
    dispatchEmail({ type: 'EMAIL_INPUT', address: e.target.value })
  }

  const blurHandler = () => {
    setInputCount((prev) => prev + 1)
  }

  const pwVisibleClickHandler = () => {
    setIsPWVisible((prev) => !prev)
  }

  return (
    <Card title='Input'>
      <form>
        <section className={styles['user-input']}>
          <label htmlFor='email'>E-mail</label>
          <input
            type='email'
            placeholder='E-mail'
            value={emailState.address}
            onChange={emailValidationHandler}
            onBlur={blurHandler}
            id='email'
          />
          <EmailVaildation className={styles.svg} width='1em' fill={emailState.isValid ? '#50acad' : 'grey'} />
          {!emailState.isValid && inputCount > 0 && (
            <div className={styles['email-vaildation']}>Invalid e-mail address</div>
          )}
        </section>
        <section className={styles['user-input']}>
          <label htmlFor='password'>Password</label>
          <input type={isPWVisible ? 'text' : 'password'} placeholder='Password' id='password' />
          {isPWVisible && <Visible className={styles.svg} onClick={pwVisibleClickHandler} fill='#50acad' />}
          {!isPWVisible && <Invisible className={styles.svg} onClick={pwVisibleClickHandler} />}
        </section>
      </form>
    </Card>
  )
}

export default Input
