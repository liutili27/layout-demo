<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 20px;
	margin: 0 auto;
	max-width: 1024px;
	color: #666;
	font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    border: 1px solid #333;
    line-height: 20px;
}
</style>
