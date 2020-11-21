<template>
  <div class="home">
    <Button>
      <router-link to="/login"> 登录 </router-link>
    </Button>
  </div>
</template>

<script>
// @ is an alias to /src
import { Button } from "ant-design-vue";
export default {
  name: "Home",
  components: {
    Button
  }
};
</script>
