/**The power of async functions becomes more evident when there are
 *  multiple steps involved:
 */ 
function who() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('🤡');
    }, 5000);
  });
}

function what() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Mudasir');
    }, 500);
  });
}

function where() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Comsats');
    }, 500);
  });
}

// async function msg() {
//   const a = await who();
//   const b = await what();
//   const c = await where();

//   console.log(`${ a } ${ b } ${ c }`);
// }

msg(); // 🤡 Mudasir in Taxila<-- after 6 second
/**
 * A word of caution however, in the above example each step is
 *  done sequentially, with each additional step waiting for the step
 *  before to resolve or reject before continuing. If you instead want
 *  the steps to happen in parallel, you can simply use Promise.all 
 * to wait for all the promises to have fulfilled:
 */

async function msg() {
  const [a, b, c] = await Promise.all([who(), what(), where()]);

  console.log(`${ a } ${ b } ${ c }`);
}

msg();