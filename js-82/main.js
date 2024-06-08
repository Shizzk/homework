
// я вообще не понимаю принцип работы функций, это ужас, я пыталась, спасибо за внимание.//

function nameLog (name) {
    const randomName = name;
    return randomName;
}
console.log(`Hello ${nameLog("Albert or Daniil or Who you.. idk")}`)



const numbers = [1,3,7,13,17,20]

function mNumbers(numbers) {
    for(i=0; i<numbers.length; i++){
        if (numbers[i]>10) {
            return numbers[i]
        }
    }
}
console.log (mNumbers(numbers))



function calculate (x,y,operator)
while (operator == "minus") {
    return result = x-y
}
console.log(calculate (3,2,"minus"))

