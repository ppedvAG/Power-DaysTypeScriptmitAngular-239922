const myStringReadonly = 'Hallo Welt';
// myString = "another"; // Fehler weil const readonly ist

let myStringInitial = 'Hallo Welt';
myStringInitial = 'Hi world';

let myString: string;
// console.log(typeof myString); // Verhindert Typescript weil myString noch nicht initialisiert wurde
myString = 'New string';
// myString = true; // Typescript compiler wirft Fehler weil Typ nicht passt, in JavaScript aber okay
console.log('typeof variable myString is', typeof myString);

const pi = 3.1419;
console.log('typeof variable pi is', typeof pi); // gibt number aus

let myNumber: number;
myNumber = 3;
myNumber = 3.14159;
myNumber = 42e90;
myNumber = 42 / 11;
myNumber = 0xf4;

// let hugeHex = BigInt('0x1fffffffffffff'); // nur es2020!
// console.log('typeof variable hugeHex is', typeof hugeHex); // gibt bigint aus

let howAreYou = true; // wird als
// howAreYou = 0; // Geht nicht weil variable vom typ boolean ist
console.log('typeof variable howAreYou is', typeof howAreYou); // gibt boolean aus

// Mit einem 'Union Operator' (die Pipe: |) koennen wir typescript sagen, dass unsere variable mehrere typen zulaesst
let myExtendedBoolean: boolean | number = true;
myExtendedBoolean = 0;
console.log('typeof variable myExtendedBoolean is', typeof myExtendedBoolean); // gibt number aus

let myOptionalString: string | undefined;
console.log('typeof variable myString with no assignment', typeof myOptionalString); // ist undefined weil noch nicht gesetzt
myOptionalString = 'I have choosen';
console.log('typeof variable myString with assignment', typeof myOptionalString); // ist undefined weil noch nicht gesetzt

let varWithoutValue = null;
console.log('typeof variable varWithoutValue is', typeof varWithoutValue); // gibt object aus
console.log();

// typescript feature: Object-Typ-Literal
type Person = {
    name: string;
    age: number;
};

// Objects Literals als const weil ich die object-Referenz unveraenderlich machen moechte
const firstPerson: Person = {
    name: 'Hugo',
    age: 27,
    // color: 'red' // geht nicht weil wir das nicht im Typ-Literal definiert haben
};

// firstPerson = {}; // geht nicht weil als const definiert
firstPerson.name = 'abc';
console.log('typeof variable firstPerson is', typeof firstPerson); // gibt object aus

// typescript feature interface
interface IPerson {
    firstName: string;
    lastName: string;
    nickName: string | undefined;
    color?: string; // wie nickName ist dieser Parameter optional aber muss nicht initialisiert werden
}

const secondPerson: IPerson = {
    firstName: '',
    lastName: '',
    nickName: undefined,
};
console.log('typeof variable secondPerson is', typeof secondPerson); // gibt object aus
console.log();

// Arrays in TypeScript
let myArray: number[]; // zuweisung nicht moeglich. Hier rettet uns typescript und verhindert eine zuweisung
myArray = [42, 4];
myArray[5] = 5;
myArray.push(37);
console.log('array contents', myArray);
console.log('typeof variable myArray is', typeof myArray); // gibt object aus
console.log('is myArray an array?', Array.isArray(myArray)); // gibt true aus
console.log('is secondPerson an array?', Array.isArray(secondPerson)); // gibt false aus

const mixedArray: Array<unknown> = [42, 'number', false];
console.log('typeof variable of first item in mixedArray is', typeof mixedArray[0]); // gibt number aus
delete mixedArray[0];
console.log('typeof variable of first item in mixedArray is', typeof mixedArray[0]); // gibt undefined aus

const myFunc = new Function();
console.log('typeof variable myFunc is', typeof myFunc); // gibt function aus

// Union Types
type MixedTypes = number | undefined | 'default' | 'my_awsome foo';
let varOfMixedType: MixedTypes;
varOfMixedType = 42;
varOfMixedType = 'default';
// varOfMixedType = 'abc'; // geht nicht weil kein gueltiger Typ
varOfMixedType = 'my_awsome foo';
