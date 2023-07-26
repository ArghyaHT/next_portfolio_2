import React from 'react'
import styles from "./ProductEffective.module.css"

const ProductEffective = () => {
    return (
        <>
            <main className="mt-12">
                <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Our product effectiveness</h2>
                <div className={styles.ourstory}>
                    <div className={styles.ourstory_left}>
                        <div className={styles.firstDiv}>
                            <div className={styles.secondDiv}><img className = {styles.img} src="/images/assets/check.png" alt="check"/></div>
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetuer.</p>
                        </div>
                        <div className={styles.firstDiv}>
                            <div className={styles.secondDiv}><img className = {styles.img} src="/images/assets/check.png" alt="check"/></div>
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetuer.</p>
                        </div>
                        <div className={styles.firstDiv}>
                            <div className={styles.secondDiv}><img className = {styles.img} src="/images/assets/check.png" alt="check"/></div>
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetuer.</p>
                        </div>
                        <div className={styles.firstDiv}>
                            <div className={styles.secondDiv}><img className = {styles.img} src="/images/assets/check.png" alt="check"/></div>
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetuer.</p>
                        </div>
                        <div className={styles.firstDiv}>
                            <div className={styles.secondDiv}><img className = {styles.img} src="/images/assets/check.png" alt="check"/></div>
                            <p className={styles.p}>Lorem ipsum dolor sit amet, consectetuer.</p>
                        </div>
                    </div>
                    <div className='ourstory-right'>
                        <img src="/images/assets/cat.png" alt="cat" />
                    </div>
                </div>

            </main>
        </>
    )
}

export default ProductEffective