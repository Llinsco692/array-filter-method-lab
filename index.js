// index.js

/**
 * Finds drivers whose names exactly match the provided name (case insensitive)
 * @param {string[]} drivers - Array of driver names
 * @param {string} name - Name to match
 * @returns {string[]} - Matching driver names
 */
function findMatching(drivers, name) {
    if (!drivers || !name) return [];
    return drivers.filter(driver => 
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  /**
   * Finds drivers whose names start with the provided letters (case insensitive)
   * @param {string[]} drivers - Array of driver names
   * @param {string} letters - Starting letters to match
   * @returns {string[]} - Matching driver names
   */
  function fuzzyMatch(drivers, letters) {
    if (!drivers || !letters) return [];
    return drivers.filter(driver => 
      driver.toLowerCase().startsWith(letters.toLowerCase())
    );
  }
  
  /**
   * Finds driver objects whose name property matches the provided name (case insensitive)
   * @param {Object[]} drivers - Array of driver objects
   * @param {string} name - Name to match
   * @returns {Object[]} - Matching driver objects
   */
  function matchName(drivers, name) {
    if (!drivers || !name) return [];
    return drivers.filter(driver => 
      driver.name.toLowerCase() === name.toLowerCase()
    );
  }
  
  module.exports = {
    findMatching,
    fuzzyMatch,
    matchName
  };