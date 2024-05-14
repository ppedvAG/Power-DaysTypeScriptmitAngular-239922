/* 
Holen Sie von der Seite http://jsonplaceholder.typicode.com/
alle Todos mit dem Code

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))

Die geholten Daten müssen einem Array mit Elementen von einem vorgegebenen Interfacetyp entsprechen.

Geben Sie die Titel der Todos in einer Liste aus.
*/

interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

async function fetchTodoList(url: string): Promise<Todo[]> {
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

async function printTodoList(take = 10, skip = 0) {
    const list = await fetchTodoList('https://jsonplaceholder.typicode.com/todos');
    console.log(`show ${take} of ${list.length} items.`);
    console.table(list.slice(skip, skip + take));
}

printTodoList();
