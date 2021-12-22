let data = [
  {
    name: 'Matero',
    age: '30',
  },
  {
    name: 'Sarah',
    age: '21',
  },
  {
    name: 'John',
    age: '25',
  },
  {
    name: 'Tim',
    age: '27',
  },
  {
    name: 'Sam',
    age: '22',
  },
  {
    name: 'Joey',
    age: '34',
  },
];

const info = document.querySelector('#info');

let details = data.map(
  person => `<div>${person.name} is ${person.age} years old</div>`
);

info.innerHTML = details.join('\n');
