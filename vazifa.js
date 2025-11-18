// const Talabalar = [
//     {name:"Hasan",firstName:'Rahmonov', ball:'3'},
//     {name:"Shodiyor",firstName:'Rahmonov', ball:'4'},
//     {name:"Avazbek",firstName:'Rahmonov', ball:'5'}
// ]

// let filterTalaba =  Talabalar.filter((talaba)=>{
//     return talaba.name.includes('Avazbek')
// })
// console.log(filterTalaba)

// const data = ["Avazbek", "Jamshid", "Muhammad", "Shaxzod", "Malika", "Murod", "Diyora"];

// const input = document.getElementById("searchInput");
// const results = document.getElementById("results");

// input.addEventListener("input", () => {
//   const search = input.value.toLowerCase();
//   const filtered = data.filter(name => name.toLowerCase().includes(search));
//   showResults(filtered);
// });

// function showResults(list) {
//   results.innerHTML = ""; // eski natijalarni tozalash
//   list.forEach(name => {
//     const li = document.createElement("li");
//     li.textContent = name;
//     results.appendChild(li);
//   });
// }





// const talabalar = [
//     {name:"Hasan",age:22,ball:"5"},
//     {name:"Shodiyor",age:20,ball:"4"},
//     {name:"Komiljon",age:18,ball:"3"},
// ]

// const names = ['Hasan','Akrom',"Komiljon","Davron"]


// const numbers = [1,8,12,22,99,12,0]
// const sortedNames = numbers.sort((birinchiRaqam,taqqoslash)=>{
//     return birinchiRaqam - taqqoslash;

// })
// console.log(sortedNames);

// let num = 12;
// console.log(typeof(num) === 'number' ? "Raqam" :"Raqam emas");



// let age = prompt('yosh kiriting')
// let result =  age < 0 ? "siz tugulmagansiz" : age < 10 ? 'Siz juda kichkinasiz': age > 100 ? 'siz tirik emassiz' : 'Siz qabul qilindingiz' 
// console.log(result);


// localStorage
age = "1"


// SetITEM

// localStorage.setItem('name', 'Avazbek');
// localStorage.setItem('age', age)

// GetItem


//clear




// JSON.stringify()




// JSON.parse
let elForm = document.querySelector('#form');
let elInput = document.getElementById('input');
let elList = document.getElementById('list');

let arr = [];


// Malumotni arrayga saqlab qolish
function localStorageSaved() {
  let saved = localStorage.getItem('olma');
  if (saved) {
    arr = JSON.parse(saved);  
  } else {
    arr = [];  
  }
}

// UIga chiqarish
function setUi() {
  elList.innerHTML = '';  
  arr.forEach((a, index) => {
    let li = document.createElement('li');
    li.textContent = a;
    // O'chirish tugmasi qo'shish
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'O\'chirish';
    deleteBtn.addEventListener('click', () => deleteItem(index));  // Delete funksiyasini chaqirish
    li.appendChild(deleteBtn);
    elList.appendChild(li);
  });
}

// O'chirish funksiyasi
function deleteItem(index) {
  arr.splice(index, 1); 
  localStorage.setItem('olma', JSON.stringify(arr));  
  setUi();  
}

// FORM yuborilganda
function setItemLocal__Storge() {
  elForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (elInput.value.trim() == '') {
      alert('Siz habar kiritmadingiz');
    } else {
      arr.push(elInput.value);
      localStorage.setItem('olma', JSON.stringify(arr));  // LocalStoragega yozish
      elInput.value = '';  // Inputni tozalash
      setUi();  // UIni yangilash
    }
  });
}

// Foydalanuvchi sahifani ochganida
localStorageSaved();  // localStorage'dan ma'lumot olish
setUi();  // UIni birinchi marta chiqarish
setItemLocal__Storge();  // FORMni ishlashini qo'shish


// function callMe (){
//   alert('Hello Javascript')
// }
// // setTimeout function,time  Qisqavarianti
// setTimeout(callMe,2000)

// 

// elList.textContent = "hasan"


// setTimeout(()=>{
//   elList.textContent = ''
// },3000)

// setInterval

let a = 0
const timerInterval =setInterval(()=>{
  a++
  console.log(a);
  elList.textContent = a
  
},1000);


let interval =  setTimeout(() => {
   clearInterval(timerInterval)
 }, 10000);


clearTimeout(()=>{
  interval
},10000)



