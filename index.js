// Code your solution here

// RETURN A NEW ARRAY FILLED WITH VALUES 
// WHAT EVER MAKE THE CALLBACK TRUE WILL BE ADDED TO 
// THE NEW ARRAY 

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    const callback = (driver) => {
        return driver.toLowerCase() === name.toLowerCase()
    }
    const newArr = drivers.filter(callback)
    return newArr
}

// const newArr = driversArr.filter((driver) => driver.toLowerCase() === name.toLowerCase())
// return driver

function fuzzyMatch(drivers, name) {
    const callback = function(driver) {
        return driver.startsWith(name);
    }
    const newArr = drivers.filter((driver) => driver.startsWith(name))
    return newArr
}

function matchName(drivers, name){
    const callback = (driverObj) => {
        const driver = driverObj.name 
        return driver === name 
    }

    return drivers.filter(callback)
}