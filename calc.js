// var arrStr = '1,5';
// var arrStr = '1\n2,3';
// var arrStr = '//;\n1;2';
var arrStr = '1,-2';
var numberArray = [];
var lastNum = null;
var lastNegative = false;

function is_numeric(str) {
    return /^\d+$/.test(str);
}

function add(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (is_numeric(numbers[i])) {
            if (lastNegative == true) {
                if (lastNum) {
                    lastNum = lastNum + numbers[i];
                } else {
                    lastNum = '-' + numbers[i];
                }
            } else {
                if (lastNum) {
                    lastNum = lastNum + numbers[i];
                } else {
                    lastNum = numbers[i];
                }
            }
        } else if (numbers[i] == '-') {
            lastNegative = true;
            if (lastNum) {
                numbers.push(Number(lastNum));
                lastNum = null;
            }
        } else {
            if (lastNum) {
                if (lastNum[0] == '-') {
                    throw new Error("negative numbers not allowed " + lastNum);
                }
                numberArray.push(Number(lastNum));
                lastNum = null;
            }
        }
    }

    if (lastNum) {
        if (lastNum[0] == '-') {
            throw new Error("negative numbers not allowed " + lastNum);
        }
        numberArray.push(Number(lastNum));
        lastNum = null;
    }

    return numberArray.reduce((sum, i) => sum + i, 0);

}

console.log(add(arrStr));
