type StringNumberPair = [string, number];

let myPair: StringNumberPair = ['foo', 32];
myPair[1] = -1; // so greife ich auf ein Item des tuples zu; nicht mit array zu verwechseln
// myPair[0] = 12; // geht nicht weil muss string sein
// myPair[2] = 12; // geht nicht weil nicht im tuple definiert ist
console.log('Ausgabe meines tuples', myPair);
console.log('Type of StringNumberPair', typeof myPair);

// don't use enums. Sie sind sehr komisch...
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

enum Direction2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}

// .js source ansehen, was tsc daraus macht
console.log('Wie viele Werte sind in Direction drin?', Object.values(Direction).length);
console.log('Welche Werte sind in Direction drin?', Object.values(Direction));
console.log('Type of direction is', typeof Direction); // gibt object aus

// Bessere Alternativen zu enums: Type-Literal
type DirectionType = 'Up' | 'Down' | 'Left' | 'Right';
let myDirection: DirectionType = 'Up';

// Zweite Alternative ist ein readonly object.
// Details zur Erklaerung hier: https://youtu.be/jjMbPt_H3RQ
const directionObj = {
    up: 1,
    down: 2,
    left: 3,
    right: 4,
} as const;

// directionObj.down = 3; // as const verhindert die Zuweisung eines anderen wertes.

type DirectionObj = typeof directionObj;
