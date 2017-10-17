const arrayOfNumbers = [1,2,3,4,5,10,13,15,21,23,25,45,47, 1115,2003,2004]

const len = arrayOfNumbers.length
const fizz = 3
const buzz = 5
const all = fizz * buzz

const outArray = arrayOfNumbers.map( (n) => {
    return fizzBuzz(n)
})
console.log(outArray)

function fizzBuzz(number) {
    if (module(number, all)) {
        return 'FizzBuzz'
    } else if ( module(number, fizz)|| contain(number, fizz)) {
        return 'Fizz'
    } else if ( module(number, buzz) || contain(number, buzz)) {
        return 'Buzz'
    } else {
        return number.toString()
    }
}

function module(number, module) {
    return number % module == 0 
}

function contain(number, content) {
    const hasNumber = content.toString()
    return number.toString().indexOf(hasNumber) > -1
}




