let timerId = document.getElementById('timer');
function countDown() {
  diff = timerId.textContent - 1;
  if (diff >= 0) {
    timerId.textContent = diff;
    console.log(timerId.textContent);
  }
  else {
    clearInterval(diff);
  };
  if (diff === 0) {
    alert("Вы победили в конкурсе!");
  }
}
diff = setInterval(countDown, 1000);
countDown()
