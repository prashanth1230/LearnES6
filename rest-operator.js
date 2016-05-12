function passManyParameters(a, b, ...args) {
    console.log(`Printing the named parameters: ${a}, ${b}`)
    console.log(`Printing the unnamed parameters: ${args}`)
}

passManyParameters(1, 2, 3, 4, 5)