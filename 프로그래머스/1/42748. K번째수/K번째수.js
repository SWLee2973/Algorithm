function solution(array, commands) {
    var answer = [];
    
    for(let i=0; i<commands.length; i++) {
        const [a, b, k] = commands[i];      
        const sliceArr = array.slice(a-1, b).sort((a, b) => a - b);

        
        answer.push(sliceArr[k-1]);
    }
    
    return answer;
}