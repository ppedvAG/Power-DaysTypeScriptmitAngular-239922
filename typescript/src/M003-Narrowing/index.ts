let n = 10;
let numberAsString = n.toFixed(2);
console.log('number n is', numberAsString);

let value: unknown = 'this is a string';
value = 10;
// value.toFixed() // Error weil value is unkown

function thisFuncWillFail(): never {
    throw new Error('oh no............!');
}

// Narrowing
const someDate = new Date(1999, 12, 31);
const someString = new String('foo');

interface IFoo {
    someAttr: string;
}

const bar: IFoo = { someAttr: '' };

console.log('type of Date', typeof someDate); // returns object
console.log('instance of date', someDate instanceof Date); // returns true
console.log('instance of someString', someString instanceof Date); // returns false
console.log('instance of someString', bar instanceof Object); // returns true

// in ist ein operator in JavaScript
console.log('check by property', 'someAttr' in bar); // returns true
console.log('check by property', 'notExistant' in bar); // returns false
console.log();

function someAmbigiousFunc(arg: string | number) {
    if (typeof arg === 'number') {
        const nowItsAString = arg.toFixed();
        console.log('This is a string now', nowItsAString);
    } else if (arg.match('Hello')) {
        // Typescript weiss implizit, dass es ein string sein muss, weil oben auf number geprueft wurde.
        console.log('Jackpot gewonnen!');
    }
}

// Type Assertion
let someValue: unknown = 'Some string';
let strLength = (<string>someValue).length;
let sameLength = (someValue as string).length;

// Type Castings vs. Type Assertion
let someNumberAsString = '0';
// let num0 = <number>someNumberAsString; // geht nicht, weil Type Assertion und kein Casting!
let num1 = Number(someNumberAsString); // Casting zu number
let num2 = parseInt(someNumberAsString); // Casting zu number
let num_short = +someNumberAsString; // Casting zu number (shortcut)
console.log('converted to num', num1, typeof num1);

let bool = Boolean(num2); // Casting zu einem boolean
let bool_short = !num_short; // Casting zu einem boolean (shortcut)
console.log('converted to boolean', bool, typeof bool);

let newString = String(bool);
console.log('converted to string', newString, typeof newString);

// Funktionen
function repeatString(text: string, times?: number): string | undefined {
    if (times && times > 0) {
        return text.repeat(times ?? 1);
    }
    return undefined;
}
function repeatStringAlt(text: string, times = 5): string {
    return text.repeat(times);
}

console.log('1 star', repeatString('*', 1));
console.log('default length of stars', repeatStringAlt('*'));

let arrayOfFalsyValues = ['', undefined, null, 0];

function padLeft(text: string, padding: number | string): string {
    if (typeof padding === 'number') {
        return ' '.repeat(padding) + text;
    }
    return padding + text;
}

function printAll(strs: string | string[] | null) {
    if (strs === null) return;
    // Unterscheidung nicht moeglich, da object [] oder null sein kann
    if (typeof strs === 'object') {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === 'string') {
        console.log(strs);
    } else {
        // do nothing
    }
}

// Pfeilfunktionen
let add = (x: number, y: number): number => x + y;

// Template literals
// In C#: var myString = $"My string {var1} bla blub.";
console.log(`String template with variables
     ${num1}
     and very long stories
     ${bool}
`);

function myTag(strings: TemplateStringsArray, personExp: string, ageExp: number) {
    const ageStr = ageExp < 100 ? 'youngster' : 'centenarian';
    return `${strings[0]}${personExp}${strings[1]}${ageStr}${strings[2]}`;
}
const person = 'Mike';
const age = 28;
const output = myTag`That ${person} is a ${age}.`;

console.log(output); // That Mike is a youngster.
