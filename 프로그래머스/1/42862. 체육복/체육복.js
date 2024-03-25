function solution(n, lost, reserve) {
    var answer = 0;
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    for(let i=1; i<=n; i++) {
        if(lost.indexOf(i) < 0) {
            answer++;
        } else {
            if(reserve.indexOf(i-1) >= 0 && lost.indexOf(i-1) < 0) {
                answer++;
                reserve = reserve.filter(ele => ele != i-1);
            } else if(reserve.indexOf(i+1) >= 0 && lost.indexOf(i+1) < 0) {
                answer++;
                reserve = reserve.filter(ele => ele != i+1);
            } else if(reserve.indexOf(i) >= 0) {
                answer++;
                reserve = reserve.filter(ele => ele != i);
            } else continue;
        }
    }
    
    return answer;
}