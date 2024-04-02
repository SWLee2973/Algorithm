function solution(n, arr1, arr2) {
    var answer = [];
    
    const secArr1 = arr1.map(item => lpad(item.toString(2), n, '0').split(''));
    const secArr2 = arr2.map(item => lpad(item.toString(2), n, '0').split(''));
    
    for(let i=0; i<n; i++) {
        const temp = [];
        for(let j=0; j<n; j++) {
            if(+secArr1[i][j] || +secArr2[i][j]) temp.push('#')
            else temp.push(' ')
        }
        answer.push(temp.join(''));
    }
    
    return answer;
}

const lpad = (target, number, item) => {
    return item.repeat(number - target.length) + target;
    
}