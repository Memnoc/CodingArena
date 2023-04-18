(function() {
  /**
   * @param {Function} callback - The function to call on each element of the array.
   * @param {Object} thisObj - The value of `this` provided for the call to callback.
   * @return {Array} - A new array with the results of calling the callback function on each element of the original array.
   */
  Array.prototype.arrayMap = function(callback, thisObj) {
    if (typeof callback !== 'function') {
      throw new TypeError("First argument must be a function");
    }
    const storedValues = [];
    this.forEach((...args) => {
      const index = args[1];
      storedValues[index] = callback.apply(thisObj, args);
    })
    return storedValues;
  };
})();

export const myMap = Array.prototype.myMap;
