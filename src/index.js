
import { NegatifPositif } from "./rattrapage1.js";
import { Echanger, Ranger, NombreUn } from "./rattrapage2.js";
import { triLignes } from "./rattrapage3.js";


console.log("EXERCICE 1 ");

let tableau1 = [3, -1, 0, 4, 5, -3, -2];

console.log("Avant :", tableau1);

NegatifPositif(tableau1);

console.log("Après :", tableau1);


console.log("EXERCICE 2.1");

let tableau2 = [0, 1, 0];

console.log("Avant :", tableau2);

Echanger(tableau2, 1, 2);

console.log("Après :", tableau2);


console.log("EXERCICE 2.2");

let tableau3 = [0, 1, 0, 0, 1, 0];

console.log("Avant :", tableau3);

Ranger(tableau3);

console.log("Après :", tableau3);


console.log("EXERCICE 2.3");

let tableau4 = [0, 0, 0, 0, 1, 1];

console.log("Tableau :", tableau4);

console.log("Nombre de 1 :", NombreUn(tableau4));


console.log("EXERCICE 3");

let M = [
    [0, 0, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 0]
];

console.log("Matrice avant :");

for (let i = 0; i < M.length; i++) {
    console.log(M[i]);
}

triLignes(M);

console.log("Matrice après triLignes :");

for (let i = 0; i < M.length; i++) {
    console.log(M[i]);
}