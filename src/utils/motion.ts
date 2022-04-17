import { motion } from 'framer-motion'
export const MotionDiv = motion.div
export const MotionH1 = motion.h1
export const MotionH3 = motion.h3
export const MotionButton = motion.button
export const MotionA = motion.a
export const listWrapperVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
}
export const listVerticalVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
export const listHorizontalVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
}
export const scaleUpVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: 1,
    },
  },
}
