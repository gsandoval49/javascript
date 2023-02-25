function ghostBusterCall() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('ghost busters');
    }, 3000);
  });
}

async function asyncCall() {
  console.log('who you gonna call?');
  const result = await ghostBusterCall();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();
