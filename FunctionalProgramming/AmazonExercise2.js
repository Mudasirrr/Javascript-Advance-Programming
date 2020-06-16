// Amazon shopping
const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

let amazonHistory = []
// built own compose fn allowing any number of params
const purchaseItem = (...fns) => fns.reduce(compose);

// compose function (ramda, lodash libraries also available)
// spread operator used

// Functional programming allows adding new functions into 'purchaseItem' factory.
// bugs will be easier to check since functions are pure and mostly state gets affected instead
const compose = (f, g) => (...args) => f(g(...args));
purchaseItem(
    // functions
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
)(user, {name: 'laptop', price: 200})

function addItemToCart(user, item) {
    amazonHistory.push(user)
    const updateCart = user.cart.concat([item])
    // updates cart item
    return Object.assign({}, user, { cart: updateCart})
}

function applyTaxToItems(user) {
    amazonHistory.push(user)
    // destructuring (not have to use 'user.cart')
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
        return {
            name: item.name,
            price: item.price*taxRate
        }
    })
// return user with updated information (adds tax in this case)
return Object.assign({}, user, {cart: updatedCart})
}

function buyItem(user) {
    amazonHistory.push(user)
    return Object.assign({}, user, {purchases: user.cart})
}

function emptyCart(user) {
    amazonHistory.push(user)
    return Object.assign({}, user, {cart: []} )
}
// find out logs and using FP we can check history
console.log(amazonHistory)