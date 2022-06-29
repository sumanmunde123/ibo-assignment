
const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];


// 1st condition




const getUniqueProductCount = listOfProducts.reduce((accumulator, currEle) => {

    if (accumulator[currEle.productName]){
       accumulator[currEle.productName] = ++accumulator[currEle.productName]
    }
    else {
        accumulator[currEle.productName] = 1;
    }
    return accumulator
}, {})

console.log(getUniqueProductCount);

// 2nd condition


const obj = {};
const arr = [];

function getUniqueProducts(){

listOfProducts.forEach((elem, i) => {
    if(obj[elem.productName]){
        elem.quantity += obj[elem.productName].quantity;
        obj[elem.productName].quantity = elem.quantity;

        arr[obj[elem.productName].index] = elem;
    }
    else {
        obj[elem.productName] = {index: i, quantity:elem.quantity}
        arr.push(elem)
    }
    
})
console.log(arr);
}
getUniqueProducts()