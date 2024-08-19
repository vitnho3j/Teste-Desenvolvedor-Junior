const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

function countOccurrences(array){
    if (Array.isArray(array) === false){
        console.log(`O conteúdo "${array}" passado não é um array`)
    } else {
 
        const counts = array.reduce((accumulator, value) => {
            accumulator[value] = (accumulator[value] || 0) + 1;
            return accumulator;
        }, {});
        console.log(counts)
    }
}

const notArray = "not a array"

countOccurrences(notArray)
countOccurrences(fruits)
