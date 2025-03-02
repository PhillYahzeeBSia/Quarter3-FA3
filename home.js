function randomNum1() {
      var num1 = Math.floor(Math.random() * 20+1);
      document.getElementById("ran1").innerHTML = num1;
      return num1;
      }
    function randomNum2() {
      var num2 = Math.floor(Math.random() * 20+1);
      document.getElementById("ran2").innerHTML = num2;
      return num2;
      }
    function randomNum3() {
      var num3 = Math.floor(Math.random() * 20+1);
      document.getElementById("ran3").innerHTML = num3;
      return num3;
      }
      
    var x = randomNum1();
    var y = randomNum2();
    var z = randomNum3();
    maxim(x, y, z);
    numth(x);
    timee(y, z);
    
    
    
    function maxim(num1, num2, num3) {
      var maximu = Math.max(num1, num2, num3);
      document.getElementById("maxi").innerHTML = maximu;
      }
    
    function numth(num) {
      var letter;
      if (num == 1) {
        letter = "O";
        }
      else if (num == 2 || num == 3 || num == 10 || num == 12 || num == 13 || num == 14 || num == 20) {
        letter = "T";
        }
      else if (num == 4 || num == 5 || num == 14 || num == 15) {
        letter = "F";
        }
      else if (num == 6 || num == 7 || num == 16 || num == 17) {
        letter = "S";
        }
      else if (num == 8 || num == 11 || num == 18) {
        letter = "E";
        }
      else if (num == 9 || num == 19) {
        letter = "N";
        }
      else {
        }
      document.getElementById("letterr").innerHTML = letter;
      document.getElementById("letterrr").innerHTML = letter;
      }
      
    function timee(num1, num2) {
      var timeee = num1 * num2;
      var mins = timeee % 60;
      var hours = Math.floor(timeee / 60);
      document.getElementById("timeeee").innerHTML = timeee;
      document.getElementById("hourss").innerHTML = hours;
      document.getElementById("minss").innerHTML = mins;
      }
      
    
