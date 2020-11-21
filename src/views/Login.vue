<template>
  <div class="login">
    <Form
      :model="loginInput"
      :labelCol="{ span: 10 }"
      :wrapperCol="{ span: 14 }"
      @submit="handleSubmit"
      @submit.prevent
    >
      <FormItem :label="'Username'">
        <Input v-model:value="loginInput.username" placeholder="Username" />
      </FormItem>
      <FormItem label="Password">
        <Input
          v-model:value="loginInput.password"
          placeholder="Password"
          type="password"
        />
      </FormItem>
      <FormItem :wrapperCol="{ span: 14, offset: 10 }">
        <Button
          type="primary"
          block
          html-type="submit"
          :disabled="loginInput.username === '' || loginInput.password === ''"
        >
          Log in
        </Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { Input, Button, Form } from "ant-design-vue";
export default {
  data() {
    return {
      loginInput: {
        username: "",
        password: ""
      }
    };
  },
  components: { Input, Button, Form, FormItem: Form.Item },
  methods: {
    handleSubmit(e) {
      console.log(e, this.loginInput);
    }
  }
};
</script>
<style lang="less" scoped>
.login {
  position: absolute;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
}
</style>
