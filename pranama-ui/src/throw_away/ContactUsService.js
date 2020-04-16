import axios from 'axios'
const apiClient = axios.create({
    baseURL: 'http://malabarhangouts.com',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    methods: {
        getContact(from, content, subject,contents) {
            // console.log(from);
            // console.log(content);
            // console.log(subject);
            return apiClient.post('/api/email/contactus',{ from: from, to: from,subject: content, content: contents}).then(response => {
                console.log(response);
              })
        }
    }
}