import { findLongestWord, countOccurrences, calculateTotalScore, Tab, addEntry } from './es6_exercises.js';
import { searchByID } from './fonction.js';

// Tester findLongestWord
console.log(findLongestWord(["apple", "banana", "strawberry", "blueberry"]));

// Tester countOccurrences
console.log(countOccurrences([["apple", "banana"], ["apple", "orange"], ["banana", "orange", "apple"]]));

// Tester calculateTotalScore
console.log(calculateTotalScore([45, 30, 60, 80, 40, 50]));

// Ajouter des entrées et tester la recherche par ID
addEntry("Alice", 25);
addEntry("Bob", 30);
addEntry("Charlie", 22);

console.log(Tab);
console.log(searchByID(Tab, 2)); // Recherche de l'ID 2
