
import Vue from 'vue'
export const EventBus = new Vue()

// 如果你只想监听一次事件的发生，可以使用 EventBus.$once(channel: string, callback(payload1,…)) 。

// 可以使用 EventBus.$off(‘decreased’) 来移除应用内所有对此事件的监听。或者直接调用EventBus.$off() 来移除所有事件频道， 注意不需要添加任何参数 。