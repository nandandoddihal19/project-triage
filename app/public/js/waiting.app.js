var waitingApp = new Vue({
  el: '#patientWaitingApp',
  data: {
    patients: []
  },
  methods: {
    fetchPatients() {
      fetch('api/waiting/index.php')
      .then(response => response.json())
      .then(json => { waitingApp.patients = json })
    }
  },
  created() {
    this.fetchPatients();
  }
});
