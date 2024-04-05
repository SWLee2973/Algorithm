function solution(a, b, n) {
    var answer = 0;
    
    while(1) {
        const next = parseInt(n / a) * b
        const remain = n % a;
        
        n = next + remain;
        answer += next;
        if(n < a) break;
    }
    
    return answer;
}