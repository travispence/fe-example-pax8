<template>
  <div id="main" class="container">
    <h1 class="title is-1">Dashboard</h1>

    <br>
    <br>

    <div class="columns">
      <div class="column">
        <h2 class="title is-2">List of Companies</h2>
        <CompanyList :companies="companies"/>
      </div>
      <div class="colum">column 2</div>
    </div>
  </div>
</template>

<script>

import CompanyList from '../components/companyList'
import API from '../services/CompanyService'
export default {
  name: 'home',
  components: {
    CompanyList
  },
  data: () => {
    return {
      companies: []
    }
  },
  mounted() {
    API.getAll()
      .then(data => {
        this.companies = [...data]
      })
  }
};
</script>

<style>
div#main {
  border-style: solid;

  min-height: 600px;
}
</style>
