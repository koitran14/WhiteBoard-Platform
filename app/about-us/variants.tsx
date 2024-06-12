export const fadeIn = (direction: string, delay: number) => {
    return {
      hidden: {
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        opacity: 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.2,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };

// export const moveIn = (direction, delay) => {
//   return {
//     hidden: {
//       y: direction === 'up' ? direction === 'down' ? -40 : 0,
//       opacity: 0,
//       x: dri
//     }
//   }
// }

export const moveIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    },
    show: {
      y: 0,
      x: 0,
      transition: {
        type: 'tween',
        duration: 1.2,
        delay: delay,
        linear: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
