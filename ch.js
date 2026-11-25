const categories = ["Papeterie", "Accessoires", "Sacs"];

///////////////////challenge 1//////////////////////
// // 01. Organiser les catégories
// // 1• Affiche la première catégorie et le nombre initial de catégories.

console.log(categories[0]);  

let count = 0
categories.forEach(category => {
    count++
})
console.log(count);


// //• Ajoute « Classement » à la fin, puis remplace « Accessoires » par « Bureau ». 

categories.push("Classement")
console.log(categories);


categories.splice(1, 1 , "Bureau")
console.log(categories);

// //• Retire la dernière catégorie et affiche le tableau final.

categories.pop()
console.log(categories);

///////////////////challenge 1//////////////////////
const boutique = {
nom: "Stock & Fournitures",
ville: "Youssoufia",
ouverte: true
};

// // Affiche le nom et la ville de la boutique.
console.log(boutique.ville);
// // Ajoute la propriété devise avec la valeur "MAD".
boutique.devise = "MAD"
console.log(boutique);
// // Passe ouverte à false et affiche le statut « Fermée » à partir de cette valeur.
boutique.ouverte = false
boutique.status = "Fermée"
console.log(boutique);


///////////////////challenge 1//////////////////////
const produits = [
{ id: 101, nom: "Cahier", categorie: "Papeterie",
prix: 20, stock: 5 },
{ id: 102, nom: "Stylo", categorie: "Papeterie",
prix: 10, stock: 0 },
{ id: 103, nom: "Trousse", categorie: "Accessoires",
prix: 35, stock: 3 },
{ id: 104, nom: "Sac", categorie: "Sacs",
prix: 120, stock: 2 },
{ id: 105, nom: "Classeur", categorie: "Papeterie",
prix: 30, stock: 4 }
];

// • Crée un nouveau tableau et copie chaque objet produit avec une boucle et la syntaxe spread.
produitsCopy =[ ...produits ]
console.log(produitsCopy);
// • Affiche le nom et le stock de chaque produit de la copie.
produitsCopy.forEach(produit => {
    console.log(`name : ${produit.nom}, ` + `le stock : ${produit.stock}`);  ;
    
});

// • Dans la copie, passe le stock du Stylo à 6, ajoute une Gomme (ID 106, Papeterie, 5 DH, stock 8),puis retire le Sac (ID 104). 

produitsCopy.forEach(product =>{
    if( product.id ===  102){
        product.stock = 6
    }
})
console.log(produitsCopy);

produitsCopy.push (
{
    id: 106,
    nom: 'Gomme',
    categorie: 'Papeterie',
    prix: 5,
    stock: 9
  },
)

produitsCopy.splice(3, 1);
console.log(produitsCopy);

// 04. Sélectionner les produits en rayon · 15 min
// const produits = [
// { id: 101, nom: "Cahier", categorie: "Papeterie",
// prix: 20, stock: 5 },
// { id: 102, nom: "Stylo", categorie: "Papeterie",
// prix: 10, stock: 0 },
// { id: 103, nom: "Trousse", categorie: "Accessoires",
// prix: 35, stock: 3 },
// { id: 104, nom: "Sac", categorie: "Sacs",
// prix: 120, stock: 2 },
// { id: 105, nom: "Classeur", categorie: "Papeterie",
// prix: 30, stock: 4 }
// ];

// • Avec filter(), garde les produits dont le stock est supérieur à 0.

let resultzzz = produits.filter(produit => produit.stock > 0 )
console.log(resultzzz);

// Fais un deuxième filtre pour garder les produits de la catégorie « Papeterie » dont le stock est supérieur à 0.

let resultss = produits.filter(produit => produit.stock > 0 && produit.categorie === "Papeterie" )
 console.log(resultss);


// 05. Préparer les étiquettes · 15 min
// • Avec map(), crée un tableau qui contient uniquement les noms.
    
let names = produits.map(produit => produit.nom)

console.log(names);


// • Avec un second map(), crée un tableau d’étiquettes au format « Nom - Prix DH ».

let result = produits.map(produit => produit.nom + " " + produit.prix + "DH")

console.log(result);

// 06. Calculer les totaux du stock · 20 min
// • Avec reduce(), calcule le nombre total d’unités disponibles.

let results = produits.reduce ((totat , current) => totat + current.stock
,0)

console.log(results);

// • Avec un second reduce(), calcule la valeur totale du stock. Pour chaque produit, multiplie son prix
// unitaire par son stock.

let ValeurTotal = produits.reduce((total , current) => total + current.prix * current.stock, 0)

console.log(ValeurTotal);


// 07. Retrouver un produit · 10 min
// • Avec find(), récupère le produit d’ID 103. Réessaie avec l’ID 999.

let searshFor103 = produits.find(produit => produit.id === 103) // the searsh for the product number 199 returns UNDEFIND becaUse teh product doesnt exixst
console.log(searshFor103);


// • Avec findIndex(), récupère la position de ces deux ID dans le tableau.

let indexofproduct = produits.findIndex(produit => produit.id === 103) // the searsh for the product number 199 returns -1 becaUse teh product doesnt exixst

console.log(indexofproduct);

// 08. Détecter une rupture · 7 min
// • Avec some(), vérifie si au moins un produit a un stock égal à 0.

let verifwithsome = produits.some(produit => produit.stock === 0)

console.log(verifwithsome);

// 09. Contrôler l’inventaire · 8 min
// • Avec every(), vérifie que tous les prix sont strictement positifs, puis que tous les stocks sont
// strictement positifs.

let verfifwithevery = produits.every(produit => produit.stock > 0)
console.log(verfifwithevery);

// for the prix it retuen treu becaus all prices are greater than 0 . for the stock it returned false because 
// there is a stock with 0 in its value .

// 10. Produire un bilan de la papeterie · 15 min
// • Avec filter(), isole les produits de papeterie en stock. Applique ensuite map() et reduce() à cette
// sélection pour obtenir ses noms et sa valeur totale.

let resultPaperteiie = produits.filter(produit => produit.categorie === "Papeterie")
console.log(resultPaperteiie);

let productsnames = produits.map(produit => produit.nom)

console.log(productsnames);

let valeurTot = produits.reduce((total , current) => total + current.prix * current.stock ,0)

console.log(valeurTot);






// Explique comment find(), findIndex() et some() répondent à trois besoins différents.

// find() goes through the array and returns the first element that meets its condition, it returns
//  UNDEFIND if it doenst find its target. 
// findinex() does the does the same and returns the index of the target element. otherwise, it returns -1 
// some() checks teh array and returns True if it finds at least its target. otherwise, thisit returns false
