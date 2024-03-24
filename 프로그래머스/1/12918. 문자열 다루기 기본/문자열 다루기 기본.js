function solution(s) {
    const reg = /^\d{4}$|^\d{6}$/
    
    return reg.test(s);
}