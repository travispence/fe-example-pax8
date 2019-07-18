<template>
  <form @submit.prevent="onSubmit">
     <div class="field">
      <label class="label">ID</label>
      <div class="control">
        <input class="input" :value="form.id" type="text" placeholder="XXXXXX1234" disabled/>
      </div>
    </div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" @input="localForm.name = $event.target.value" :value="form.name" type="text" placeholder="Pax8" />
      </div>
    </div>

    <div class="field">
      <label class="label">Domain</label>
      <div class="control">
        <input class="input" @input="localForm.domain = $event.target.value" :value="form.domain" type="text" placeholder="e.g. pax8.com" />
      </div>
    </div>
    <div class="field">
      <label class="label">Number of Employees</label>
      <div class="control">
        <input class="input" @input="localForm.numberOfEmployees = $event.target.value" :value="form.numberOfEmployees" type="text" placeholder="e.g. 10, 20 etc." />
      </div>
    </div>
    <div class="field">
      <label class="label">Subscriptions Per Employee</label>
      <div class="control">
        <input class="input" @input="localForm.subscriptionsPerEmployee = $event.target.value" :value="form.subscriptionsPerEmployee" type="text" placeholder="e.g. 1, 5, 25" />
      </div>
    </div>
    <button class="button is-primary" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data:() => {
    return {
      localForm: {}
    }
  },
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.localForm = {... this.form }; 
    })
  },
  methods: {
    onSubmit() {
      //validations
      this.$emit("submit", {old: this.form, new: this.localForm});
    }
  }
};
</script>
<style>
</style>
