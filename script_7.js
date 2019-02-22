const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 9 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 2 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
let rented = books.map(e => e.rented);
let allRented = true;
for(let i = 0 ; i<rented ; i++) {
	//test de la validité de l'élement. s'il est présent avec une valeur à 0, alors jamais emprunté
	if(typeof rented[i] === 'undefined' || rented[i] < 1)
		allRented = false;
}
console.log(allRented ? 'oui' : 'non');
// reduce choisit 1 élement qui correspond à la comparaison spécifiée. tous les éléments seront comparés entre eux 2 par 2
console.log("Quel est livre le plus emprunté ?");
let highestRented = Object.values(books).reduce((a, b) => a.rented > b.rented ? a : b);
console.log(highestRented);

console.log("Quel est le livre le moins emprunté ?");
let lessRented = Object.values(books).reduce((a, b) => a.rented < b.rented ? a : b);
console.log(lessRented);

// filter sert à filtrer une liste qui correspond à la condition spécifiée
console.log("Trouve le livre avec l'ID: 873495");
console.log(books.filter(b => b.id == 873495));

console.log("Supprime le livre avec l'ID: 133712");
let theBook = books.filter(b => b.id==133712);
for(let i = 0 ; i < theBook.length ; i++) {
	books.splice(books.indexOf(theBook[i]), 1);
}
console.log(books);

console.log("Trie les livres par ordre alphabétique");
books.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
console.log(books);
