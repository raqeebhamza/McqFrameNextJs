import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '/styles/Home.module.scss'
import {motion} from 'framer-motion'


const questionVarient={
  hidden:{
    y:200,
    opacity:0
  },
  visible:{
    y:0,
    opacity:1,
    transition:{
      yoyo:Infinity,
      type:'spring',
      repeatDelay: 1,
      duration:0.7,
      when:"beforeChildren"
    }
  }
}
const ansTile1={
  hidden:{
    y:200,
    opacity:0},
  visible:{ 
    y:0,
    opacity:1,
    transition:{
      yoyo:Infinity,
      type:'spring',
      repeatDelay: 1,
      duration:0.7
      }
    }
}

const Home= () => {

  const [showTiles,setShowTiles]=useState(true)
   setInterval(function() {
      setShowTiles(!showTiles)
  }, 4000);


  return (
    
    <div className={styles.qizeContainer}>
      <div className={styles.box1}>
        <motion.h3 
          variants={questionVarient}
          initial="hidden"
          animate="visible"
        >
        Which of the below statements<br/>about electricity is not true?</motion.h3>
        <div className={styles.indentation}></div>
        <div className={styles.indentation}></div>
        <motion.div  className={styles.innerTiles}
        variants ={ansTile1}
           initial="hidden"
           animate="visible"
           >
          <label className={styles.radio}>
            <input  type="radio" name="radio"/>
              <span>Electricity is measured in units called watts</span>
	      	</label>
        </motion.div>
        <div className={styles.indentation}></div>

        <motion.div  className={styles.innerTiles}
          variants ={ansTile1}
          initial="hidden"
          animate="visible"
          >
          <label className={styles.radio}>
            <input type="radio" name="radio"/>
              <span>Electricity flow at the speed of light</span>
	      	</label>
        </motion.div>

        <div className={styles.indentation}></div>

        <motion.div  className={styles.innerTiles}
           variants ={ansTile1}
           initial="hidden"
           animate="visible"
           >
          <label className={styles.radio}>
            <input type="radio" name="radio" checked/>
              <span>Electricity is a primary energy source</span>
	      	</label>
        </motion.div>
      </div>
    </div>
  )
}

export default Home
