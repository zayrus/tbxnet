const n = 148
const FIZZBUZZ = 'FizzBuzz'
const FIZZ = 'Fizz'
const BUZZ = 'Buzz'

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let fizzMod = i % 3 == 0
    let buzzMod = i % 5 == 0
    const result = fizzMod ? buzzMod ? FIZZBUZZ : FIZZ : buzzMod ? BUZZ : i

    console.log(result)
  }
}


