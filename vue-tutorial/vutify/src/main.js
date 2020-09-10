import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import StatusComponents from './Status.vue'



//Vue.component('AppStatus', StatusComponents)
Vue.config.productionTip = false

export const eventBus = new Vue({
    methods: {
        userWasEdited(date) {
            this.$emit('userWasEdited', date)
        }
    }
})

new Vue({
        router,
        store,
        vuetify,
        render: h => h(App)
    }).$mount('#app')
    //선언된 뷰를 통해 전체 application이 돌아간다.