function moveZeroToBack() {}

/* 
⚙️조건 :  reverse, set, sort 등 메소드를 사용하지 않고 직접 값을 변경한 값은 반환하여라. 

🧐 Q3. pseudo-code
nums는 0이 포함된 무작위 배열이다.
for loop로 순차적으로 돌아가면서 0이아닌것을 찾아 앞쪽으로 보낸다. 
  0이아닌값의 위치를 notZeroIndex를 0으로 변수선언한다.(자리를 기억하게!)
  0이아닌값이 앞쪽에 하나씩 채워지면 notZeroIndex에 +1을 해서 다음 값에 위치하도록 한다. 
  0이면 무시한다. 

for loop로 0이아닌값을 앞쪽에 다 위치했으니 그 이후 (notZeroIndex) 나머지값들은 0으로 바꾼다.
최종 바뀐 arr값을 반환해서 함수에 출력하게 한다. 

공간복잡도는 
시간복잡도는 


❌처음 잘못생각한 것❌:
0이 아닌 값이 있으면 냅두고 
0이면 뒷 값과 교체한다 
(0,0이렇게 연속해서 0이 올 경우를 대응하지 못한다.)

*/

/**
You are working on a to-do list app. The tasks are stored in an integer array nums, where each number represents a task ID.

Sometimes, unfinished tasks are marked as 0.
Before showing the list to the user, the app wants to move all the unfinished tasks (0s) to the bottom, while keeping the order of the other tasks the same.

Important: You must do this in-place (without making a new copy of the list).

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Example 3:
Input: nums = [1,0,2,0,3,0]
Output: [1,2,3,0,0,0]
 */
