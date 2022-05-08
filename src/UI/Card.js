import styles from './Card.module.css'
import PropTypes from 'prop-types'

function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
}

export default Card
