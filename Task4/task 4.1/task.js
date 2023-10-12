let name = prompt("Введите ваше имя: ");
name = name.trim();
console.log(name.length);
while (name.length === 0) {
    name = prompt("Введите имя еще раз: ");
    name = name.trim();
}
let age = prompt("Введите ваш возраст: ");
age = age.trim();
while (age < 0 || !age) {
    age = prompt("Введите корректный возраст: ");
    age = age.trim();
}

name = name[0].toUpperCase() + name.slice(1);
alert(`Привет, ${name}, тебе уже ${age} лет!`);
