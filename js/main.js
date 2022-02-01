function myFunction() {
    var array = [];
    var arrayOdd = [];
    var arrayEven = [];
    for (var i = 0; i < 20; i++) {
        var r = Math.floor(Math.random() * 100) + 1;
        array.push(r);
        if (r % 2 != 0) arrayOdd.push(r);
        else arrayEven.push(r);
    }
    document.querySelector(".entryArray").innerHTML = array.join(" ");
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
    console.log(arrayOdd);
    console.log(arrayEven);
    document.querySelector(".arrPrintOdd").innerHTML = arrayOdd.join("<p>");
    document.querySelector(".arrPrintEven").innerHTML = arrayEven.join("<p>");
}
