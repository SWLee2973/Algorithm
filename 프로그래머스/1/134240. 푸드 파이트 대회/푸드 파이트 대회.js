function solution(food) {
    var answer = '';
    let left = '';
    let right = '';
    
    for(let i=1; i<food.length; i++) {
        left += `${i}`.repeat(parseInt(food[i]/2));
        right = `${i}`.repeat(parseInt(food[i]/2)) + right
    }
    
    answer = left + '0' + right;
    
    return answer;
}