function solution(d, budget) {
    var answer = [];
    let sum = 0;
    
    d.sort((a, b) => a - b);
    
    for(let i = 0; i<d.length; i++) {
        sum += d[i];
        if(budget < sum) {
            break;
        }
        answer.push(d[i])
    }
    
    return answer.length;
}