var counter = 0;
function x() {
  setInterval(function () {
    console.log(counter++);
  }, 1000);
}
x();
