// Object property shorthand
const name = 'Mike'
const userAge = 28

const user = {
    name, // name: name
    age: userAge,
    location: 'Hawaii'
}

// Object destructuring
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}
// destructure properties and name label to productLabel
const { label:productLabel, stock } = product

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)