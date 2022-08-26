import { useEffect } from "react";
import { throttle } from 'throttle-debounce';

export const useSwipe = (currentRef, swipeFn, deps) => {
  return useEffect(() => {
    const ref = currentRef;
    const SWIPE_DISTANCE_RIGTH = 250;
    const SWIPE_DISTANCE_LEFT = -250;
    const MAX_VERTICAL = 150;
    let startX = null;
    let startY = null;
    const movePoints = [];

    const createPointsArray = e => {
      let movePoint = e.changedTouches[0].clientY;
      movePoints.push(movePoint);
    };

    const swipeMovieCard = e => {
      let endX = e.changedTouches[0].clientX;
      let endY = e.changedTouches[0].clientY;
      const lengthX = endX - startX;
      const lengthY = Math.abs(endY - startY);
      const minMoveY = Math.min(...movePoints);
      const maxMoveY = Math.max(...movePoints);
      const moveLengthY = maxMoveY - minMoveY;
      // console.log(movePoints);

      if (
        lengthX > SWIPE_DISTANCE_RIGTH &&
        lengthY < MAX_VERTICAL &&
        moveLengthY < MAX_VERTICAL
      ) {
        swipeFn(-1);
        console.log('LEFT');
      }
      if (
        lengthX < SWIPE_DISTANCE_LEFT &&
        lengthY < MAX_VERTICAL &&
        moveLengthY < MAX_VERTICAL
      ) {
        swipeFn(1);
        console.log('RIGHT');
      }

      movePoints.splice(0, movePoints.length);
    };

    ref?.addEventListener('touchstart', e => {
      startX = e.changedTouches[0].clientX;
      startY = e.changedTouches[0].clientY;
    });
    ref?.addEventListener('touchmove', throttle(100, e => createPointsArray(e)));
    ref?.addEventListener('touchend', swipeMovieCard);

    return () => {
      ref?.removeEventListener('touchstart', e => {
        startX = e.changedTouches[0].clientX;
        startY = e.changedTouches[0].clientY;
      });
      ref?.removeEventListener('touchmove', throttle(100, e => createPointsArray(e)));
      ref?.removeEventListener('touchend', swipeMovieCard);
    };
  }, [currentRef, swipeFn, deps]);
}