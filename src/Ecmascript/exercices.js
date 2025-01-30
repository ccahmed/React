export const findLongestWord = (words) => {
    let wordObjects = words.map(word => ({ mot: word, longueur: word.length }));
    let longestWord = wordObjects.reduce((max, current) => current.longueur > max.longueur ? current : max);
    return longestWord;
};

export const countOccurrences = (array) => {
    return array.flat().reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
};

export const calculateTotalScore = (scores) => {
    return scores
    .map(score => score < 50 ? score + 15 : score)
    .filter(score => score > 50)
    .reduce((total, score) => total + score, 0);
};

let lastID = 0;
export const Tab = [];

export const addEntry = (name, age) => {
    lastID++;
    Tab.push({ id: lastID, name, age });
};

  



export const findLong = (words) => { 
    console.log(words);
  
    let wordsWithLength = words.map(word => 
      ({ mot: word, longueur: word.length })
    );
  
    let longestWord = wordsWithLength.reduce(
      (max, current) =>
        current.longueur > max.longueur ? current : max
    );
  
    console.log("wordsWithLength:", JSON.stringify(wordsWithLength, null, 2));
    console.log("longestWord:", JSON.stringify(longestWord, null, 2));
  
    return longestWord;
  };
  