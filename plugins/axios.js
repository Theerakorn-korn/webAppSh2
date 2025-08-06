import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
const request = axios.create({

       baseURL: 'http://localhost:8080/ovec_gensave/gensave_api', 
  })
Vue.use(VueAxios, request)


