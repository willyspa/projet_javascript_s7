
const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");
console.log(entrepreneurs.filter(e=> e.year >=1970 && e.year <=1979));


console.log("Sors une array qui contient le prénom et le nom des entrepreneurs");
let prenomnom = entrepreneurs.map(e=> e.first + ' ' + e.last);
console.log(prenomnom);

console.log("Quel âge aurait chaque inventeur aujourd'hui ?");
for(let i = 0 ; i<entrepreneurs.length ; i++) {
	console.log(`${entrepreneurs[i].first} ${entrepreneurs[i].last} a ${2019-entrepreneurs[i].year} ans`);
}

console.log("Trie les inventeurs par ordre alphabétique du nom de famille");
entrepreneurs.sort((a,b) => (a.last > b.last) ? 1 : ((b.last > a.last) ? -1 : 0));
console.log(entrepreneurs);
