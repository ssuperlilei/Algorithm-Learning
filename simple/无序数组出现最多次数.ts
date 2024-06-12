/**
 * 题目是：有一个无序数组，找出其中出现次数最多的元素。
 * 可以使用哈希表算法来解决，通过遍历数组，将元素作为键，
 * 出现次数作为值存入哈希表，最后找出值最大的键。其应用场景广泛，比如统计词频等。
 */

function findMostFrequent(arr: number[]): number {
  const map = new Map<number, number>();
  let max = 0;
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const count = map.get(num) || 0;
    map.set(num, count + 1);
    if (count + 1 > max) {
      max = count + 1;
      maxNum = num;
    }
  }
  return maxNum;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1, 1, 1, 1];
console.log(findMostFrequent(arr1)); // 1