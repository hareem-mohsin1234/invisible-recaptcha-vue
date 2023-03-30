<template>
  <v-snackbar
    :v-model="isSnackbar"
  >
    {{ snackbarText }}

    <template v-slot:actions>
      <v-btn
        color="pink"
        variant="text"
        @click="$emit('onClose')"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {
  props: {
    isSnackbar: Boolean,
    snackbarText: String,
  },
}
</script>