interface BookDetails {
    title: string;
    pages: number;
    author?: string;
}

// Eigenschaften aus einem Objekt
const bookDetails: BookDetails = {
    title: 'TypeScript Deep Dive',
    pages: 200,
};

const { title, pages }: BookDetails = bookDetails;

function publishBook({ title, pages }: BookDetails) {
    console.log(`Book ${title} published with ${pages} pages.`);
}

// Elemente aus einem Array
const numbers: number[] = [1, 2, 3];
const [first, second, third]: number[] = numbers;
