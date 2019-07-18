<template>
  <div>
    <slot name="title"></slot>
    <ul class="company--list">
      <slot>
        <li class="company--list-item" v-for="company in companies" v-bind:key="company.id">
          <div>{{`${company.id} ( ${company.name} )`}} </div>
          <div>
            <router-link :to="`/company/edit/${company.id}`">edit</router-link>
          </div>
          <div>
            <router-link :to="`/company/${company.id}`">view</router-link>
          </div>
        </li>
      </slot>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    companies: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.company--list {
  list-style-type: none;
}
.company--list-item {
  margin: 0;
  padding: 0;
  height: 2rem;
}
.company--list-item:nth-child(2n) {
  background-color: #efefef;
}
.company--list-item div {
    display: inline-block;
    margin-left: .5rem;
    padding: .5rem;
}
</style>
