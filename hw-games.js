function gameSeasons() {
    let seasNum = parseInt(prompt("Введите число"));
    if (!isNaN(seasNum) && seasNum > 0 && seasNum < 13) {
      if ((seasNum > 0 && seasNum <= 2) || seasNum == 12) {
        alert("Зима");
      } else if (seasNum > 2 && seasNum <= 5) {
        alert("Весна");
      } else if (seasNum > 5 && seasNum <= 8) {
        alert("Лето");
      } else if (seasNum > 8 && seasNum <= 11) {
        alert("Осень");
      }
    } else {
      alert("Вы ввели не число, ввели ноль или больше 12");
    }
  }