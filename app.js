

function capitalizeWords(str) {
    let words = str.split(" ").map(word => {
        // let firstLetter = word.slice(0, 1);
        // let rest = word.slice(1);
        // firstLetter= firstLetter.toUpperCase();
        // return `${firstLetter}${rest}`;
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    return words.join(" ");
}


console.log(capitalizeWords("i woke up early today"));
console.log(capitalizeWords("breakfast is the most important meal of the day!"));
console.log(capitalizeWords("who doesn't like eating in the morning?"));
console.log(capitalizeWords("lorem ipsum dolor sit amet consectetur adipisicing elit. Modi asperiores incidunt repudiandae cumque voluptatum, dignissimos amet ratione aliquam quos commodiś