function solution(arr) {
    var answer = [];
    
    if(arr.length === 1) return [-1];
    
    const minNum = [...arr].sort((a, b) => b - a).pop();
    
    answer = arr.filter(v => v != minNum);
    

    return answer;
}