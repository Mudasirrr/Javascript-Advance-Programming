/*
Simple Example

In the following example, we first declare a function that returns
a promise that resolves to a value of 🤡 after 2 seconds. We then declare an 
async function and await for the promise to resolve before logging the message 
to the console:
*/function scaryClown() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('🤡');
      }, 2000);
    });
  }
  
  async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
  }
  
  msg(); // Message: 🤡 <-- after 2 seconds
  /**await is a new operator used to wait for a promise to resolve
   *  or reject. It can only be used inside an async function.
   * 
   */