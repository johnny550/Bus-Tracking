import Vue from 'vue'
import './styles/app.css'
import Vuetify from 'vuetify'
import router from './router/indexR.js'
import App from './App.vue'


Vue.use(Vuetify)

// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
 

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data(){
   
    return{
      Password: '',
      DriverID: '',
               
      lat:'',
      lon:''
   
    } 


  }
  /*   ,data: {
    errors: [],
    driverID: null,
    driverPASS: null,
   
  } */
  // methods:{
    // checkForm: function (e) {
      // if (this.driverPASS && this.driverID) {
        // return true;
      // }

      // this.errors = [];

      // if (!this.driverPASS) {
        // this.errors.push('Password required.');
      // }
      // if (!this.driverID) {
        // this.errors.push('ID number required.');
      // }

      // e.preventDefault();
    // }
  // }
})



