
//rest
//java :varArgs
//c# : params
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products[0])
}

// console.log(typeof showProducts) 

// showProducts(10,"Elma","armut")

//Spread:ayrıştırmak
let points = [1, 2, 3, 50, 4, 14, 60]

// console.log(...points)
// console.log(Math.max(...points))

// console.log(..."ABC","D",..."EFG","H")

//Destructuring:elimizde ki arraylerin değerlerini değişkenlere atamak için kullanılır
let populations = [10000, 20000, 30000]
let [small, medium, high] = populations
// console.log(small,medium,high)

function someFunction([samll1], number) {
    console.log(samll1)

}
someFunction(populations)


//object

let category = { id: 1, name1: "içecek" }
// console.log(category.id)
// console.log(category["name"])

//istedğimiz elemanları değişkenlere atamak
let { id, name1 } = category
console.log(id)
console.log(name1)


