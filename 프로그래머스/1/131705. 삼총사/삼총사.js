function solution(number) {
    var answer = 0;
    
    const combi = combination(number, 3);
    
    combi.forEach(item => {
        const [a, b, c] = item;
        if(a + b + c === 0) answer++;
    })
    
    return answer;
}

const combination = (numbers, n) => {
    const results = [];
    if(n === 1) return numbers.map(item => [item]);
    
    numbers.forEach((fix, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = combination(rest, n-1)
        const att = combinations.map(v => [fix, ...v]);
        results.push(...att);
        
    })
    
    return results;
}