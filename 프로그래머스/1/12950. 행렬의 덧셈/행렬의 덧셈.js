function solution(arr1, arr2) {
    var answer = [[]];
    
    answer = arr1.map((item, i) => {
        return item.map((v, j) => {
            return v + arr2[i][j]
        })
    })
    
    return answer;
}