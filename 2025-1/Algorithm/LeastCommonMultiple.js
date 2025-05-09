function solution(arr) {
    var answer = 0;
    let maxN = Math.max(...arr), x = 1;
    
    while(answer === 0) {
        for (let i = 0; i < arr.length; i++) {
            if (maxN * x % arr[i] !== 0) {
                x++;
                break;
            } else if(i === arr.length - 1) {
                answer =  maxN * x;
            }  
        };
    };
    
    return answer;
}

/*
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b); // 유클리드 호제법
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(arr) {
    return arr.reduce((acc, num) => lcm(acc, num), 1); // 배열의 최소공배수 계산
}
*/