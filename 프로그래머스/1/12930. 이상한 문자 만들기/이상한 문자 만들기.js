function solution(s) {
    var answer = [];
    
    const strArr = s.split(' ');
    strArr.forEach(item => {
        answer.push(item.split('').map((v, i) => {
            if(i % 2 === 0) return v.toUpperCase();
            else return v.toLowerCase();
        }).join(''))
    })
    
    return answer.join(' ');
}