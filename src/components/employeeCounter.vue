<template>
  <div class="contiainer counter--container">
    <h3 class="title is-3">Employee Counter</h3>
    <p></p>
    <div class="columns">
      <div class="column">
        <a class="button is-danger" @click="decrement()">
          <span class="icon">
            <i class="fas fa-minus"></i>
          </span>
        </a>
      </div>
      <div class="column is-half">
        <span class>Number of Employees - {{count}}</span>
      </div>
      <div class="column">
        <a class="button is-info" @click="increment()">
          <span class="icon">
            <i class="fas fa-plus"></i>
          </span>
        </a>
      </div>
    </div>
    <div  v-show="(initialCount !== count)">
        <span class="is-red-text">
            ** there have been changes made
        </span>
      <button class="button is-primary" @click="onSubmit(count)">Save Changes</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      count: 0
    };
  },
  props: {
    initialCount: {
      type: Number,
      required: true
    }
  },
  methods: {
    onSubmit(count) {
      this.$emit("updateCount", count);
    },
    decrement() {
      this.count--;
    },
    increment() {
      this.count++;
    }
  },
  mounted() {
    this.$nextTick(() => {
       this.count =  this.count || this.initialCount
    })
  },
  updated() {
    this.$nextTick(() => {
      this.count =  this.count || this.initialCount
    })
  }
};
</script>

<style scoped>
.counter--container {
  width: 500px;
}
</style>
