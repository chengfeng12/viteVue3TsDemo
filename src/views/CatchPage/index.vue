<!--
 * @Author: your name
 * @Date: 2022-03-21 16:17:28
 * @LastEditTime: 2022-03-29 10:56:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /viteVue3Demo/src/views/CatchPage/index.vue
-->
<template>
  <div class="btn">
    缓存
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route.query, 'query');
console.log(route.params, 'params');

let a = 10;
console.log(++a);
console.log(a++);
console.log(a);

// console.log(a++ + ++a);

function drink(n) {
  let arr = 'abcde'.split('').map(item => item.toUpperCase());
  console.log(arr, 'aa');
  for (let i = 0; i < arr.length; i++) {
      if (i === n) {
        return arr[0]
      } else {
        arr.push(arr[0]);
        arr.push(arr[0]);
        arr.shift();
        console.log(arr, 'result', i);
      }
  }
}
console.log(drink(5));

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  console.log(...arguments);
  l1 = parseInt(l1.reverse().join(""));
  l2 = parseInt(l2.reverse().join(""));
  let total = l1 + l2;
  return total.toString().split("").reverse();
};

const l1 = [2,4,3],
      l2 = [5,6,4];
console.log(addTwoNumbers(l1, l2), "3333");;
</script>

<style lang="scss" scoped>
</style>
