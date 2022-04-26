<template>
  <div class="container" :style="style">
    <template class="test">
      <div>112111</div>
    </template>
    <div class="bg">
      <!-- <img class="text-one" src="../../assets/images/text.jpeg" alt="">
    <img class="img-nan" src="../../assets/images/nan.jpeg" alt="">
    <img class="img-nv" src="../../assets/images/nv.jpeg" alt=""> -->
    </div>
    <div class="header"></div>
    <div class="main"></div>

    <div class="footer"></div>

    <ul id="ul">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>

    <div class="btn" @click="catchPage">缓存</div>
    <div class="btn" @click="debounceClick">防抖</div>
    <div class="btn" @click="debounceClick2">防抖2</div>
    <Test></Test>

    <div>
      <el-button v-for="route in pages" :key="route.name" type="primary" @click="jumpEvent(route)">{{route.title}}</el-button>
    </div>

    
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { debounce, throttle, openWin } from "@utils/index";
import Test from "@views/Home/test.vue";

const router = useRouter();
/* 闭包 */
/* function test() {
  var arr = [];
  for (var i = 0; i < 10; i++) {
    (function (num) {
      arr[num] = function () {
        console.log(num);
      };
    })(i);
    // arr[i] = function () {
    //   console.log(i)
    // }
  }
  return arr;
}
let list = test();
for (var j = 0; j < list.length; j++) {
  list[j]();
} */

// 去重
var number = [1, 2, 3, 4, 5, 6, 7, 2, 1, 12, 2, 1, 1, 2, 3];
let obj = {};
for (let i = 0; i < number.length; i++) {
  obj[number[i]] = number[i];
}
console.log(Object.values(obj));

var str =
  "faweijiawefaiwefiaphwefawefierfjdsajiawefiawefhqawefihiahwefaihwfehawef";

const filter = (str) => {
  let obj1 = {};
  for (let i = 0; i < str.length; i++) {
    if (obj1[str[i]]) {
      obj1[str[i]] += 1;
    } else {
      obj1[str[i]] = 1;
    }
  }

  for (const key in obj1) {
    if (obj1[key] === 1) return key;
  }
  return "undefined";
};

console.log(filter(str));

function test1() {}
console.log(test1.constructor);

var foo2 = 1;
(function foo() {
  foo2 = 10;
  console.log(foo2, "zzzzz");
})();

console.log(foo2, "foo2");

// 闭包
/* for (var i = 1; i <= 5; i++) {
  (function (num) {
    setTimeout(function timer() {
      console.log(num);
    }, num * 1000);
  })(i);
}

for (var i = 1; i <= 5; i++) {
  setTimeout(function timer(num) {
    console.log(num);
  }, i * 1000, i);
} */
const A = "a",
  b = "b";

const debounceClick = debounce((A, b) => {
  console.log(this, "this");
  console.log(2222);
}, 2000);
const debounceClick2 = debounce(() => {
  console.log(33333);
}, 2000);

let style = reactive({
  backgroundColor: `rgb(255, 255, 255)`,
});

const changeBg = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  console.log(style);
};
window.addEventListener("resize", throttle(changeBg, 2000));

let a = {
  value: 1,
};

function getValue(name, age) {
  console.log("name:", name);
  console.log("age:", age);
  console.log(this.value);
}
getValue.call(a, "yck", "24", "hahahh");
getValue.apply(
  {
    value: "update",
  },
  ["two", "22"],
  "hahahha"
);

let arr1 = [1, [2, [4, 5, [6, [7]]]], 3];
let arr2 = arr1.flatMap((v) => v);
console.log(arr2, "arr2");

const deepFlatMap = (list) => {
  return Array.isArray(list)
    ? list.reduce((a, b) => [...a, ...deepFlatMap(b)], [])
    : [list];
  return Array.isArray(list)
    ? list.reduce((pre, cur) => [...pre, ...deepFlatMap(cur)], [])
    : [list];
};
console.log(deepFlatMap(arr1), "deepFlatMap(arr1)");

onMounted(() => {
  /* let ul = document.querySelector("#ul");
  console.log(ul.innerHTML, "ul.innerHTML");
  ul.addEventListener("click", (event) => {
    console.log(event.target);
  });
  const test = document.querySelector(".test");
  console.log(test.innerHTML, "test"); */
});


const asyncFun = async () => {
  let res = await "reeesss";
  console.log(res);
};
asyncFun();

/* console.log("script start 1"); //1
async function async1() {
  console.log("开始 2"); //2
  await async2();
  console.log("中间"); //6
  await async3();
  console.log("结束"); //9
}
async function async2() {
  console.log("async2 end 3"); //3
}
async function async3() {
  console.log("async3 end"); //7
}
async1();
setTimeout(function () {
  console.log("setTimeout"); //11
}, 0);

new Promise((resolve) => {
  console.log("Promise 4"); //4
  resolve();
})
  .then(function () {
    console.log("promise1"); //8
  })
  .then(function () {
    console.log("promise2"); //10
  });

console.log("script end------------------------------------"); //5
 */

/* new Promise((resolve, reject) => {
    resolve(1)
    // reject(1)
}).then(
    value => { 
        console.log('onResolved1()', value);
        return new Promise().resolve("ahhahah");
    }
).then(
    value => { 
        console.log('onResolved2()', value);
        return 3
    }
).then(
    value => { 
        console.log('onResolved3()', value);
    }
).catch(
    reason => { 
        console.log('onRejected()', reason);  // onRejected() 1
    }
) */

const t1 = async () => {
  console.log("t1", 123);
  await Promise.resolve(123);
  console.log("t1-123");
  await Promise.resolve(123);
  console.log("t1-456");
};

const t2 = async () => {
  console.log("t2-321");
  await Promise.resolve(654);
  console.log("t2-654");
};

t1();
t2();

console.log(router, "router222");

const catchPage = () => {
  sessionStorage.setItem("page4", "test");
  localStorage.setItem("local", "test");

  // openWin('catchPage', {
  //   id: new Date().getTime(),
  // })
  router.push({
    path: "/catchPage",
    query: {
      id: new Date().getTime(),
    },
  });
};
const pages = [
  {
    title: 'Button',
    name: "button"
  },
  {
    title: 'Table',
    name: "table"
  }
]
const jumpEvent = ({name, title}) => {
  router.push({
    name,
    query: {
      title,
    },
  });
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
