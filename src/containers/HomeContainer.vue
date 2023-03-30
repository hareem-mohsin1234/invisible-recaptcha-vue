<template>
  <v-card>
    <v-app>
      <header-bar />
      <v-card-text>
        <div class='form-area'>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="4"
                offset-md='4'
              >
                <home-form />
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-card-text>
    </v-app>
  </v-card>
</template>

<script>
import HomeForm from '../forms/HomeForm.vue';
import HeaderBar from '../components/HeaderBar.vue'

export default {
  components: {
    'home-form': HomeForm,
    'header-bar': HeaderBar
  },
}
</script>

<style>

</style>
