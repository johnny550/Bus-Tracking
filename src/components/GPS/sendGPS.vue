<template>
    <div >
	
	<p>{{error}}</p>
      <v-text-field id="lat"
        v-model="$root.lat"
        label="lat"
        box
        required
        disabled
        ></v-text-field>
        
        <v-text-field id="lon"
        v-model="$root.lon"
        type="lon"
        label="lon"
        box
        required
        disabled
        ></v-text-field>
         <v-btn
        @click.native="myFunction"
        >
        click
        </v-btn>
	
</div>
</template>


<script>
export default {
    data(){
        return{
          errorU:'',
          options : {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
}
    
        }  
        } ,      
    
     methods:{
   
	showPosition:function (position) {	
		   this.lat = position.coords.latitude;
		this.lon = position.coords.longitude;
    },
    error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
},
 myFunction: function () {		
	 if(navigator.geolocation){
	 navigator.geolocation.getCurrentPosition(this.showPosition, this.error, this.options);
	 }else{
	 this.errorU = "Geolocation is not supported."; 
		 
	 }
    }
	}

};
</script> 
