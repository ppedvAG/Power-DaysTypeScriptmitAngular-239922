# Ablauf TypeScript

## M000 | VORSTELLUNG

- [ ] [Visual Studio Code](https://code.visualstudio.com/)
- [ ] [vsc-shortcuts.md](SHORTCUTS-VSCODE.md)
- [ ] Git [homepage](https://git-scm.com)
- [ ] [git-commands.md](GIT-COMMANDS.md)
- [ ] [textEditorShortcuts.md](SHORTCUTS-EDITOR.md)

## M001 | [GRUNDLAGEN](https://www.typescriptlang.org/docs/handbook/2/basic-types.html)

- [ ] VS Code
- [ ] node & [npm](https://www.npmjs.com/)
- [ ] tsc, Greeter
- [ ] Lab: LoginForm

<!-- LAB
  # Aufgabe 'login form'

  Erstellen Sie eine Mini-Anwendung, die nach einem Benutzernamen und nach einem Passwort fragt und dann den Benutzer begrüßt.
  Jedes Passwort wird erstmal akzeptiert.
  Viel Erfolg!
-->

## M002 | [TYPESYSTEM](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

- [ ] primitives, null, undefined
- [ ] object, arrays
- [ ] union type
- [ ] type aliases
- [ ] tuples
- [ ] enums
- [ ] Lab: password confirm
- [ ] Lab: Taschenrechner

<!-- LAB types
  Password-Confirm:
  Wenn der Benutzer in zwei Input-Feldern den gleichen Text eingegeben hat,
  wird eine Meldung für Erfolg gezeigt, sonst ein Fehlerhinweis.
-->

<!-- LAB Taschenrechner
  2 inputs für die Eingabe, 4 buttons für math. ops, 1 input/ output als ausgabe
  [Git](https://github.com/ppedvAG/20200427-TS-NG-VC/tree/master/vadzim/typescript/M002-Lab:-Rechner)
-->

## M003 | TYPE [NARROWING](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)

- [ ] any, void, unknown, never
- [ ] typeof, instanceof, in, keyof
- [ ] type casting, assertion
- [ ] function type
- [ ] arrow function
- [ ] template literals
- [ ] Lab: Styles

<!-- LAB structures
  Wenden Sie an allen Elementen mit der Klasse 'red' folgende Stile dynamisch (in TS) an:
  color: 'red';
  background-color: 'pink';

  Fügen Sie den Elementen auch den Text 'Klasse angewendet' hinzu.
-->

<!-- LAB tuples
  draw Polygon
-->

<!-- LAB Pizzabestellung
  [Git](https://github.com/ppedvAG/20200427-TS-NG-VC/tree/master/vadzim/typescript/M005-Lab:-PizzaBestellung)
-->

## M004 | OOP [Classes](https://www.typescriptlang.org/docs/handbook/2/classes.html)

- [ ] namespaces, classes
- [ ] heritage, override
- [ ] interfaces, duck typing
- [ ] Lab: Transportmittel
- [ ] Lab: Transportladung

<!-- LAB
  Programmieren Sie eine öffentliche Transportmittel-Klasse mit folgenden Eigenschaften (Properties):
  -  Modell
  -  Maximal-Geschwindigkeit
  -  Preis
  -  Aktuelle Geschwindigkeit
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

## M005 | [MODULE & SCOPES](https://www.typescriptlang.org/docs/handbook/modules/theory.html)

- [ ] CommonJS, ES Modules
- [ ] Scopes, var, let, const
- [ ] ambients, [declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html#handbook-content)

## M006 | ECMAScript

- [ ] Destructuring assignment
- [ ] Iterators, Generators
- [ ] Promises, async/await
- [ ] Lab: fetch Todo-Liste

<!-- LAB
  Holen Sie von der Seite http://jsonplaceholder.typicode.com/
  alle Todos mit dem Code

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => console.log(json))

  Die geholten Daten müssen einem Array mit Elementen von einem vorgegebenen Interfacetyp entsprechen.

  Geben Sie die Titel der Todos in einer Liste aus.
-->

## M007 | GENERICS & UTILITY TYPES

- [ ] Generics
- [ ] Utility Types
- [ ] Decorators

## M008 | FEHLERSUCHE

- [ ] Troubleshooting
- [ ] DevTools
- [ ] Logging
- [ ] Source Maps, debugger
- [ ] Network Monitoring
- [ ] Chrome Extensions
