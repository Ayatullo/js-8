




// []<----push(45) je push("text")
// [45,'text']->pop()-text ,pop()---45

// unshift(100)-->[]-->[100]
// unshit(101)-->[100]-->[100,101]

// shift()-->[101,100]-->[100]
// shift()-->[101] ->[]

// const users = [
//     {
//         name: "Kutman",
//         age: 45
//     },
//     {
//         name: "Kolbai",
//         age: 41
//     },
//     {
//         name: "Salamat",
//         age: 25
//     }
// ]
// // .map( callbackFunction(value, index, array) {} ) --синтаксис
// const userNames = users.map(getNames)

// function getNames(user, index, array){
//     console.log(user, '---user---');
//     return user.age
// }

// console.log(userNames);
// // .filter( callbackFunction(value, index, array) {} )

// const oldMan = users.filter((user, index, arr) => { 
//     return user.name === "User 1"
// })

// console.log(oldMan);


// const numbers = [2, 2, 6, 8,]// ---->[4,8,12,64]

// const fruits = ["Banana", "Apple", "PineApple", "Strawberry",]


const fruits = ["Banana", "Apple", "PineApple", "Strawberry",]
function getFruitNames(fruitsArray) {
    const fruitNames = []; for (let i = 0; i <
        fruitsArray.length; i++) {
        if (fruitsArray[i] !== "Apple") {
            fruitNames.push(fruitsArray[i]);
        }
    } return fruitNames;
}

const fruitNames = getFruitNames(fruits); console.log(fruitNames); // Output:
["Banana", "PineApple", "Strawberry"]

