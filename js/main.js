function init() {
    const arraySize = 20;
    var array = generateRandArray(arraySize);

    var result = oddOrEven(array, arraySize);

    show(result);
}

function generateRandArray(size) {
    var array = [];

    for (var i = 0; i < size; i++) {
        var r = Math.floor(Math.random() * 100) + 1;
        array.push(r);
    }

    return array;
}

function oddOrEven(array) {
    var arrayOdd = [];
    var arrayEven = [];

    array.map((elem) => (elem % 2 != 0 ? arrayOdd.push(elem) : arrayEven.push(elem)));

    arrayOdd.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    arrayEven.sort((a, b) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    var result = {
        entry: array,
        odd: arrayOdd,
        even: arrayEven,
    };

    return result;
}

function show(result) {
    document.querySelector('.array--entry').innerHTML = result.entry
        .map((n) => '<div class="array__tile">' + n + '</div>')
        .join('');
    document.querySelector('.array--odd').innerHTML = result.odd
        .map((n) => '<div class="array__tile">' + n + '</div>')
        .join('');
    document.querySelector('.array--even').innerHTML = result.even
        .map((n) => '<div class="array__tile">' + n + '</div>')
        .join('');

    document.querySelectorAll('.header').forEach((n) => (n.style.display = 'block'));
    document.querySelectorAll('.array').forEach((n) => (n.style.display = 'grid'));
}
