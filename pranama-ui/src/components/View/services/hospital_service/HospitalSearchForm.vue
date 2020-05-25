<template>
    
    <div>
    
          <h2>Hospital Search Form</h2>
          
          <form >
              <div class="form-check form-group box">
                <label for="state">Choose a State</label>
                <select v-model="selectedState">
                    <option v-for="state in states" :value="state" :key="state.stateId">{{state.state}}</option>
                </select>
                <label for="city" v-if="selectedState">Choose a City</label>
                <select v-model="selectedCity" v-if="selectedState">
                    <option v-for="city in selectedState.cities" :key="city.cityId" :value="city">{{city.city}}</option>
                </select>
                </div>
            </form>
                <div class="table-wrapper box" v-if="selectedCity" >
                    <table style="width:100%"  class="alt">
                        <thead>
                        <tr>
                            <th>Hospital Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="hospital in selectedCity.hospitals" :key="hospital">
                            <td> {{hospital.name}}</td>
                            <td>{{hospital.address}}</td>
                            <td>{{hospital.phone}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
     
       
  </div>


    
</template>

<script>

  
export default {
    data() {
        return {
            states: [
                {
                    stateId: 'kl',
                    state: 'Kerala',
                    cities: [
                        {
                            cityId: 'ekm', 
                            city: 'Ernakulam', 
                            hospitals: 
                                [
                                    {
                                        name: 'PVS Memorial kochi', 
                                        address: ' Banerji Rd, Opp Gokulam park, Kaloor, Ernakulam, Kerala 682017, India', 
                                        phone: '+91 484 418 2888'
                                    }, 
                                    {
                                        name: 'Lisie Hospital kochi', 
                                        address: 'Lisie Hospital Rd, North Kaloor, Kaloor, Ernakulam, Kerala 682018, India', 
                                        phone: '+91 484 240 2044' 
                                    }, 
                                    {
                                        name: 'Sree Sudheendra Medical Mission Hospital', 
                                        address: 'Chittoor Rd, North Kaloor, Kacheripady, Ernakulam, Kerala 682018, India', 
                                        phone: ' +91 484 407 7400'
                                    }
                                    ] }, 
                         {
                             cityId: 'kzkd', 
                             city: 'Kozhikode', 
                             hospitals: 
                             [
                                {
                                    name: 'Baby Memorial Hospital', 
                                    address: 'Indira Gandhi Rd, Arayidathupalam, Kozhikode, Kerala 673004, India',
                                    phone: '+91 495 277 7777'
                                }, 
                                {
                                    name: 'Aster MIMS Hospital', 
                                    address: 'Mini Bypass Rd, Govindapuram, Kozhikode, Kerala 673016, India',
                                    phone: '+91 495 248 8000'
                                }, 
                                {
                                    name: 'PVS Hospital', 
                                    address: ' Railway Station Rd, Near Railway Station, Palayam, Kozhikode, Kerala 673002, India',
                                    phone: '+91 495 270 7222'
                                }]}, 
                         {
                             cityId: 'pkd', 
                             city: 'Palakkad', 
                             hospitals: [
                                {
                                     name: 'Lakshmi Hospital', 
                                     address: 'No. 17/751, Chittur Rd, Durga Nagar, Kenathuparambu, Kunathurmedu, Palakkad, Kerala 678013, India',
                                     phone: '+91 491 253 9999'
                                }, 
                                {
                                    name: 'Thangam Hospital', 
                                    address: 'Chadanamkurussi, West Yakkara, Palakkad, Kerala 678004, India',
                                    phone: '+91 491 251 5717'
                                }]}, 
                         {
                             cityId: 'tsr', 
                             city: 'Thrissur', 
                             hospitals: [
                                {
                                     name: 'Westfort Hospital', 
                                     address: 'RB. No. 803, W Fort Rd, Thrissur, Kerala 680004, India',
                                     phone: '+91 487 238 2130'
                                }]}, 
                         {
                             cityId: 'mlprm', 
                             city: 'Malappuram', 
                             hospitals: [
                                {
                                     name: 'M.B. Hospital', 
                                     address: 'Down Hill-Varangode Rd, Varangode, Machngal, Malappuram, Kerala 676519, India',
                                     phone: '+91 483 288 3333'
                                }, 
                                {
                                    name: 'Govt. Taluk Hospital Malappuram', 
                                    address: 'NH 966, Down Hill,(kottapadi, National Highway 213, Malappuram, Kerala 676519, India',
                                    phone: '+91 483 273 4866'
                                }]}
                        ]
                },
                 {
                     stateId: 'ka',
                     state: 'Karnataka',
                     cities: [
                        {
                            cityId: 'bnglr', 
                            city: 'Bangalore', 
                            hospitals: [
                                {
                                    name: 'Apollo Hospitals Sheshadripuram Bangalore', 
                                    address: 'No. 1, Old No. 28, Platform Road, Near Mantri Square Mall, Seshadripuram, Bengaluru, Karnataka 560020, India',
                                    phone: '+91 1860 500 1066'
                                }, 
                                {
                                    name: 'Aster CMI Hospital, Hebbal Bangalore', 
                                    address:'No. 43/2, New Airport Road, NH 44, Sahakar Nagar, Hebbal, Bengaluru, Karnataka 560092, India',
                                    phone: '+91 80 4342 0100'
                                }]},
                        {
                            cityId: 'mys', 
                            city:'Mysore', 
                            hospitals: 
                            [
                                {
                                    name: 'Apollo BGS Hospitals, Mysuru', 
                                    address: 'Adichunchanagiri Road, Kuvempu Nagara, Mysuru, Karnataka 570023, India',
                                    phone: '+91 821 256 8888'
                                }]}, 
                        {
                            cityId: 'mnglr', 
                            city: 'Mangalore', 
                            hospitals: 
                            [
                                {
                                    name: 'Yenepoya Specialty Hospital', 
                                    address: 'KSR Road, Opp Bishops House, Kodailbail, Mangalore, Karnataka 575003, India',
                                    phone: '+91 824 423 8855'
                                }]}
                        ]
                 },
                 {
                     stateId: 'tn',
                     state: 'Tamil Nadu',
                     cities: [
                        {
                            cityId: 'cbe',
                            city: 'Coimbatore',
                            hospitals: [
                            {
                                name: 'KG Hospital',
                                address: '5, Government Arts College Rd, Opposite Court, Gopalapuram, Coimbatore, Tamil Nadu 641018, India',
                                phone: '+91 422 221 2121'
                            }]
                        },
                        {
                            cityId:'cn', 
                            city: 'Chennai',
                             hospitals: [
                            {
                                name: 'Apollo City Centre Hospital Sowcarpet',
                                address: 'No. 134, Mint St, opposite Ramar Temple, Sowcarpet, Peddanaickenpet, George Town, Chennai, Tamil Nadu 600079, India',
                                phone: '+91 1860 500 4916'
                            }]
                        }]
                 }
            ],
            selectedState: null,
            selectedCity: null,
        }
    }
      
};
   
</script>

<style scoped>
/* select{
    border: 1px solid rgb(27, 189, 154);
}
table, th, td {
  border: 1px solid rgb(27, 189, 154);
}
table {
    margin-top: 20px;

} */
</style>