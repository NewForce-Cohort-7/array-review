// forEach()
// filter()
// map()
// find()
// reduce()
// sort()

import { getBusinesses } from "./database.js";

const businessesArray = getBusinesses()

// forEach()

businessesArray.forEach(singleBusiness => {
    // console.log(singleBusiness)
})

// JavaScript loop

for(let i = 0; i < businessesArray.length; i++){
    // console.log(businessesArray[i])
}

// filter ()

const NewYorkBusinesses = businessesArray.filter(singleBusiness => {
    let inNewYork = false
    if(singleBusiness.addressStateCode === "NY"){
        inNewYork = true
    }
    return inNewYork
})

// console.log(NewYorkBusinesses)

// Javascript loop

let filteredBusinesses = []

for(let i = 0; i < businessesArray.length; i++){
    if(businessesArray[i].addressStateCode === "NY"){
        filteredBusinesses.push(businessesArray[i])
    }
}
// console.log(filteredBusinesses)


// map()

const agents = businessesArray.map(singleBusiness => {
    return singleBusiness.purchasingAgent
})

// console.log(agents)

// Javascript Loop

const newAgentArray = []

for(let i = 0; i < businessesArray.length; i++){
    newAgentArray.push(businessesArray[i].purchasingAgent)
}
// console.table(newAgentArray)


//lightning exercise
// {
//     "fullName": "Kaylee Gutkowski",
//     "company": "Highnix",
//     "phoneNumber": "235.266.6278"
// }

const agentInformation = businessesArray.map(singleBusiness => {
    return {
        fullName: singleBusiness.purchasingAgent.nameFirst + ' ' + singleBusiness.purchasingAgent.nameLast,
        company: singleBusiness.companyName,
        phoneNumber: singleBusiness.phoneWork
    }
})
// console.table(agentInformation)

// .find()

const foundBusinesses = (searchTerm) => {
    return businessesArray.find(singleBusiness => {
        return singleBusiness.companyName.includes(searchTerm)
    })
}
// console.log(foundBusinesses('Stan'))
// console.log(foundBusinesses('Care'))





const findBusinesses = (searchTerm) => {
    let findSingleBusiness = ""
    for(let singleBusiness of businessesArray){
        if (singleBusiness.companyName.includes(searchTerm)){
            findSingleBusiness = singleBusiness.companyName
        }
    }
    return findSingleBusiness
}

// console.log(findBusinesses('Stan'))
// console.log(findBusinesses('Care'))

// .reduce()

businessesArray.forEach(singleBusiness => {
let totalOrders = 0
    singleBusiness.orders.forEach(order => totalOrders += order)
    console.log(totalOrders)
}
)


businessesArray.forEach(singleBusiness => {
    const totalOrders = singleBusiness.orders.reduce((currentTotal, nextValue) => currentTotal += nextValue)
    console.log(totalOrders)
})

const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((finalTotal, singleRainfall) => finalTotal += singleRainfall)

console.log(totalRainfall)

// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const finalIntegers = integers.sort((a, b) => a < b ? 1 : -1).filter(number => number <= 19).map(newNumber => {
    return newNumber * 1.5 - 1
})
console.log(finalIntegers)