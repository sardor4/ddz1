function users() {
    const users = {
        'Пользователь 1':{
            name: prompt('Введите своё имя'),
            age: +prompt('Введите свой возраст')
        },
        'Пользователь 2':{
            name: prompt('Введите своё имя'),
            age: +prompt('Введите свой возраст')
        },
        'Пользователь 3':{
            name: prompt('Введите своё имя'),
            age: +prompt('Введите свой возраст')
        },
        'Пользователь 4':{
            name: prompt('Введите своё имя'),
            age: +prompt('Введите свой возраст')
        },
        'Пользователь 5':{
            name: prompt('Введите своё имя'),
            age: +prompt('Введите свой возраст')
        },
        'Пользователь 6':{
            name: prompt('Введите своё имя'),
            age: +prompt('Введите свой возраст')
        },
        'Пользователь 7':{
            name: prompt('Введите своё имя'),
            age: +prompt('Введите свой возраст')
        },
        'Пользователь 8':{
            name: prompt('Введите своё имя'),
            age: +prompt('Введите свой возраст')
        },
        'Пользователь 9':{
            name: prompt('Введите своё имя'),
            age: +prompt('Введите свой возраст')
        },
        'Пользователь 10':{
            name: prompt('Введите своё имя'),
            age: +prompt('Введите свой возраст')
        }
    }
    for (const key in users) {
        console.log(' ');
        console.log(`Пользователь:`);
        for (const keys in users[key]) {
            console.log(`${users[key][keys]}`);
        }
     }
    return users;
}
console.log(users());