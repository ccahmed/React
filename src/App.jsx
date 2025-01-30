import React from 'react';
import { findLongestWord, countOccurrences, calculateTotalScore, Tab, addEntry } from './Ecmascript/exercices';
import { searchByID } from './Ecmascript/functions';

function App() {
    // Tester les fonctions
    const longestWord = findLongestWord(["apple", "banana", "strawberry", "blueberry"]);
    const occurrences = countOccurrences([["apple", "banana"], ["apple", "orange"], ["banana", "orange", "apple"]]);
    const totalScore = calculateTotalScore([45, 30, 60, 80, 40, 50]);

    // Ajouter des entrées et tester la recherche par ID
    addEntry("Alice", 25);
    addEntry("Bob", 30);
    addEntry("Charlie", 22);
    const foundUser = searchByID(Tab, 2);

    return (
        <div>
            <h1>Test des Fonctions</h1>
            <p><b>Mot le plus long :</b> {longestWord.mot} ({longestWord.longueur} lettres)</p>
            <p><b>Occurrences des mots :</b> {JSON.stringify(occurrences)}</p>
            <p><b>Total des notes après bonus :</b> {totalScore}</p>
            <p><b>Utilisateurs ajoutés :</b> {JSON.stringify(Tab)}</p>
            <p><b>Recherche par ID 2 :</b> {foundUser ? JSON.stringify(foundUser) : "Non trouvé"}</p>
        </div>
    );
}

export default App;
