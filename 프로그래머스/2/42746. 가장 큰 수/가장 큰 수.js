function solution(numbers) {
    var answer = '';
    const array = numbers.map(v => String(v));
    
    array.sort((a, b) => (b+a) - (a+b));
    
    return array.join('')[0] === '0' ? '0' : array.join('');
}