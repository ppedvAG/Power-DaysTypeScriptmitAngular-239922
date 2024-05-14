interface CatFact {
    fact: string;
    lenght: number;
}

(async () => {
    try {
        const result: Response = await fetch('https://catfact.ninja/fact');
        const json: CatFact = await result.json();
        console.log(json.fact);
    } catch (error) {
        console.log(error);
    }
})();
