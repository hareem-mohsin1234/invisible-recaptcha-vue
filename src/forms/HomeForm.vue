<script>
import { postForm, verifyCaptcha } from '../utils/api'
import { RECAPTCHA_KEY } from '../utils/constants';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      isSnackbar: false,
      snackbarText: '',
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    grecaptcha.render('recaptcha', {
      sitekey: RECAPTCHA_KEY,
      callback: this.handleCallback,
      size: 'invisible'
    })
  },
  methods: {
    async submitForm(e) {
      this.isSnackbar = false;
      e.preventDefault();
      if(this.firstName ||
        this.lastName ||
        this.email) {
        // eslint-disable-next-line no-undef
        grecaptcha.execute()
      } else {
        this.snackbarText = 'Please fill a value!'
        this.isSnackbar = true;
      }
    },
    async handleCallback(token) {
      const data = await verifyCaptcha(token);
      if(data.success){
        const form = await postForm({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        })

        if(form.success) {
          this.isSnackbar = true;
          this.snackbarText = form.message;
        }

        this.firstName = "";
        this.lastName = "";
        this.email = "";
      }

      setTimeout(()=>{
        this.isSnackbar = false;
        this.snackbarText = "";
      }, 3000)
    }
  }
}

</script>
<template>
  <v-form style='margin-top: 50px'>
    <div class='text-h4'>Main</div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
        >
          <v-text-field
            :counter="25"
            label="First name"
            v-model='firstName'
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        >
          <v-text-field
            :counter="25"
            label="Last name"
            v-model='lastName'
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        >
          <v-text-field
            label="E-mail"
            type='email'
            v-model='email'
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        >
          <div id="recaptcha"
            style="display:none;"></div>
          <v-btn type='submit' @click='submitForm($event)'>Submit</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <v-snackbar
    v-model="isSnackbar"
  >
    {{ snackbarText }}

    <template v-slot:actions>
      <v-btn
        color="pink"
        variant="text"
        @click="isSnackbar = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<style>

</style>