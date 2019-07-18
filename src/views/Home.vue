s<template>
  <div id="main" class="container">
    <h1 class="title is-1">Home Page | Dashboad</h1>

    <br />
    <br />

    <div>
      <h3 class="title is-3">Instructions</h3>
      <pre>
        <code>

1. Display a list of companies
   1. Include `id` and `name` values in list
   2. Also include an edit button.
2. Build an edit company page
   1. Display a form to edit company details
   2. Upon submitting the form, alert with new details.
3. Build a view company page
   1. Display all company details.
   2. Also display total subscriptions for that company.
   2. Build a component that takes the company `numberOfEmployees`
    property and allows a user to increase/decrease that amount.
    When user is confident in the `numberOfEmployees` change and
    submits change, the component should be able to notify the page
    its included in with the new value. The view company page should
    update with new property value. This needs to be a component
    because we are going to use it on multiple pages.
        </code>
      </pre>
    </div>

    <div class="columns">
      <div class="column">
        <CompanyList :companies="companies">
          <template #title>
            <h2 class="title is-2">List of Companies</h2>
          </template>
        </CompanyList>
      </div>
      <!-- <div class="colum">column 2</div> -->
    </div>
  </div>
</template>

<script>
import CompanyList from '../components/companyList.vue';

import API from '../services/CompanyService';

export default {
  name: 'home',
  components: {
    CompanyList,
  },
  data: () => ({
    companies: [],
  }),
  mounted() {
    API.getAll().then((data) => {
      this.companies = [...data];
    });
  },
};
</script>

<style>
div#main {
  padding: 1rem;
  min-height: 600px;
  padding-top: 2rem;
}
</style>
