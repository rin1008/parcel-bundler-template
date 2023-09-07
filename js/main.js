console.log('Hello World!!!');

async function test() {
  const promise = Promise.resolve('hello~!!');
  console.log(await promise);
}
test();