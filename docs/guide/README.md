## 导航 customer-block 
::: demo  `Markdown` 
```html
<template>
  <custom-block class="red-center-text">
      <p>{{ message }}</p>
      <input v-model="message" placeholder="Inpu"/>
  </custom-block>
</template>
<script>
export default {
  data() {
    return {
      message: 'customer-block'
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