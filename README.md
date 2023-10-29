# vue3-lab

based on [create-vue](https://github.com/vuejs/create-vue).

## Dependencies

- vite v4
- vue v3
- pinia v2
- vue-router v4

## 自定义主题踩坑记录

1. Element Plus 全局引入：注意在引入自定义 css 变量文件之前引入 Element Plus 样式。
   1. Tip：该方式可实现自定义主题，但加载资源过多，生产环境不建议。
2. Element Plus 自动按需引入：由于按需加载，样式延迟加载，会导致自定义 css 变量被覆盖。
   1. ❌ 暂未想到合适的解决方案。
3. ✔ Element Plus 手动按需引入：由于组件内按需引入的话会导致自定义 css 变量被覆盖，所以一定要全局注册 Element Plus 组件，且需要在自定义 css 变量文件之前引入。
