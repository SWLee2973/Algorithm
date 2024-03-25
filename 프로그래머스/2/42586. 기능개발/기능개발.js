function solution(progresses, speeds) {
    var answer = [];
    let day = 1;
    let count = 0;
    let currentProgresses = [...progresses];
    
    while(1) {
        currentProgresses = currentProgresses.map((progress, index) => {
            return progress + speeds[index];
        })
        
        while(1) {
            if(currentProgresses[0]>=100) {
                count++;    
                currentProgresses.shift();
                speeds.shift();
            } else break;
        }
        
        if(count > 0) {
            answer.push(count)
            count = 0;
        }
        
        if(currentProgresses.length === 0) break;
        day++;
    }
    
    
    return answer;
}