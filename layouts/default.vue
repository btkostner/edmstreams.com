/**
 * layouts/default.vue
 * The main layout for our site
 */

<template>
  <div class="layout">
    <div>
      <nuxt />
    </div>

    <footer>
      <a
        href="https://github.com/btkostner/edmstreams.com/edit/master/data/streams.yaml"
        rel="noopener"
        target="_blank"
      >
        Add Stream Information
      </a>
    </footer>
  </div>
</template>

<style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }

  footer {
    background-color: rgba(45, 45, 45, 0.9);
    border-top: 1px solid rgba(140, 140, 140, 0.8);
    bottom: 0;
    color: #fff;
    left: 0;
    position: sticky;
    right: 0;
    width: 100%;
  }

  footer a {
    color: inherit;
    display: block;
    padding: 0.8rem;
    text-align: center;
    text-decoration: none;
  }
</style>
