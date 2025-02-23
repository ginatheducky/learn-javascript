function sayHello() {
    console.log("Hello World!");
}

sayHello();


// when you are declaring a func, and add the vars to be passed in these are the parameters
function add(num1, num2) {
    console.log(num1 + num2);
}

// when you pass in values, these are arguements
add(5, 10);


function subtract(num1, num2) {
    return num1 - num2;
}

const result = subtract(10, 2);
console.log(result);


// default params
function registerUser(user = 'Bot') {
    return user + ' is registered.';
}

console.log(registerUser());

// rest params
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1,2,3,4));


// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in.`;
}

const user = {
    id: 1,
    name: 'Jane',
};

console.log(loginUser(user));
console.log(
    loginUser({
        id:2, 
        name: 'Sarah'
    })
);


// Arrays as params
function getRandom(arr) {
    // create random number
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    console.log(item);
}

getRandom([3, 5,4,3,2])