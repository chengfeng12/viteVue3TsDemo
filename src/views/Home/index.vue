<template>
  <div>
    {{result.data.name}}<br>
    {{result.data.age}}<br>
    <button @click="btnClick()">改变</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import useCount from "./useCount"

const change = () => {
  result.data.name = new Date().getTime().toString();
}
let result = useCount(change);

const btnClick = () => {
  result.change();
}
</script>

<style>

</style>
