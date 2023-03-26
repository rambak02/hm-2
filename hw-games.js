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
    alert(words.toString());
    let questionFirst = prompt('Чему равнялся первый элемент массива?');
    let win1 = questionFirst.toLowerCase() === words[0].toLowerCase(); 
     alert(win1 ? "Верно" : "Неверно");
    let questionSecond = prompt('Чему равнялся последний элемент массива?');
    let win2 = questionSecond.toLowerCase() === words[words.length - 1].toLowerCase();
     alert(win2 ? "Верно" : "Неверно");
    if (win1 && win2) {
      alert('Поздравляю, у вас нормальная память');
    } else if (!win1 && !win2) {
      alert ('Вы проиграли!')
    } else {
      alert ("Вы были близки!");
    }
  }