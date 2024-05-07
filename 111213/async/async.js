// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
   // do netwrok reqeust in 10 secs....
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await 💫
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async funciton getApple() {
  await delay(3000);
  return '🍎';
}

async fucntion getBanna() {
  await delay(3000);
  return '🍌'
}

async funciton pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanna();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return '${apple} + ${banana}';
}

pickFruits().then(console.log);

// 3. useful APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

