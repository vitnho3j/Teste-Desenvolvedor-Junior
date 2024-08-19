const items = [
    { name: 'apple', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'banana', category: 'fruit' },
    { name: 'broccoli', category: 'vegetable' }
];

function groupByCategory(array) {
    if (!Array.isArray(array)) {
        console.log(`O conteúdo "${array}" passado não é um array`);
        return;
    }

    const result = array.reduce((acc, item) => {
        const { category } = item;
        if (!acc[category]) {
            acc[category] = []; 
        }
        acc[category].push(item); 
        return acc;
    }, {});

    console.log(result);
    return result;
}

const notArray = "not a array"

groupByCategory(notArray)
groupByCategory(items);
