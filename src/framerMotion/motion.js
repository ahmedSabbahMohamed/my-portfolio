export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: .01,
    },
  },
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? "-100vw" : direction === 'right' ? "100vw" : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const footerVariants = {
  hidden: {
    y: 100,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay: .8,
      duration: .5
    }
  }
}

export const homeVariants = (direction) => ({
  hidden: {
    x: direction === "left" ? "-100vw" : direction === "right" ? "100vw" : 0
  },
  show: {
    x: 0,
    transition: {
      delay: .01,
      type: "tween",
      stiffness: 100,
      duration: 1
    }
  }
})