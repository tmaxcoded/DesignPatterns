import { Sorter } from "./Sorter";

class _Node {
    _next: _Node | null = null;
    constructor(public data:number){}
}

export class LinkedList extends Sorter{
    
    constructor() {
        super();

    }
    head: _Node | null = null;

    add(data: number): void {
        const node = new _Node(data);

        if(!this.head){
            this.head =node;
            return;
        }
        let tail = this.head

        while(tail._next){
             tail = tail._next;
        }

        tail._next = node;
       
    }

    get length(): number {
        if(!this.head){
            return 0;
        }

        let length = 1;
        let node = this.head;
        while(node._next){
            length++;
            node = node._next;
        }

        return length;
    }


    at(index: number): _Node {
        if(!this.head){
            throw new Error('Index out of bound');
        }

        let counter = 0;
        let node:_Node | null = this.head;

        while(node){
            if(counter === index){
                return node;
            }

            counter++;
            node = node._next;
        }

        throw new Error('Index out of bounds');
    }

    compare(leftIndex:number, rightIndex:number): boolean{
        if(!this.head){
            throw new Error('List is empty');
        }

        return this.at(leftIndex).data > this.at(rightIndex).data
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    print(): void {
        if(!this.head){
            return ;
        }

        let node : _Node | null = this.head;
        while(node){
            console.log(node.data);
            node = node._next;
        }
    }

}