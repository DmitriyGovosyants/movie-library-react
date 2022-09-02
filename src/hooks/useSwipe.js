import PropTypes from 'prop-types';
import { useEffect } from "react";
import { throttle } from 'throttle-debounce';

export const useSwipe = (currentRef, swipeFn, deps) => {
  return useEffect(() => {
    if (!currentRef.current) {
      return;
    }

    const MAX_VERTICAL = 150;
    
    let swipeDistanceRigth = 180;
    let swipeDistanceLeft = -180;
    if (window.innerWidth >= 480) {
      swipeDistanceRigth = 200
      swipeDistanceLeft = -200;
    }
    if (window.innerWidth >= 768) {
      swipeDistanceRigth = 250
      swipeDistanceLeft = -250;
    }

    const ref = currentRef.current;
    
    const movePoints = [];
    let startX = null;
    let startY = null;
    
    const createPointsArray = e => {
      let movePoint = e.changedTouches[0].clientY;
      movePoints.push(movePoint);
    };

    const swiper = e => {
      let endX = e.changedTouches[0].clientX;
      let endY = e.changedTouches[0].clientY;
      const lengthX = endX - startX;
      const lengthY = Math.abs(endY - startY);
      const minMoveY = Math.min(...movePoints);
      const maxMoveY = Math.max(...movePoints);
      const moveLengthY = maxMoveY - minMoveY;

      if (
        lengthX > swipeDistanceRigth &&
        lengthY < MAX_VERTICAL &&
        moveLengthY < MAX_VERTICAL
      ) {
        swipeFn(1);
      }
      if (
        lengthX < swipeDistanceLeft &&
        lengthY < MAX_VERTICAL &&
        moveLengthY < MAX_VERTICAL
      ) {
        swipeFn(-1);
      }

      movePoints.splice(0, movePoints.length);
    };

    ref.addEventListener('touchstart', e => {
      startX = e.changedTouches[0].clientX;
      startY = e.changedTouches[0].clientY;
    });
    ref.addEventListener('touchmove', throttle(100, e => createPointsArray(e)));
    ref.addEventListener('touchend', swiper);

    return () => {
      ref.removeEventListener('touchstart', e => {
        startX = e.changedTouches[0].clientX;
        startY = e.changedTouches[0].clientY;
      });
      ref.removeEventListener('touchmove', throttle(100, e => createPointsArray(e)));
      ref.removeEventListener('touchend', swiper);
    };
  }, [currentRef, swipeFn, deps]);
}

useSwipe.propTypes = {
  currentRef: PropTypes.node,
  swipeFn: PropTypes.func.isRequired,
  deps: PropTypes.node,
};