<template>
  <div class="app container">
    <div id="nav">
      <router-link to="/">HJEM</router-link> |
      <router-link to="/about">OM OS</router-link> |
      <router-link to="/ProductsComponent">PRODUKTER</router-link> |
      <router-link to="/BasketComponent">KURV</router-link> |
      <router-link to="/Bitcoin">PRODUKTER V.2</router-link> |
      <router-link to="/Create">CREATE</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
