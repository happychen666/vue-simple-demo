/*
* index.js
* 项目入口文件
* */
import Vue from 'vue'
import App from './app.vue'

// 在body下创建一个根节点
const root = document.createElement('div');
document.body.appendChild(root);

//此方法创建全局EventBus
var EventBus = new Vue();

Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
})

// var EventBus = new Vue();

// this.$bus.$emit('nameOfEvent',{ ... pass some event data ...});

// this.$bus.$on('nameOfEvent',($event) => {
//     // ...
// })

// 将根节点root注入到app.vue组件中
new Vue({
    render: (h) => h(App)
}).$mount(root);

