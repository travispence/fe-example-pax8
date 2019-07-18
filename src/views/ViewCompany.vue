<template>
  <div id="main" class="container">
    <div class="columns">
      <div class="column">
        <h2 class="title is-2">Company Profile</h2>
        <div class="card">
          <div class="card-content">
            <p class="title">{{company.id}} - {{company.name}}</p>
            <p class="subtitle">
              <a :href="'//' +company.domain" rel="nofollow" target="blank">{{company.domain}}</a>
            </p>
            <p>
              <strong>Number of Employees</strong>
              {{company.numberOfEmployees}}
              <br />
              <strong>Subscriptions Per Employee</strong>
              {{company.subscriptionsPerEmployee }}
              <em>({{totalSubscriptions}} ) subscriptions total</em>
            </p>
          </div>
          <footer class="card-footer">
            <p class="card-footer-item">
              <span>
                <router-link :to="`/company/edit/${company.id}`">edit</router-link>
              </span>
            </p>
          </footer>
        </div>
      </div>
      <div class="column">
        <h2 class="title is-2">Widgets</h2>
        <EmployeeCounter :initialCount="company.numberOfEmployees" @updateCount="updateCount" />
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeCounter from '../components/employeeCounter.vue';

import API from '../services/CompanyService';

export default {
  data: () => ({
    company: {
      numberOfEmployees: 0,
    },
  }),
  components: {
    EmployeeCounter,
  },
  computed: {
    totalSubscriptions() {
      return (
        this.company.numberOfEmployees * this.company.subscriptionsPerEmployee
      );
    },
  },
  mounted() {
    const id = parseInt(this.$route.params.id, 10);
    API.getById(id).then((data) => {
      this.company = { ...this.company, ...data };
    });
  },
  methods: {
    updateCount(count) {
      this.company.numberOfEmployees = count;
    },
  },
};
</script>

<style>
</style>
