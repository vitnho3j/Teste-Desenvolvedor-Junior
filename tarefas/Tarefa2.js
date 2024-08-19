
/* OBS: NENHUM DOS USERNAMES DOS DADOS DA API FICTÍCIA COMEÇAM COM A LETRA "C"
POR CONTA DISSO UMA LISTA VAZIA ESTA SENDO RETORNADA, PARA NÃO ALTERAR 
O QUE FOI REQUISITADO, DEIXEI COM ESSA INICIAL MESMO, CASO QUEIRAM TESTAR
O FUNCIONAMENTO, POR FAVOR, ADICIONEM OUTRA LETRA (Exemplo: "D") */

function fetchUserData(){
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data =>{
            const filteredData = data.filter((value)=>{
                return value.username.charAt(0) === "C" 
            })
            resolve(filteredData) 
        })
    })

}

fetchUserData()
.then(filteredData => {
    console.log(filteredData)
})
.catch(error => {
    console.error(`Error: ${error}`)
})

