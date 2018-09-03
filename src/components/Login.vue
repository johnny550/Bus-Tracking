<template>
    <div style="display:absolute">
        <v-form ref="form" @submit.prevent="checkForm" id="form">
        <v-text-field id="DriverID"
        v-model="$root.DriverID"
        label="Driver ID"
        box
        required
        ></v-text-field>
        
        <v-text-field id="Password"
        v-model="$root.Password"
        type="password"
        label="Password"
        box
        required
        ></v-text-field>
        

        <v-btn  
        @click.native="submit"
        >
        <router-link to="/Location" v-if="this.errors.length<=0"> submit </router-link>
        </v-btn>
        <v-btn
        @click.native="clear"
        >
        clear
        </v-btn>
      
    </v-form>
    </div>
</template>

<script>
export default {
    data(){
        return{
           errors: []
        }  
        } ,      
    
     methods: {
           checkForm(e){
      if (this.$root.Password && this.$root.DriverID) {
        return true;
        alert("subvmit now")
        
      }

     // this.errors = [];

      if (!this.$root.Password) {
        this.errors.push('Password required.');
      }
      if (!this.$root.DriverID) {
        this.errors.push('ID number required.');
      }

      e.preventDefault();
    },
            submit(){
                
                console.log('hey')
                
               // alert(this.$root.Password)
                
               

            },
            clear(){
               this.$refs.form.reset()
            }
     }


}
</script>
