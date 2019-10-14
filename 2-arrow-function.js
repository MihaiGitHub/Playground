// Arrow functions don't bind their own "this" value like standard functions which makes
// them poor candidates for methods; Great candidates for everything else

// ES5
// const square = function (x) {
//     return x * x
// }

// ES6: Same as above
// Short hand syntax; anything after the arrow is returned
//const square = (x) => x * x

//console.log(square(3))

// Standard function as property on an object
const event1 = {
    name: 'Birthday Party',
    printGuestList: function () {
        console.log('Guest list for ' + this.name)
    }
}

event1.printGuestList() // Guest list for Birthday Party

// Standard function ES6 syntax as property on an object
const event2 = {
    name: 'Birthday Party',
    printGuestList() {
        console.log('Guest list for ' + this.name)
    }
}

event2.printGuestList() // Guest list for Birthday Party

// Arrow function as property on an object
const event3 = {
    name: 'Birthday Party',
    printGuestList: () => {
        // Do not have access to "this" as a reference to this object
        console.log('Guest list for ' + this.name)
    }
}

event3.printGuestList() // Guest list for undefined

const event4 = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        // Standard functions have their own "this" binding so this inside the function will refer
        // to the function itself, not name of object so will be undefined
        this.guestList.forEach(function(guest) {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event4.printGuestList() // Guest list for undefined

// Solve issue above with arrow function
const event5 = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        // Arrow functions don't bind their own "this" value; they access the "this" value in the context in
        // which they are created inside of printGuestList()
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event5.printGuestList() // Guest list for undefined 
