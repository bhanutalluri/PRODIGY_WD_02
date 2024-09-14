let interval;
let elapsed = 0;

function start() {
  clearInterval(interval);
  interval = setInterval(() => {
    elapsed++;
    document.getElementById('display').textContent = new Date(elapsed * 1000).toISOString().substr(11, 8);
  }, 1000);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  elapsed = 0;
  document.getElementById('display').textContent = "00:00:00";
}
