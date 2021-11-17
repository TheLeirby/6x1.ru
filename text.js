
const text = [
    'Страничка находится\n',
    'на  реконструкции,\n',
    'зайдите пожалуйста позже.\n'
  ];
  
   let line = 0;
    let count = 0;
    let result = '';
    function typeLine() {
      let interval = setTimeout(
        () => {
          result += text[line][count]
          document.querySelector('pre').innerHTML =result +'|';
  
  
        count++;
        if (count >= text[line].length) {
          count = 0;
          line++;
          if (line == text.length) {
            clearTimeout(interval);
             document.querySelector('pre').innerHTML =result;
            return true;
          }
        }
        typeLine();
      }, getRandomInt(getRandomInt(250*2.5)))
    }
    typeLine();
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  window.onload = function() {
    setInterval(function() {
      // Seconds
      var seconds = new Date().getSeconds();
      document.getElementById("seconds").innerHTML = (seconds < 10 ? '0' : '') + seconds;
  
      // Minutes
      var minutes = new Date().getMinutes();
      document.getElementById("minutes").innerHTML = (minutes < 10 ? '0' : '') + minutes;
  
      // Hours
      var hours = new Date().getHours();
      document.getElementById("hours").innerHTML = (hours < 10 ? '0' : '') + hours;
    }, 1000);
  }
