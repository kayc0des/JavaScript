/* 
Using the Spread Operator ... - see line 36
*/

let words = ['cat', 'taxonomy', 'photosynthesis', 'engineer', 'pen', 'lion', 'leg', 'information', 
            'pupil', 'egg', 'wallet'];
let result = [];

function spellingQuiz(arr) {
    let grade1 = [];
    let grade2 = [];
    let grade3 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 7) {
            grade3.push(arr[i]);
        } else if (arr[i].length > 4) {
            grade2.push(arr[i]);
        } else {
            grade1.push(arr[i]);
        }
    }
    result = [grade1, grade2, grade3];
    return result;
}

spellingQuiz(words);
console.log('------Here is the resulting array------');
console.log(result);

function quizData (arr1, arr2, arr3) {
    console.log("Grade 1 students spelling quiz: ", arr1);
    console.log("Grade 2 students spelling quiz: ", arr2);
    console.log("Grade 3 students spelling quiz: ", arr3);
}

quizData(...result);