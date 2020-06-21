
const ordernar = (array) => {
    return [...array].sort()
}

const nums = Object.freeze([3, 1, 7, 9, 4, 6])
const numsOrdenados = ordernar(nums)

console.log(nums)
console.log(numsOrdenados)