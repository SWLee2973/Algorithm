function solution(sizes) {
    var answer = 0;
    const tempArr = sizes.map(item => item.sort((a, b) => a - b));
    
    const maxX = [...tempArr].sort((a, b) => b[0] - a[0])[0]
    const maxY = [...tempArr].sort((a, b) => b[1] - a[1])[0]
    
    return maxX[0] * maxY[1];
}