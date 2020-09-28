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

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Your password:"
        label-for="input-3"
      >
        <b-form-input
          type="password"
          id="input-3"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary" @click="clickAdd()"
        >Submit</b-button
      >
    </b-form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SignUpForm',
  data() {
    return {
      form: {
        email: '',
        name: '',
        password: '',
      },
    };
  },
  methods: {
    clickAdd() {
      console.log('toto', this.form);
      axios
        .post('http://localhost:3000/sign-up', this.form)
        .then((response) => console.log(response))

        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
