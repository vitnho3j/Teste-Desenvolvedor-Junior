const array1 = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Sophia', age: 25 },
    { id: 4, name: 'Raph', age: 26 },
  ];
  
  const array2 = [
    { id: 1, age: 26, email: 'alice@example.com' },
    { id: 2, name: 'Charlie', age: 22 },
    { id: 3, name: 'Raymond', age: 30, email: 'alice@example.com'},
    { id: 5, name: 'Richard', age: 26, email: 'richard@example.com'  },
  ];
function mergeArrays(array1, array2){
    if (Array.isArray(array1) === false){
        console.log(`O conteúdo "${array1}" passado não é um array`)
    } else {
        const merged = [];

        const combined = [...array1, ...array2];
    
        const map = new Map();
        
        combined.forEach(item => {
            if (map.has(item.id)) {
                map.set(item.id, { ...map.get(item.id), ...item });
            } else {
                map.set(item.id, item);
            }
        });
    
        map.forEach(value => merged.push(value));
    
        return merged;
        }
}
const notArray = "not a array"
const result = mergeArrays(array1, array2)
const result2 = mergeArrays(notArray)
console.log(result)

