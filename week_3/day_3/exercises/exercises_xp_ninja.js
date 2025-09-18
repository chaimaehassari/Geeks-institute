// ===== Exercise 1 Random Number
// let randomNumber = Math.floor(Math.random() * 100) + 1;
//     let pairs=[];
//     for(let i = 0; i <= number; i++) {
//         if(i % 2 === 0) {
//              pairs.push(i);
//         }
//     }
     
// ===== Exercise 2 Capitalized letters
function capitalize(str) {
    let eventIndex = '';
    let oddIndex = '';
    for(let i=0;i<str.length;i++){
        if(i%2===0){

            eventIndex += str[i].toUpperCase();
            oddIndex += str[i].toLowerCase();

        }else{
            oddIndex += str[i].toLowerCase();
            eventIndex += str[i].toLowerCase();
        }

    }
      return [eventIndex, oddIndex];

}

// ===== Exercise 3 palindrome
function isPalindrome(str) {
    let reversedStr = str.split('').reverse().join('');//inverser une chaîne
    if(str === reversedStr){
        return true;
    }
    return false;

}

// ===== Exercise 4 Biggest Number
function biggestNumberInArray(arrayNumber){
    if(arrayNumber.length === 0){
        return 0;
    }
    let max=0;
    for(let i;i<arrayNumber.length;i++){
        if(typeof arrayNumber[i] !== 'number' && arrayNumber[i] > max){
            max = arrayNumber[i];
    }
    return max;
}
}
// ===== Exercise 5 Unique Elements
function uniqueElements(array) {
    let newArray = [];
    for(let i=0;i<array.length;i++){
        if(!newArray.includes(array[i])){
            newArray.push(array[i]);
        }
    }
    return newArray;    
}
//  exercice 6
function createCalendar(year, month) {
  let table = document.createElement('table');
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let tr = document.createElement('tr');
  for (let day of days) {
    let th = document.createElement('th');
    th.innerHTML = day;
    tr.appendChild(th);
  }
  table.appendChild(tr);

  let firstDay = (new Date(year, month - 1, 1).getDay() + 6) % 7; 
  let daysInMonth = new Date(year, month, 0).getDate();

  let row = document.createElement('tr');

  for (let i = 0; i < firstDay; i++) {
    row.appendChild(document.createElement('td'));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    let td = document.createElement('td');
    td.innerHTML = day;
    row.appendChild(td);

    if ((firstDay + day) % 7 === 0) {
      table.appendChild(row);
      row = document.createElement('tr');
    }
  }

  if (row.children.length > 0) {
    table.appendChild(row);
  }

  document.body.appendChild(table);
}

