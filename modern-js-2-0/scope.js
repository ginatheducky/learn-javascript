
const x = 100; // global scope
console.log(x, ' in global');

function run() {
    console.log(window.innerHeight);
    console.log(x, 'in function');
}

run();

function add() {
    const y = 50;
    console.log(y);
}

add();