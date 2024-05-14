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

## M004 | OOP [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

-   [x] namespaces, classes
-   [x] heritage, override
-   [x] interfaces, duck typing
-   [x] Lab: Vehicles
-   [x] Lab: ILoadable

<!-- LAB
  Programmieren Sie eine öffentliche Transportmittel-Klasse mit folgenden Eigenschaften (Properties):
  -  Modell
  -  Maximal-Geschwindigkeit
  -  Preis
  # -  Aktuelle Geschwindigkeit
  -  Zustand (aus/an)
  und folgenden Methoden:
  -  Beschleunige: Erhöht die Geschwindigkeit, darf aber Maximal-Geschwindigkeit nicht überschreiten
  -  Bremse: Setzt die Geschwindigkeit runter, darf aber in den Minus-Bereich nicht reingehen
  -  StarteMotor: Wechselt von Zustand aus zu an
  -  StoppeMotor: Wechselt von Zustand an zu aus
  -  BeschreibeMich: Gibt Informationen über das Transportmittel als String zurück
  Überlegen Sie welche Datentypen die Eigenschaften am besten abbilden und welche Zugriffsmodifizierer (public/ private) geeignet sind. Programmieren Sie zudem einen oder mehrere Konstruktoren.

  Legen Sie eine Instanz der Klasse Transport im FuhrparkKonsument an. Rufen Sie die Methode ‚BeschreibeMich‘ auf.
-->

<!-- LAB
  Implementieren Sie ein Interface, welches die Fähigkeit eines Transportmittels beschreibt,
  andere Transportmittel mitzutransportieren (z.B. Schiffe die Autos transportieren).
  Überlegen Sie, welche Methoden so eine Klasse implementieren sollte und
  implementieren Sie dann für die Klassen Schiff und Flugzeug das Interface.
  Erweitern Sie die Klassen Schiff und Flugzeug zudem so, dass es ein Transportmittel-Objekt aufnehmen und
  in seiner BeschreibeMich()-Methode Informationen darüber ausgeben kann.

  Schreiben Sie danach eine neue Methode, welche als Parameter zwei Transportmittelobjekte übernimmt und
  nach Prüfung der Interfaces entweder ein Objekt auf das andere belädt oder eine Fehlermeldung ausgibt.
-->

## M101 | [GETTING STARTED](https://angular.io/guide/setup-local)

-   [x] ng cli
-   [x] vscode extensions
-   [x] project structure
-   [x] ecosystem
