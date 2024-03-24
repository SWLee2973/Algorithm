function solution(arr)
{
    var answer = [];
    
    answer = arr.filter((num, index, array) => {
        return num !== array[index+1]
    })

    return answer;
}