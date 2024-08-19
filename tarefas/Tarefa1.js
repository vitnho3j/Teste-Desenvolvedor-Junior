function transformData(array) {
    if (Array.isArray(array) === false){
        console.log(`O conteúdo "${array}" passado não é um array`)
    } else {
        const activeUsers = array.filter((value)=>{
            return value.isActive === true
        }).map((element)=>{
            return{
                'id':element.id,
                'name':element.name
            }
        }).sort((a, b)=>{
            if (a.name < b.name) return - 1
        })
        console.log(activeUsers)
    }
}

const users = [
    { id: 3, name: 'Charlie', age: 22, isActive: true },
    { id: 1, name: 'Alice', age: 25, isActive: true },
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 5, name: 'Catherine', age: 25, isActive: true },
    { id: 4, name: 'Arnold', age: 22, isActive: true },
    { id: 4, name: 'Sophia', age: 23, isActive: true },
    { id: 5, name: 'Raymond', age: 40, isActive: true },
    { id: 4, name: 'Jonn', age: 35, isActive: false },
    { id: 5, name: 'Jennifer', age: 21, isActive: false },
];

const notArray = "not a array"

transformData(notArray)
transformData(users)