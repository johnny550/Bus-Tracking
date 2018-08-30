<template>
    <div style="display:absolute">
        <v-form ref="form" @submit.prevent="submit" id="form">
        <v-text-field id="BusID"
        v-model="$root.BusID"
        label="Bus ID"
        box
        required
        ></v-text-field>
        
        <v-text-field id="RouteNumber"
        v-model="$root.RouteID"
        label="Route Number"
        box
        required
        ></v-text-field>
        

        <v-btn  
        @click.native="submit"
        >
        <router-link to="/GPS"> submit </router-link>
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
           
            BusID: '',
            RouteID: ''
        }  
        } ,      
    
     methods: {
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
