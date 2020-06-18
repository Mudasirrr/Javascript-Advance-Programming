function yourRide() {
    return Promise.resolve('2017 Dodge Charger');
  }
  /**
   * and a different function that does the same thing but in promise format:
   */
async function myRide() {
    return '2017 Dodge Charger';
  }
  /**
   * From the above statements, myRide() and yourRide() are equal and will
   *  both resolve to 2017 Dodge Charger. Also when a promise is rejected,
   *  an async function is represented like this:
   */
  function foo(){
      return Promise.reject(25);
  }
  //is equal to 
  async function(){
      throw 25;
  }