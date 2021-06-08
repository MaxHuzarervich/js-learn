const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//поверхностная копия объекта

const copyUser = {...user}

console.log(user === copyUser)
console.log(user.friends === copyUser.friends)

//deep copy object
const deepCopyUser = {...user,friends: [...user.friends]}

console.log(user.friends === deepCopyUser.friends)

//поверхностная копия массива

const copyStudents = {...students}

console.log(students === copyStudents)
console.log(students[1] === copyStudents[1])

//deep copy array students

let deepCopyStudents = students.map(st => ({...st}))

console.log(students === deepCopyStudents)
console.log(students[1] === deepCopyStudents[1])

//отсортировать deepCopyStudents по алфавиту

// function sortFn(a,b){
//     switch (a.name > b.name) {
//         case true:
//             return 1
//         case false:
//             return -1
//         default:
//             return 0
//     }
// }

 // let sortByName = students.sort(sortFn);
let sortByName = students.sort((a, b) =>  a.name > b.name ? 1 : -1 )
 // let sortByName = students.sort(sortFn);
console.log(sortByName)
//сортировка по очкам
 let sortByScores = students.sort((a, b) => b.scores - a.scores)
console.log(sortByScores)

//students у которых 100 и более баллов

let bestStudents = students.filter(st => st.scores >= 100)
console.log(bestStudents)

//вырезать 3-ч лучших студентов
let topStudents = students.splice(0,3,)
console.log(topStudents)
console.log(students)

//объединение массивов
let newDeepCopyStudents = [...deepCopyStudents,...topStudents]
console.log(newDeepCopyStudents)

//Сформируйте массив холостых студентов
let notMarriedStudents = students.filter(st => !st.isMarried)
console.log(notMarriedStudents)

//Сформируйте массив имён студентов
let studentsName = students.map(st => st.name)
console.log(studentsName)

//Сформируйте строку имён студентов, через запятую,пробел
 let nameWithComma = studentsName.join(', ')
console.log(nameWithComma)
let nameWithSpace = studentsName.join(' ')
console.log(nameWithSpace)

//добавить всем студентам св-во isStudent
let trueStudents = students.map(st => ({...st, isStudent: true}))
console.log(trueStudents)

//John женился, изменить
let studentJohnIsMarried = students.map(st => st.name === 'John' ? {...st,isMarried: true} : st)
console.log(studentJohnIsMarried)

//найти студента по имени Bob
let Bob = students.find(st => st.name === 'Bob')
console.log(Bob)

//студент с самым высоким баллом
let bestStudent = students.reduce((acc, st) => acc.scores > st.scores ? acc : st)
console.log(bestStudents)

//sum scores for all students
let sumScoresStudents = students.reduce((acc,st) => acc + st.scores, 0)
console.log(sumScoresStudents)

//

