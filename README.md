# Power-Days TypeScript mit Angular

Kurs Repository zu Kurs Power-Days: TypeScript mit Angular der ppedv AG

## M000 | VORSTELLUNG

-   [x] [Visual Studio Code](https://code.visualstudio.com/)
-   [x] [vsc-shortcuts.md](SHORTCUTS-VSCODE.md)
-   [x] [textEditorShortcuts.md](SHORTCUTS-EDITOR.md)

## M001 | [GRUNDLAGEN](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

-   [x] VS Code
-   [x] node & [npm](https://www.npmjs.com/)
-   [x] tsc, Greeter
-   [x] Lab: LoginForm

<!-- LAB
  # Aufgabe 'login form'

  Erstellen Sie eine Mini-Anwendung, die nach einem Benutzernamen und nach einem Passwort fragt und dann den Benutzer begrüßt.
  Jedes Passwort wird erstmal akzeptiert.
  Viel Erfolg!
-->

## M002 | [TYPESYSTEM](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

-   [x] primitives, null, undefined
-   [x] object, arrays
-   [x] union type
-   [x] type aliases
-   [x] tuples
-   [x] enums

## M003 | TYPE [NARROWING](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

-   [x] any, void, unknown, never
-   [x] typeof, instanceof, in, keyof
-   [x] type casting, assertion
-   [x] function type
-   [x] arrow function
-   [x] template literals

## M005 | [MODULE & SCOPES](https://www.typescriptlang.org/docs/handbook/modules/theory.html)

-   [x] CommonJS, ES Modules
-   [x] Scopes, var, let, const
-   [x] ambients, [declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#handbook-content)

## M007 | GENERICS & UTILITY TYPES

-   [x] Generics
-   [x] Utility Types

## M006 | ECMAScript

-   [x] Destructuring assignment
-   [ ] Iterators, Generators
-   [x] Promises, async/await
-   [x] Lab: fetch Todo-Liste

<!-- LAB
  Holen Sie von der Seite http://jsonplaceholder.typicode.com/
  alle Todos mit dem Code

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))

  Die geholten Daten müssen einem Array mit Elementen von einem vorgegebenen Interfacetyp entsprechen.

  Geben Sie die Titel der Todos in einer Liste aus.
-->
