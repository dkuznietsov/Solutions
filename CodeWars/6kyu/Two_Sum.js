function twoSum(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if(numbers[i] + numbers[i+1+j] === target) return [i, i+1+j];
        }
    }
}