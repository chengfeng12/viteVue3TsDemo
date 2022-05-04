/*
 * @Author: your name
 * @Date: 2022-03-23 14:54:41
 * @LastEditTime: 2022-04-26 20:02:17
 * @LastEditors: Please set LastEditors
 * @Description: 全局的方法
 * @FilePath: /viteVue3Demo/src/assets/utils/index.js
 */

import { useRouter, LocationQueryRaw } from "vue-router"; // 引入 router
const router = useRouter();
setTimeout(() => {
  console.log(router, "router");
}, 0);
/**
 * @description: 防抖函数
 * @param {*} func 执行事件
 * @param {*} delay 延迟时间 默认值 500
 * @return {*} 返回执行函数
 */
export const debounce = (func: Function, delay = 500) => {
  // 缓存⼀个定时器id
  let timer: number;
  // 这⾥返回的函数是每次⽤户实际调⽤的防抖函数
  // 如果已经设定过定时器了就清空上⼀次的定时器
  // 开始⼀个新的定时器，延迟执⾏⽤户传⼊的⽅法
  return (...args: (string | unknown)[]) => {
    // let context: any = this;
    // console.log(args, context);

    if (timer) {
      clearTimeout(timer);
    }

    timer = window.setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

/**
 * @description: 节流函数
 * @param {*} func 执行事件
 * @param {*} delay 延迟时间
 * @return {*} 返回一个函数，闭包
 */
export const throttle = (func: Function, delay = 500) => {
  /* setTimeout 形式 */
  /* let timer;
  let context = this;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      func.apply(context, args);
      timer = null;
    }, delay);
  }; */
  // 时间戳

  let preTime = 0;
  return (...args: (string | unknown)[]) => {
    let now = new Date().getTime();
    if (now - preTime > delay) {
      let context = this;
      func.apply(context, args);
      preTime = now;
    }
  };
};

export const getType = () => {
  
}

/**
 * 跳转到新窗口
 * @param url 跳转路由name
 * @param queryData  跳转路由参数
 * @param callback 回调方法
 */
export const openWin = (url: string, queryData: LocationQueryRaw, callback: Function) => {
  // 先打开一个不被拦截的新窗口
  let newWindow = window.open();
  let { href } = router.resolve({
    name: url,
    query: queryData,
  });
  if (newWindow) {
    newWindow.location.href = href;
    window.addEventListener(
      "message",
      (event) => {
        if (
          event.data.status === 200 &&
          event.origin === "http://" + window.location.host
        ) {
          if (callback) callback(event);
        }
      },
      false
    );
  }
};
