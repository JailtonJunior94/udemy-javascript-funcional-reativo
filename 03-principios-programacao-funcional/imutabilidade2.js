const nums = [4, 8, 3, 2, 9, 1, 9, 3]

// #1 - Dados mutáveis!
let totalMutavel = 0
for (let i = 0; i < nums.length; i++) {
    totalMutavel += nums[i]
}

console.log(totalMutavel)

// #2 - Reduce
const somar = (a, b) => a + b
const totalReduce = nums.reduce(somar)
console.log(totalReduce)

// #3 - Recursividade
const somarArray = (array, total = 0) => {
    if (array.length === 0) {
        return total;
    }
    return somarArray(array.slice(1), total + array[0])
}
console.log(somarArray(nums))
