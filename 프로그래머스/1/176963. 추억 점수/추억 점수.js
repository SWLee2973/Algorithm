function solution(name, yearning, photo) {
    var answer = [];
    
    photo.forEach(p => {
        let score = 0;
        name.forEach((people, index) => {
          if(p.includes(people)) {
              score += yearning[index];
          }
        })
        answer.push(score);
    })
    
    return answer;
}