<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
    <!-- This is where the matched component will be rendered -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 10px;
  margin-bottom: 20px;
}
ul {
  list-style: none;
  padding: 0;
  display: flex;
}
li {
  margin-right: 15px;
}
a {
  text-decoration: none;
  color: #007bff;
}
a.router-link-active {
  font-weight: bold;
}
</style>
