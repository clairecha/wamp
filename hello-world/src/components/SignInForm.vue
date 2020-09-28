<template>
  <div>
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Your password:"
        label-for="input-2"
      >
        <b-form-input
          type="password"
          id="input-2"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button @click="clickAdd()" type="submit" variant="primary"
        >Submit</b-button
      >
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignInForm',

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      show: true,
    };
  },
  methods: {
    clickAdd() {
      axios
        .post('http://localhost:3000/sign-in', this.form)
        .then((response) => {
          console.log('response', response);
          this.form.email = '';
          this.form.passord = '';
          console.log('data', response.data);
          this.$router.push('/dashboard').token();
          this.$store.dispatch('addToken', response.data);
          console.log('token', response.data);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
  },
};
</script>
