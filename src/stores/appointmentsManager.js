import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

import { appointmentsData } from './data/appointmentData';

export const useAppointmentsManagerStore = defineStore('appointmentsManager', () => {

  // state
  const appointments = ref([]);

  // getters
  const getAppointments = computed( () => appointments.value )

  // actions
  const fetchAppointmentsList = () => {
    appointments.value = [...appointmentsData.Data];
  }

  return {
    getAppointments,
    fetchAppointmentsList
  }
})
