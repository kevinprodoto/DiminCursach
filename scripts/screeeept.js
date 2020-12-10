const button = document.querySelector('.main__button');
const result = document.querySelector('.main__result');

button.addEventListener('click', function() {
     testResult(questions);
})

if (localStorage.getItem('trueCounter')) {
    result.innerHTML = localStorage.getItem('trueCounter');
} else result.innerHTML = 0;

const questions = [
    [
        'Какие компании основал Илон? \n1. Tesla \n2. PayPal \n3. SpaceX \n4. все вышеперечисленные',
        'Как звали первую жену илона? \n1. Жюстин Уилсон \n2. Талулой Райли \n3. Клэр Буше',
        'В каком году Маск основал SpaceX? \n1. 2000 \n2. 2002 \n3. 2004 \n4. 2006',
        'Какую роль сыграл Илон Маск в фильме железный человек? \n1. Самого себя \n2. Главного злодея \n3. Прототип главного героя',
        'Какой журнал включил Маска в список 20 наиболее влиятельных американских CEO в возрасте до сорока лет? \n1. Forbes \n2. Esquire \n3. New York Times \n4. Washington Post ',
    ],
    [
        4,
        1,
        2,
        3,
        1
    ]
];
function testResult(questionArr, userAnswerArr = [], trueCounter = 0) {
    for (let i = 0; i < questionArr[0].length; i++) {
        userAnswerArr[i] = prompt(questionArr[0][i]);
        if (userAnswerArr[i] == questionArr[1][i]) trueCounter++;
    }
    if (trueCounter === 5) {
        alert("Это вы вчера с Илоном катались на Роадстере?");
    } else if (trueCounter > 2 && trueCounter < 5) {
        alert("Вы приянты в клуб поклонников Илона Маска");
    } else {
        alert("Вы совершенно не знаете Илона");
    }
    localStorage.setItem('trueCounter', trueCounter);
    result.innerHTML = localStorage.getItem('trueCounter');
}
