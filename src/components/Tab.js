import { useState } from 'react'
import Card from '../UI/Card'
import styles from './Tab.module.css'

function Tab() {
  const tabList = ['감자', '고구마', '카레라이스']
  const [selectedTab, setSelectedTab] = useState('감자')

  const clickTabHandler = (e) => {
    setSelectedTab(tabList[e.target.value])
  }

  return (
    <Card title='Tab'>
      <ul className={styles.tab}>
        {tabList.map((item, index) => (
          <button
            className={`${styles.menu} ${selectedTab === item ? styles.selected : ''}`}
            value={index}
            key={`Menu-${item}`}
            onClick={clickTabHandler}
            type='button'
          >
            {item}
          </button>
        ))}
        <div
          className={styles['selected-tab']}
          style={{
            transform: `translateX(${tabList.indexOf(selectedTab) * 100}%)`,
            transition: 'transform 0.5s',
          }}
        />
      </ul>
    </Card>
  )
}

export default Tab
