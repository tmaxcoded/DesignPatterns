import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter{
    constructor(public data: string){super()}

    get length(): number {
        return this.data.length;
    }


    compare(leftIndex:number, rightIndex: number): boolean {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }

    swap(leftIndex:number, rightIndex:number){
        const characters = this.data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join('')
    }
}