function solution(s) {
    var answer = '';
    const queue = [];
    const word = {
        'zero' : 0, 'one' : 1, 'two' : 2, 'three' : 3, 'four' : 4, 
        'five' : 5, 'six' : 6, 'seven' : 7, 'eight' : 8, 'nine' : 9,
    };
    
    
    s.split('').forEach((item) => {
        if(isNaN(parseInt(item))) {
            queue.push(item);
        } else {
            answer += item;
        }
        
        if(word[queue.join('')]) {
            answer += word[queue.join('')];
            while(queue.length) queue.pop();
        }
        
        if(word[queue.join('')] === 0) {
            answer += word[queue.join('')];
            while(queue.length) queue.pop();
        }
    })
    
    return +answer;
}