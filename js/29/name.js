const firstName = 'Даниил';
const lastName = 'Омельченко';
const patronymic = 'Андреевич';
const birthYear = 2003;
const major = 'Прикладная информатика';


const result1 = 'Имя: ' + firstName + '\n' +
    'Фамилия: ' + lastName + '\n' +
    'Отчество: ' + patronymic + '\n' +
    'Год рождения: ' + birthYear + '\n' +
    'Направление: ' + major;
console.log(result1);

console.log()

const result2 = `Имя: ${firstName}
Фамилия: ${lastName}
Отчество: ${patronymic}
Год рождения: ${birthYear}
Направление: ${major}`;

console.log(result2);