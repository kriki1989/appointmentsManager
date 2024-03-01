<script setup>
import { computed } from 'vue';
import { useAppointmentsManagerStore } from '../stores/appointmentsManager';

const headers = [
    { title: 'Scheduled Date', align: 'start', key: 'ScheduledDate', sortable: true },
    { title: 'Examination Title', align: 'start', key: 'ExaminationCategory_Title', sortable: true },
    { title: 'Full Name', align: 'start', key: 'FullName', sortable: true },
    { title: 'Phone', align: 'start', key: 'Phone', sortable: true },
];
const store = useAppointmentsManagerStore();

store.fetchAppointmentsList();
const items = computed(() => store.getAppointments);

</script>

<template>
<h1>Appointments List</h1>
<!-- <pre>{{ items }}</pre> -->

<v-data-table
    :headers="headers"
    :items="items"
    height="750"
    items-per-page="-1"
></v-data-table>
</template>

<style scoped>
</style>