function solution(price, money, count) {
    var answer = -1;
    
    const 합계 = price * count * (count + 1) / 2

    answer = 합계 - money;
    
    return answer <= 0 ? 0 : answer;
}