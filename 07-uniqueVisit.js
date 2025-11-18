/*
Q4. 방문한 URL 기록
문자열로 이루어진 배열이 있다. 중복을 제외하되 순서는 보존시킨 값을 반환하라.
4-1.for loop로 풀기
4-2.Map으로 풀기
4-3.Set으로 풀기 - 안됨 순서 유지해야해서
*/
// 4-1.for loop로 풀기
//시간복잡도:O(n²) forloop+includes
//공간복잡도:O(n) array
let urls = ["a.com", "c.com", "a.com", "c.com", "b.com"];
function uniqueVisit(a) {
  let uniqueUrls = [];
  for (let i = 0; i < a.length; i++) {
    if (!uniqueUrls.includes(a[i])) {
      //.includes는 순회하며 비교 O(n)
      uniqueUrls.push(a[i]);
    }
  }
  return uniqueUrls;
}
console.log(uniqueVisit(urls));

// 4-2.Map으로 풀기
//시간복잡도:O(2n) forloop,map.keys() 각각
//공간복잡도:O(2n) map하나, array하나
function uniqueVisit2(a) {
  let mapUrls = new Map();
  for (let i = 0; i < a.length; i++) {
    if (!mapUrls.has(a[i])) {
      mapUrls.set(a[i], 0);
    }
  }
  return [...mapUrls.keys()]; //반복을 순회해서 꺼내기 O(n)
}
console.log(uniqueVisit2(urls));

// 4-3.Set으로 풀기
//시간복잡도: O(2n) 요소를 순회하며 Set에 저장해서, 펼치기
//공간복잡도: O(2n) Set 하나 , array 하나
function uniqueVisit3(a) {
  return [...new Set(a)];
}
console.log(uniqueVisit3(urls));

// 🤔4-2 에서 return [...mapUrls.keys()]; 이것보다 깔끔한 문법을 없을까요?
//시간복잡도:O(2n) forloop,map.keys() 각각
//공간복잡도:O(2n) map하나, array하나
function uniqueVisit4(a) {
  let mapUrls = new Map();
  let newA = [];
  for (let i = 0; i < a.length; i++) {
    if (!mapUrls.has(a[i])) {
      mapUrls.set(a[i], 0);
    }
  }
  //반복을 순회해서 꺼내기 O(n)
  for (let v of mapUrls.keys()) {
    newA.push(v);
  }
  return newA;
}

console.log(uniqueVisit4(urls));

/**
 * Unique Visit History
 *
 * You are given an array of URLs representing a user's visit history in chronological order.
 * Return an array of unique URLs, preserving the order of the first appearance.
 *
 * You must use a Set to track visited URLs.
 *
 * Example 1:
 * Input: urls = ["a.com", "b.com", "a.com", "c.com", "b.com"]
 * Output: ["a.com", "b.com", "c.com"]
 *
 * Example 2:
 * Input: urls = []
 * Output: []
 *
 * Constraints:
 * - 0 <= urls.length <= 10^5
 * - Each url is a non-empty string
 */
