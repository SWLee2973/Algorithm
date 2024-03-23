function solution(numbers) {
    var answer = 0;
    
    const allNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    answer = allNumber.filter(v => numbers.indexOf(v) === -1).reduce((a, c) => a + c, 0);
    
    return answer;
}