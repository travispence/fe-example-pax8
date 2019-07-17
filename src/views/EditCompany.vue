<template>
    <div>
        <h2>Edit Company</h2>
        <CompanyForm @submit="handleSubmit"/>
    </div>
</template>

<script>
import CompanyForm from '../components/companyForm'
export default {
    components: {
        CompanyForm
    },
    methods: {
        handleSubmit(form) {
            alert(form.toString())
        }
    }

}
</script>

<style>

</style>
