import axios from 'axios';

export default {
    upload
}


function upload(formData,email) {
      axios({
      url: 'https://escuelatech.com/api/agent/photoupload',
      method: 'POST',
      data: formData,
      headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      'email':email
      },
      }).then(response =>{
      console.log(JSON.stringify(response.data));
      if(response.status===200){
       this.snackbar="true"  
     }
      }).catch(error=>{
       console.log("error from api"+error.response)
    }

    )

}
