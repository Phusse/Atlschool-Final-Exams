<template>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li><router-link to="/counter">Counter</router-link></li>
      </ul>
    </nav>
</template>
<style scoped>
nav {
  display: flex;
  padding: 20px;
  justify-content: space-between;
  width: 100vw;
}

nav ul {
  list-style: none;
  display: flex;
}

nav ul li {
  margin-left:  1rem;
}

nav ul li a {
  text-decoration: none;
  color: rgb(116, 114, 238);
  font-size: 2.2rem;
  font-weight: bold;
}
nav ul li a:hover{
  color: rgb(0, 0, 5);
  text-decoration: underline;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>