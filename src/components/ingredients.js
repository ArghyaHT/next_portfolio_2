import React from 'react'
import Image from 'next/image'

import Ingredients1 from '../../public/images/assets/ingreadients1.png'
import Ingredients2 from '../../public/images/assets/ingreadients2.png'
import Ingredients3 from '../../public/images/assets/ingreadients3.png'
import Ingredients4 from '../../public/images/assets/ingreadients4.png'
import Ingredients5 from '../../public/images/assets/ingreadients5.png'
import styles from "./ingredients.module.css"

const ingredients = () => {
  return (
    <div className='my-32'>
    <h2 className="font-bold text-5xl mb-16 w-full text-center md:text-4xl xs:text-3xl md:mb-16">
        Organic Ingredients
    </h2>
    <h4 className="text-3xl font-medium text-center">
        Packed With Flovours
    </h4>
    <div className={styles.ingredients}>
      <div>
        <Image className={styles.ingredients_img}src={Ingredients1} />
        <h4 className={styles.ingredients_heading}>Chicken</h4>
      </div>

      <div>
        <Image className={styles.ingredients_img}src={Ingredients2} />
        <h4 className={styles.ingredients_heading}>Gluten Free</h4>
      </div>

      <div>
        <Image className={styles.ingredients_img}src={Ingredients3} />
        <h4 className={styles.ingredients_heading}>Turmeric</h4>
      </div>

      <div>
        <Image className={styles.ingredients_img}src={Ingredients4} />
        <h4 className={styles.ingredients_heading}>No Preservations</h4>
      </div>

      <div>
        <Image className={styles.ingredients_img}src={Ingredients5} />
        <h4 className={styles.ingredients_heading}>No Carbohydrates</h4>
      </div>
    </div>
    
    </div>
  )
}

export default ingredients