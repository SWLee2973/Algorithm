function solution(num) {
    var answer = 0;
    
    if(num === 1) return 0;
    
    let count = 0;
    while(1) {
        
        if(num % 2 === 0) num /= 2;
        else num = num * 3 + 1;
              
        count++;
        if(count === 500) {
            answer = -1;
            break;
        }
        
        if(num === 1) {
            answer = count;
            break;
        }
    }
        
    return answer;
}