function solution(s, n) {
    var answer = '';
    const large = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const small = large.toLowerCase();
    
    s.split('').forEach(c => {
        if(large.split('').includes(c)) {
            let index = large.indexOf(c);
            for(let i=0; i<n; i++) {
                index++;
                if(index === large.length) index = 0;
            }

            answer += large[index];
        } else if (small.split('').includes(c)) {
            let index = small.indexOf(c);
            for(let i=0; i<n; i++) {
                index++;
                if(index === small.length) index = 0;
            }

            answer += small[index];
        } else {
            answer += ' ';   
        }
    })
    
    return answer;
}