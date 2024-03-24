function solution(left, right) {
    var answer = 0;
    
    for(let i=left; i<=right; i++) {
        if(약수(i) % 2 === 0) answer += i;
        else answer -= i;
    }
    
    return answer;
}

const 약수 = n => {
    let count = 0;
    
    for(let i=1; i<=n; i++) {
        if(n % i === 0) {
            count++;
        }
    }
    
    return count;
}