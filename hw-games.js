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

 
  
  function gameRemember() {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);
    let win1 = false;
    let win2 =false;
    alert(words.toString());
    let questionFirst = prompt('Чему равнялся первый элемент массива?');
    if (questionFirst.toLowerCase() === words[0].toLowerCase()) {
     win1 = true;
     alert('Верно');
    } else {
      alert ('Неверно');
     win1 = false;
    }
    let questionSecond = prompt('Чему равнялся последний элемент массива?');
    if (questionSecond.toLowerCase() === words[words.length - 1].toLowerCase()) {
       win2 = true;
      alert('Верно');
    } else {
       win2 = false;
      alert('Неверно');
    }
    if (win1 && win2) {
      alert('Поздравляю, у вас нормальная память');
    } else if (!win1 && !win2) {
      alert ('Вы проиграли!')
    } else {
      alert ("Вы были близки!");
    }
  }