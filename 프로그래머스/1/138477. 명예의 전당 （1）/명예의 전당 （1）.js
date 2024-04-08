function solution(k, score) {
    var answer = [];
    const 명예의전당 = [];
    const day = score.length;
    
    for(let i=0; i<score.length; i++) {
        명예의전당.push(score[i]);
        명예의전당.sort((a, b) => b - a);
        
        if(명예의전당.length > k) 명예의전당.pop();
        answer.push(명예의전당[명예의전당.length-1]);
    }
    
    return answer;
}