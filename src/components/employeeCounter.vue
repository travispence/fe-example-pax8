<template>
    <div>
        <div class="columns">
            <div class="column">
                decrement
            </div>
            <div class="column">
                <span class>Number of Employees - {{count}}</span>
            </div>
            <div class="column">
                increment
            </div>
        </div>
        <div v-show="initialCount !== count">
            <button class="is-primary">Submit Changes</button>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        count: 0
    },
    props: {
        initialCount: {
            type: Number,
            required: true
        }
    },
    methods: {
        onSubmit(count) {
            this.$emit('updateCount', count)
        }
    },
    mounted() {
        this.count = this.initialCount || 0;
    }
}
</script>

<style>

</style>
