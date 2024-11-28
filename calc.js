// var arrStr = '1,5';
// var arrStr = '1\n2,3';
var arrStr = '//;\n1;2';
var numberArray = [];
var lastNum = null;

function is_numeric(str) {
    return /^\d+$/.test(str);
}

function add(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (is_numeric(numbers[i])) {
            if (lastNum) {
                lastNum = lastNum + numbers[i];
            } else {
                lastNum = numbers[i];
            }
        } else if (numbers[i] == '-') {
            if (lastNum) {
                numbers.push(Number(lastNum));
                lastNum = null;
            }
        } else {
            if (lastNum) {
                numberArray.push(Number(lastNum));
                lastNum = null;
            }
        }
    }

    if (lastNum) {
        numberArray.push(Number(lastNum));
        lastNum = null;
    }

    return numberArray.reduce((sum, i) => sum + i, 0);

}

console.log(add(arrStr));
