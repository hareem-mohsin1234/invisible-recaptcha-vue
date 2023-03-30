<template>
  <v-app-bar app>
    <v-btn href='/'>Home</v-btn>
    <v-btn href='/contact'>Contact</v-btn>
    <v-btn href='/payment'>Payment</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: ''
    }
  }
}
</script>

<style>

</style>
