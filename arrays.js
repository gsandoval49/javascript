let synonyms = ["plethora", "array", "cornucopia"]; // array pointing to synonyms 
synonyms.length // gives me 3, number of syn in array
synonyms[2] // returns cornucopia

// pop() function will take the last item in the array and assign the value to lastItem
let lastItem = synonyms.pop();
synonyms.length // pop() also takes out last item, so now only 2 items in array

synonyms.push("multitude"); // adds to the end of array 

// javascript will behave differently, look out for how it behaves
["lonely"][0]
// 'lonely'
"lonely"[0]
//'l'
"lonely"[1]
//'o'
"lonely"[2]
//'n'
"lonely"[3]
//'e'

// sort() method
['d', 'a', 'b'].sort();
// returns letters sorted a,b,d
