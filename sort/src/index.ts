import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

const numbersCollections = new NumberCollection([10, 3, -5, 0]);


console.log(numbersCollections.data);

numbersCollections.sort();
console.log(numbersCollections.data);

const charactersCollection = new CharacterCollection('Xaayb');


console.log(charactersCollection.data);

charactersCollection.sort();
console.log(charactersCollection.data);




const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(-4);



console.log(linkedList.print());

linkedList.sort();
console.log(linkedList.print());

