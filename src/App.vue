<template>
  <div id="app">
    <navigation></navigation>
  </div>
</template>

<script>
import navigation from "./pages//Navigation/navigation";

export default {
  name: "app",
  components: {
    navigation
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
