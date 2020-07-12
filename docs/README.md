# 成都市
## 的空间拉萨
::: demo  `Markdown` 
```html
<template>
  <div class="red-center-text">
      <p>{{ message }}</p>
      <input v-model="message" placeholder="Input something..."/>
      <el-button>yy</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Hello Vue'+JSON.stringify(this)
    }
  },
  
}
</script>
<style>
.red-center-text { 
  color: #ff7875;
  text-align: center;
}
</style>
```
:::