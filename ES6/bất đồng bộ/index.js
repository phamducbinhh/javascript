//bất đồng bộ
function test() {
  setTimeout(() => {
    console.log("test1");
  }, 1000);
  console.log("test2");
  console.log("test3");
}
test();
