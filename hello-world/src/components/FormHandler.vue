<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="SignIn" active><SignInForm /> </b-tab>
      <b-tab title="SignUp"><SignUpForm /> </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default {
  name: "FormHandler",
  components: {
    SignInForm,
    SignUpForm,
  },
};
</script>

<style >
</style>