<template>
  <div>
    <!-- Wrapper -->
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->

          <Header />
          <h2>TRAUMACARE KOZHIKODE(TRACK)-Application Form</h2>
        
        
        <form   @submit.prevent="submitForm">
            <div class="row gtr-uniform">
              <div class="col-6 col-8-xsmall">
                <input
                  type="text"
                  name="SI.NO"
                  value
                  placeholder="serial No.(Fill in capital letters)" v-model="serialno"
                  
                />
                
              </div>
              <div class="col-6 col-8-xsmall">
                <input
                  type="text"
                  name="regNo"
                  value
                  placeholder="Reg. No." v-model="regno"
                  
                />
                
              </div>
              <div class="col-6 col-8-xsmall">
                <input
                  type="text"
                  name="name"
                  value
                  placeholder="Name" v-model="name"
                  
                />
                
              </div>
              <div class="col-6 col-8-xsmall">
                <input
                  type="text"
                  name="bloodgroup"
                  value
                  placeholder="Blood Group" v-model="bloodgroup"
                  
                />
                
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="Number"
                  name="age"
                  value
                  placeholder="Age" v-model="age"
                  
                />
                
              </div>
               <div class="form-check form-group">
                <input type="radio" name="gender" value="Male" id="male"  />
                <label for="male">Male</label>
                <input type="radio" name="gender" value="female" id="female"  />
                <label for="female">female</label>
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="guardianName"
                  value
                  placeholder="Father/Guardian Name" v-model="guardianName"
                  
                />
                
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="permanentAddress"
                  value
                  placeholder="Permanent Address" v-model="permanentAddress"
                  
                />
                
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="presentAddress"
                  value
                  placeholder="Present Address" v-model="presentAddress"
                  
                />
                
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="pincode"
                  value
                  placeholder="Pincode" v-model="pincode"
                 
                />
               
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="district"
                  value
                  placeholder="District" v-model="district"
                 
                />
               
              </div>
               <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="mobile"
                  value
                  placeholder="Mobile" v-model="mobile"
                 
                />
                
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="phoneOffice"
                  value
                  placeholder="Phone Office" v-model="phoneOffice"
                 
                />
                
              </div>
              <div class="col-6 col-10-xsmall">
                <input type="email" name="email" value placeholder="Email"  v-model="email"/>
                
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="proffession"
                  value
                  placeholder="Proffession" v-model="proffession"
                 
                />
                
              </div>
               <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="eduqualific"
                  value
                  placeholder="Educational Qualification" v-model="eduqualific"
                 
                />
                
              </div>
              
                
            </div>
            <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="place"
                  value
                  placeholder="Place" v-model="place"
                 
                />
                
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="date"
                  value
                  placeholder="Date" v-model="date"
                 
                />
                
              </div>
               <div class="col-6 col-4-xsmall" id="signature">
                <input
                  type="text"
                  name="signature"
                  value
                  placeholder="Signature" v-model="signature"
                 
                />
                
              </div>
              <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="Submit" class="primary"  /></li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                 </ul>
              </div>
         </form>   
           </div>
      </div>
      <sidebar />
    </div>
  </div>
</template>

<script>
import Header from "@/components/View/common/Header";
import Sidebar from "@/components/View/common/Sidebar";
import formservice from "@/apiservices/formService";
export default {
  components: { Header, Sidebar },
  data(){
      return{
   serialno: "",
   regno:"",
   name:"",
   bloodgroup:"",
   age:"",
   gender:"",
   guardianName:"",
   permanentAddress:"",
   presentAddress:"",
   pincode:"",
   district:"",
   mobile:"",
   phoneOffice:"",
   email:"",
   proffession:"",
   eduqualific:"",
  place:"",
  date:"",
  signature:""

      }
  },
   methods: {
    submitForm() {
      formservice
        .submitForm({
          serialno: this.serialno,
          regno:this.regno,
          name:this.name,
           bloodgroup:this.bloodgroup,
           age:this.age,
           gender:this.gender,
            guardianName:this.guardianName,
            permanentAddress:this.permanentAddress,
           presentAddress:this.presentAddress,
           pincode:this.pincode,
           district:this.district,
            mobile:this.mobile,
            phoneOffice:this.phoneOffice,
           email:this.email,
             proffession:this.proffession,
           eduqualific:this.eduqualific,
           place:this.place,
           date:this.date,
            signature:this.signature
        })

        .then(response => {
          response.data;
         console.log(response) ;
         this.sendingSuccessful = true;
        
         /*.then(() => {
          
          
         if (this.status == "400"){
            return this.m =  "Registration Success!!! You will get an email as part of this this registration."
          }
          else{
              return this.m = "Oops....!!! try again"
          }*/

        })
        .catch(error => {
          this.sendingSuccessful = false;
          console.log("There was an error", error.response);
          this.sendingSuccessful = true;
          });
    } 
   }
};
</script>

<style lang="scss" scoped>
#signature{
    margin-left: 500px;
}
</style>