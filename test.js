const value1 = 150;
const value2 = "$2300awd";

const theSumOfTwoNumbers = (n1, n2) => n1 + n2

// matriz, array, lista, vector
/////////////////0///1///2///3///4///5///6///7///8
const myArray = [
  {
    name: "Product 1",
    price: 100
  },
  {
    name: "Product 2",
    price: 200
  },
  {
    name: "Product 3",
    price: 300
  },
]

const main = () => {
  // this is my main function
  console.log("Hello World: " + value1);

  // why 12? 
  const theSum = theSumOfTwoNumbers(value1, value2);

  // The sum is: 12
  // The sum is: 3
  console.log("The sum is: " + theSum);

  // I will parse "value2" to number and I will sum it with "value1"
  const num1 = Number(value1)

  // Not a Number
  // regex to clean string as number
  // regex regular expression
  const num2AsString = value2.replace(/[^0-9]/g, '') // "2300"
  const num2 = Number(num2AsString)

  console.log(num1)
  console.log(num2)

  console.log(typeof num1)
  console.log(typeof num2)

  const theSumV2 = num1 * num2

  console.log(theSumV2)

  // console.log(myArray[2])
  // console.log(element)
  // console.log(element)
  // console.log(element)
  // products[0]

  const orderedArray = myArray.sort((a, b) => b - a)

  console.log(orderedArray)

  for (const product of myArray) {
    console.log(product.name)
  }
}

// main will execute always at the beginning
main()