function solution(a, b) {
    var answer = 0;
    
    const [x, y] = a > b ? [b, a] : [a, b];
    
    for(let i = x; i <=y; i++) {
        answer+=i;
    }
    
    return answer;
}