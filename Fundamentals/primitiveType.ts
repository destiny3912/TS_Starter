let str: string = 'hello world';
console.log(str);

let num: number = 1;
console.log(num);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
num = 1.5;
console.log(num);

let isTrue: boolean = true;

let arr1: number[] = [1, 2, 3, 1.5];
console.log(arr1.toString());

let arr2: Array<number> =[1, 2, 3];
console.log(arr2.toString());

let tuple: [string, number] = ['1st', 1];
let tupleArr: [string, number][] = [['1st', 1], ['2nd', 2]];
console.log(tuple.at(1));
console.log(tupleArr[1].at(1));

enum Avengers { Capt, IronMan, Thor }
let hero: Avengers = Avengers.Capt;
let hero1: string = Avengers[0];
console.log(hero.toLocaleString());
console.log(hero1);

let str3: any = 'hello world';
let num2: any = 1;
let arr3: any = [1, 2, 3];

function print(): void {
    console.log('hellor world');
}

print();

function sum(a: number, b = 100): number {
    return a + b;
}

console.log(sum(10, 10));