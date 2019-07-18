<template>
  <div id="app">
    <nav class="navbar has-background-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <h1 class="has-text-white title is-4">Pax8 FrontEnd Assignment</h1>
          </div>
          <router-link class="navbar-item" to='/'>Home</router-link>
        </div>
      </div>
    </nav>
    <router-view :key="$route.fullPath" class="has-background-secondary" />
    <footer class="footer ">
      <div class="content has-text-centered">
        <p>
          <strong>FrontEnd Homework Project for Pax8 interview</strong> by
          <a href="https://travispence.com">Travis Pence</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @import "~bulma/bulma";
}

.pt-2 {
  padding-top: 2rem;
}
</style>
