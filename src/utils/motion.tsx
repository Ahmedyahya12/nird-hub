
// ----------------------------------------------------------------------
// TEXT VARIANT
// ----------------------------------------------------------------------
export const textVariant = (delay: number = 0) => {
  return {
    hidden: {
      y: 30,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay,
        easing: "ease-out", // OK : easing accepte un string
      },
    },
  }
}

// ----------------------------------------------------------------------
// FADE IN
// ----------------------------------------------------------------------
export const fadeIn = (
  direction: "left" | "right" | "up" | "down" | "",
  type: "spring" | "tween" | "",
  delay: number = 0,
  duration: number = 0.75
) => {
  let x = 0
  let y = 0

  if (direction === "left") x = 100
  if (direction === "right") x = -100
  if (direction === "up") y = 100
  if (direction === "down") y = -100

  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration,
        easing: "ease-out",
      },
    },
  }
}

// ----------------------------------------------------------------------
// STAGGER CONTAINER
// ----------------------------------------------------------------------
export const staggerContainer = (
  staggerChildren: number = 0.15,
  delayChildren: number = 0
) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }
}
