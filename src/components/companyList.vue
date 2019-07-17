<template>
    <div>
        <slot name="title">  
        </slot>
        <ul class="company--list">
            <slot>
            <li class="company--list-item" v-for="company in companies" v-bind:key="company.id"> 
               {{company.id }} (  {{company.name}}  ) - <router-link :to="`/company/edit/${company.id}`">edit</router-link>
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
            required: true
        }
    }
}
</script>

<style>
    .company--list{
        list-style-type: none;
    }
    .company--list-item {
        margin: 0;
        padding: 0;
    }
    
</style>
