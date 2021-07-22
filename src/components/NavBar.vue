<template>
  <div class="header">
    <div class="logo">
      <a href="/">BGMNA 你画我猜词库</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  background-color: #f0969d;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 20px;
  @media screen and (min-width: 1200px) {
    padding: 0 200px;
  }
}
.logo {
  a {
    color: white;
    text-decoration: none;
  }
}
</style>
