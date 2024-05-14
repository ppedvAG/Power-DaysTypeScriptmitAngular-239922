console.log('Start module');
setTimeout(() => console.log('2 secs later'), 2000);

let bookFromServer: BookDetails = {} as BookDetails;

function getBookDetails(): BookDetails {
    return {
        title: 'TypeScript for Dummies',
        pages: 123,
        author: 'Unknown',
    };
}

// Evolutionsschritt 1: Callback functions
// ---------------------------------------
// Häufiges Konstrukt in der Praxis sind Callback functions
const callback = () => (bookFromServer = getBookDetails());

// auch bei 0 wird Timeout nicht synchron sondern in einem anderen Zyklus ausgefuehrt
setTimeout(callback, 500);

// Abgefragtes Buch ist Leer, weil Daten 0,5 sec verzoegert gesetzt werden
console.log('Object is empty because executed in sync:', bookFromServer);

type CustomBook = BookDetails & {
    notes: string;
};

// Evolutionsschritt 2: Callback functions in Promises kapseln
// -----------------------------------------------------------
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

function createPromise(shouldWork: boolean = true): Promise<BookDetails> {
    const promise = new Promise<BookDetails>((resolve, reject) => {
        if (shouldWork) {
            setTimeout(() => resolve(getBookDetails()), 500);
        } else {
            reject('I had a bad day');
        }
    });
    return promise;
}

function addBookNotes(book: BookDetails, notes: string): CustomBook {
    return {
        ...book,
        notes,
    };
}

function printBookInfos(book: CustomBook) {
    console.log(`Fetched book with title '${book.title}' and ${book.pages} pages. \n\t--> Notes:`, book.notes);
}

const workingBook = createPromise();
workingBook.then((book) => addBookNotes(book, 'Buch mit Promises')).then((book) => printBookInfos(book));

const failingBook = createPromise(false);
failingBook
    .then(function (book) {
        return addBookNotes(book, 'Wird nicht funktionieren!');
    })
    .catch(function (reason) {
        console.error(`***ERROR***\t`, reason);
    })
    .finally(() => {
        // Abfrage aufrauemen
    });

// Evolutionsschritt 3: async/await abstrahiert Promises und macht sie lesbarer
// ----------------------------------------------------------------------------

// In C# entspricht Promise<void> dem Rueckgabewert 'Task' bzw. Task<int> === Promise<number>
async function fetchBooksAsync(shouldWork = true): Promise<void> {
    try {
        // Falls ein promise 'rejected' wird, muessen wir es mit try/catch abfangen!
        const anotherBook = await createPromise(shouldWork);
        const modifiedBook = addBookNotes(anotherBook, 'Hier haben wir async/await verwendet');
        printBookInfos(modifiedBook);
    } catch (error) {
        console.error(`Catched error:\t`, error);
    } finally {
        // Abfrage aufrauemen
    }
}

fetchBooksAsync();
fetchBooksAsync(false);
