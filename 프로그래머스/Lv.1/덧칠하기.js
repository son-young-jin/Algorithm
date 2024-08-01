function solution(n, m, section) {
  let answer = 0;
  let cur = 0;
  for (let i = 0; i < section.length; i++) {
    if (cur < section[i]) {
      cur = section[i] + m - 1;
      answer++;
    }
  }
  return answer;
}

console.log(solution(8, 4, [2, 3, 6])); // 2
console.log(solution(5, 4, [1, 3])); //	1
console.log(solution(4, 1, [1, 2, 3, 4])); //	4