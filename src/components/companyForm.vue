<template>
  <form @submit.prevent="onSubmit(form)">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Pax8" />
      </div>
    </div>

    <div class="field">
      <label class="label">Domain</label>
      <div class="control">
        <input class="input" type="text" placeholder="e.g. pax8.com" />
      </div>
    </div>
    <button class="button is-primary" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data: () => {
    return {
      form: {}
    };
  },
  methods: {
    onSubmit(form) {
      //validations
      this.$emit("submit", form);
    }
  }
};
</script>
<style>
</style>
