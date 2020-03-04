<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app{
  font-family: Arial, Helvetica, sans-serif;
  // CSS3属性-webkit-font-smoothing字体抗锯齿渲染
  -webkit-font-smoothing:antialiased; //chrome/safari
  -moz-osx-font-smoothing:grayscale; //FIRFOX
  text-align: center;
  color: #2c3e50;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
#nav a.router-link-exact-active{
  color:red;
}
</style>
