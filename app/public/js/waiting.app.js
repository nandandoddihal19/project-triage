var waitingapp = new Vue({
  el: '#patientwaitingapp',
data: {
  patients: []
},

methods: {
  fetchPatients() {
            fetch('dummy.php')
            // .then( response => response.json() )
            .then ( response => {waitingapp.patients = response.json()});
          }
        },
created() {
      this.fetchPatients();
          }
});
