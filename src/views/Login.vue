<template>
<div class="login">
  <Form
    :model="loginInput"
    :labelCol="{ span: 4 }"
    :wrapperCol="{ span: 14 }"
    @submit="handleSubmit"
    @submit.prevent
  >
    <Form.Item :label="'Username'">
      <Input v-model:value="loginInput.username" placeholder="Username" />
    </Form.Item>
    <Form.Item label="Password">
      <Input
        v-model:value="loginInput.password"
        placeholder="Password"
        type="password"
      />
    </Form.Item>
    <Form.Item>
      <Button
        type="primary"
        html-type="submit"
        :disabled="loginInput.username === '' || loginInput.password === ''"
      >
        Log in
      </Button>
    </Form.Item>
  </Form></div>
</template>
<script>
import { Input, Button,Form } from "ant-design-vue";
export default {
  data() {
    return {
      loginInput: {
        username: "12",
        password: "12",
      },
    };
  },
  components: { Input, Button,Form },
  methods: {
    handleSubmit(e) {
      console.log(e, this.loginInput);
    },
  },
};
</script>
<style lang="less" scoped>
.login{
    position: absolute;
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
}
</style>
