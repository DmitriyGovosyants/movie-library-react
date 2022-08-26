export const debounce = (fn, delay) => {
  let timeoutID; // Initially undefined
  
  return function(...args){
    
    // cancel previously unexecuted timeouts
    if(timeoutID){
      clearTimeout(timeoutID);
    }
    
    timeoutID = setTimeout( () => {
      fn(...args);
    }, delay)
  }
}