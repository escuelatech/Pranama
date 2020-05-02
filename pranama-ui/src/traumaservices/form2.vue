<template>
    <div>

        <!-- Wrapper -->
           <div id="wrapper">
                <!-- Main -->
           <div id="main">
           <div class="inner">
               <!-- Header -->

              <Header />
              <h2>TRAUMACARE KOZHIKODE(TRACK)-Disaster Management Training - Application Form</h2>
              <form  @submit.prevent="submitForm2" >
            <div class="row gtr-uniform">
              <div class="col-6 col-8-xsmall">
                <input
                  type="text"
                  name="serialno"
                  value
                  placeholder="serial No.(Fill in capital letters)"  v-model="serialno"
                  
                />
                
              </div>
              <div class="col-6 col-8-xsmall">
                <input
                  type="text"
                  name="regno"
                  value
                  placeholder="Reg. No." v-model="regno"
                  
                />
                
              </div>
              <div class="col-6 col-8-xsmall">
              <div class="form-check form-group">
              <p >Are you a TraumaCare Volunteer</p>
                <input type="radio" name="volunteerCheck" value="Yes" id="yes" />
                <label for="yes">Yes</label>
                <input type="radio" name="volunteerCheck" value="No" id="no"/>
                <label for="no">No</label>
              </div>
             </div>

               <div class="col-6 col-8-xsmall">
                <input
                  type="text"
                  name="cardNo"
                  value
                  placeholder="If yes write card No. & year" v-model="cardNo"
                  
                />
                
              </div>
                <div class="col-6 col-8-xsmall">
              <div class="form-check form-group">
              <p >Have you already participated in Disaster Management Training camp?</p>
                <input type="radio" name="disasterCheck" value="yes"  id="Ysdis"/>
                <label for="yes">Yes</label>
                <input type="radio" name="disasterCheck" value="no" id="nodis" />
                <label for="no">No</label>
              </div>
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
              <div class="col-6 col-12-xsmall">
                <input
                  type="Number"
                  name="age"
                  value
                  placeholder="Age" v-model="age"
                  
                />
                
              </div>
              <div class="col-6 col-8-xsmall">
              <div class="form-check form-group">
                <input type="radio" name="gender" value="Male" id="male" v-model="gender" />
                <label for="male">Male</label>
                <input type="radio" name="gender" value="female" id="female" v-model="gender" />
                <label for="female">female</label>
              </div>
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
                  name="fatheraddress"
                  value
                  placeholder="Father/Guardian Address" v-model="fatheraddress"
                  
                />
                
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="phone"
                  value
                  placeholder="Father/Guardian Phone" v-model="phone"
                 
                />
                
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="occupation"
                  value
                  placeholder="Occupation" v-model="occupation"
                 
                />
                
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="permanentaddress"
                  value
                  placeholder="Permanent Address" v-model="permanentaddress"
                  
                />
                
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="presentaddress"
                  value
                  placeholder="Presentaddress" v-model="presentaddress"
                  
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
                  name="phoneoffice"
                  value
                  placeholder="Phone Office" v-model="phoneoffice"
                  
                 
                />
                
              </div>
              <div class="col-6 col-10-xsmall">
                <input type="email" name="email" value placeholder="Email" v-model="email" required />
               
              </div>
              <div class="col-6 col-10-xsmall">
                <input
                  type="text"
                  name="education"
                  value
                  placeholder="Educational Qualification" v-model="education"
                 
                />
                
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
                  name="specialskills"
                  value
                  placeholder="Special Skills" v-model="specialskills"
                 
                />
                
              </div>
             
               
              </div>
              <div class="col-6 col-6-xsmall">
                <input
                  type="text"
                  name="place"
                  value
                  placeholder="Place" v-model="place"
                 
                />
                
              </div>
              <div class="col-6 col-6-xsmall">
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
                serialno:"",
                regno:"",
                volunteerCheck:"",
                cardNo:"",
                disasterCheck:"",
                name:"",
                bloodgroup:"",
                age:"",
                gender:"",
                guardianName:"",
                fatheraddress:"",
                phone:"",
                occupation:"",
                permanentaddress:"",
                presentaddress:"",
                pincode:"",
                district:"",
                mobile:"",
                phoneoffice:"",
                email:"",
                education:"",
                proffession:"",
                specialskills:"",
                place:"",
                date:"",
                signature:""
                  
            }
        },
        methods: {
    submitForm2() {
      formservice
        .submitForm2({
          serialno: this.serialno,
          regno:this.regno,
          volunteerChec:this.volunteerCheck,
          cardNo:this.cardNo,
          disasterCheck:this.disasterCheck,
          name:this.name,
          bloodgroup:this.bloodgroup,
           age:this.age,
           gender:this.gender,
            guardianName:this.guardianName,
            fatheraddress:this.fatheraddress,
            phone:this.place,
            occupation:this.permanentaddress,
            permanentAddress:this.permanentAddress,
           presentaddress:this.presentaddress,
           pincode:this.pincode,
           district:this.district,
            mobile:this.mobile,
            phoneoffice:this.phoneoffice,
           email:this.email,
           education:this.education,
             proffession:this.proffession,
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
    }
</script>

<style lang="scss" scoped>
#signature{
    margin-left: 500px;
}
</style>