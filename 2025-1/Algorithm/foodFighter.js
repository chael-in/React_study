function solution(food) {
    var answer = '';
    let arr = [];

    for (let i = 1; i < food.length; i++) {  
        arr.push(Math.floor(food[i] / 2));
    }

    for (let i = 0; i < arr.length; i++) {
        answer += (i + 1).toString().repeat(arr[i]); 
    }

    return answer + '0' + [...answer].reverse().join(''); 
}


/*
function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}
*/
