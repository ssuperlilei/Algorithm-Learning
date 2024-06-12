/**
 * 题目是：给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
 * 可以考虑使用哈希表算法来解决。它通过将元素的值作为键，下标作为值存储在哈希表中，能快速查找和目标值匹配的元素。应用场景广泛，如快速检索数据等。
 */
function getTarget(arr: number[], target: number): number[] {
  let map = new Map()
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i]
    if (map.has(diff)) {
      return [map.get(diff), i]
    }
    map.set(arr[i], i)
  }
  return []
}

const arr2 = [2, 7, 11, 15]
const target = 9
console.log(getTarget(arr2, target)) // [0, 1]