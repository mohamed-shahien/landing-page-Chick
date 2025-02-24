'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';

const Hero = () => (
  <section
    className={`${styles.yPaddings} sm:pl-16 pl-6 bg-cover bg-center bg-no-repeat`}
    style={{ backgroundImage: "url('/background.png')" }}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth2} mx-auto flex flex-col items-center justify-center`}
    >
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full max-w-3xl"
      >
        <img
          src="/cover.png"
          alt="Cover"
          className="w-full h-full object-cover z-10"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
