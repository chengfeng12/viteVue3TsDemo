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
</script>

<style lang="scss" scoped>
</style>
