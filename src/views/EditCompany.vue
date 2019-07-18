<template>
  <div class="container pt-2">
    <h2 class="title is-2">Edit Company</h2>
    <CompanyForm :form="form" @submit="handleSubmit" />
  </div>
</template>

<script>
import API from '../services/CompanyService';

import CompanyForm from '../components/companyForm.vue';

export default {
  components: {
    CompanyForm,
  },
  data: () => ({
    form: {},
  }),
  methods: {
    handleSubmit(payload) {
      const difference = Object.keys(payload.old).filter(k => (payload.new[k] && payload.old[k]
       !== payload.new[k]));
      let out = '';

      difference.forEach((key) => {
        out += `The field '${key}' has changed from ${payload.old[key]} to ${payload.new[key]}`;
        out += '\n';
      });
      if(!out) {
          out = 'No changes to form';
      }
      alert(out);
    },
  },
  mounted() {
    if (!this.$route.params.id) {
      console.error('Missing Route Param ID');
    }
    const id = parseInt(this.$route.params.id, 10);
    API.getById(id).then((data) => {
      this.form = data;
    });
  },
};
</script>

<style>
</style>
