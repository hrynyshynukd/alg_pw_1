// Генерація масиву випадкових чисел у заданому діапазоні
function generateArray(length, min, max) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

// Генеруємо два масиви для прикладу
let array1 = generateArray(20, -110, 110);               
let array2 = generateArray(array1.length, -100, 100);   
let array3 = generateArray(12, -100, 100);              

// Виведення елементів у форматі [елемент_№_значення_X]
function printArray(arr) {
    arr.forEach((value, index) => {
        console.log(`[елемент_${index + 1}_значення_${value}]`);
    });
}

// 1. Знаходження кількість і суми парних елементів масиву 1
function evenCountAndSum(arr) {
    let count = 0, sum = 0;
    arr.forEach(num => {
        if (num % 2 === 0) {
            count++;
            sum += num;
        }
    });
    return {count, sum};
}

// 2. Визначення середнього арифметичного масиву 1 та кількість елементів більших за нього
function averageAndGreater(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avg = sum / arr.length;

    let greaterCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            greaterCount++;
        }
    }
    return {avg: avg, greaterCount: greaterCount};
}

// 3. Утворення масиву як попарної суму елементів двох масивів однакової довжини (масиви 1 і 2)
function pairSumArrays(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }
    return result;
}

// 4. Конкатенація (з'єднання, де у новому масиві спочатку знаходяться усі елементи першого масиву, а потім другого) двох масивів різної довжини (масиви 1 і 3)
function concatArrays(arr1, arr2) {
    let result = [];
    let k = 0;
    for (let i = 0; i < arr1.length; i++) {
        result[k] = arr1[i];
        k++;
    }
    for (let i = 0; i < arr2.length; i++) {
        result[k] = arr2[i];
        k++;
    }
    return result;
}

// 5. Зміна місцями максимуму і мінімуму масиву 1
function swapMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
    }

    let temp = arr[minIndex];
    arr[minIndex] = arr[maxIndex];
    arr[maxIndex] = temp;

    return arr;
}

// 6. Розбиття масиву 1 на два: з додатніх і від’ємнтх елементів
function splitPositiveNegative(arr) {
    let positive = [];
    let negative = [];
    let posIndex = 0;
    let negIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive[posIndex] = arr[i];
            posIndex++;
        } else if (arr[i] < 0) {
            negative[negIndex] = arr[i];
            negIndex++;
        }
    }
    return {positive: positive, negative: negative};
}

// 7. Видалення дублікатів максимуму та мінімуму масиву 1
function removeDuplicatesMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    let result = [];
    let k = 0;

    let minMet = false;
    let maxMet = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === min) {
            if (!minMet) {
                result[k] = arr[i];
                k++;
                minMet = true;
            }
        } else if (arr[i] === max) {
            if (!maxMet) {
                result[k] = arr[i];
                k++;
                maxMet = true;
            }
        } else {
            result[k] = arr[i];
            k++;
        }
    }

    return result;
}

// 8. Визначення середніх арифметичних масиву 1 та масиву 2, утворення третього масиву з елементів обох масивів, що знаходяться в межах між значеннями цих середніх арифметичних
function elementsBetweenAverages(arr1, arr2) {
    let sum1 = 0;
    for (let i = 0; i < arr1.length; i++) sum1 += arr1[i];
    let avg1 = sum1 / arr1.length;

    let sum2 = 0;
    for (let i = 0; i < arr2.length; i++) sum2 += arr2[i];
    let avg2 = sum2 / arr2.length;

    let minAvg = avg1 < avg2 ? avg1 : avg2;
    let maxAvg = avg1 > avg2 ? avg1 : avg2;

    let combined = [];
    let k = 0;

    for (let i = 0; i < arr1.length; i++) {
        combined[k] = arr1[i];
        k++;
    }
    for (let i = 0; i < arr2.length; i++) {
        combined[k] = arr2[i];
        k++;
    }

    let result = [];
    let r = 0;
    for (let i = 0; i < combined.length; i++) {
        if (combined[i] > minAvg && combined[i] < maxAvg) {
            result[r] = combined[i];
            r++;
        }
    }

    return result;
}


// Виведення початкових масивів

console.log("\nМасив 1:");
printArray(array1);

console.log("\nМасив 2:");
printArray(array2);

console.log("\nМасив 3:");
printArray(array3);


// Виконання завдань
console.log("\n1) Кількість та сума парних елементів масиву 1:", evenCountAndSum(array1));

console.log("2) Середнє арифметичне масиву 1 та кількість елементів більших за нього:", averageAndGreater(array1));

console.log("3) Попарна сума масивів 1 і 2:", pairSumArrays(array1, array2));

console.log("4) Конкатенація масивів 1 і 3:", concatArrays(array1, array3));

console.log("5) Масив 1 після зміни місцями мінімуму та максимуму:", swapMinMax([...array1]));

console.log("6) Окремі масиви з додатніх та від’ємних елементів масиву 1:", splitPositiveNegative(array1));

console.log("7) Масив 1 без дублікатів мінімуму та максимуму:", removeDuplicatesMinMax(array1));

console.log("8) Елементи масивів 1 і 2 між їхніми середніми арифметичними:", elementsBetweenAverages(array1, array2));
