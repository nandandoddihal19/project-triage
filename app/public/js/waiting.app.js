var waitingapp = new Vue({
  el: '#patientwaitingapp',
data: {

patients: []
},

methods: {
  fetchPatients() {
            fetch('dummy.php')
            .then( response => response.json() )
            .then ( json => {waitingapp.patients = json});
          }
        },
created() {
      this.fetchPatients();
          }
});
