function solution(n, m) {
    return [gcd(n, m), n * m / gcd(n, m)]
}

const gcd = (a, b) => {
    const [x, y] = [a, b].sort((w, z) => z - w);
        
    if(y == 0) return x;
    else return gcd(y, x%y)
}