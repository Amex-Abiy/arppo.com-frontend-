import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import GraphLine3D from 'vue-graph/src/components/line3d.js'
import NoteWidget from 'vue-graph/src/widgets/note.js'
import LegendWidget from 'vue-graph/src/widgets/legends.js'
import VueGraph from 'vue-graph'
import VueBootstrapDatetimePicker from 'vue-bootstrap-datetimepicker';
import { RichTextEditorPlugin } from '@syncfusion/ej2-vue-richtexteditor';
import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';

axios.defaults.baseURL = 'http://localhost:5000/v1';

axios.defaults.headers.common = {
    "Authorization": "Bearer " + localStorage.getItem('emailToken') || null,
    "BusinessId": localStorage.getItem('businessToken') || null
}

Vue.use(RichTextEditorPlugin);
Vue.use(VueGraph);
Vue.component('date-picker', VueBootstrapDatetimePicker);
Vue.component(GraphLine3D.name, GraphLine3D);
Vue.component(NoteWidget.name, NoteWidget);
Vue.component(LegendWidget.name, LegendWidget);
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.config.productionTip = false

Vue.filter('concatLink', (value) => {
    return value.slice(0, 75) + ' ...';
})

Vue.filter('sliceAnnouncementPrev', (value) => {
    if (value.length > 87) {
        return value.slice(0, 100) + ' ...';
    } else {
        return value.slice(0, 100);
    }
})

Vue.filter('capitilize', (value) => {
    return value[0].toUpperCase() + value.slice(1, value.length);
})

Vue.filter('formatDate', (value) => {
    var date = new Date(parseInt(value));
    return `${date.toString().split(' ')[1]} ${date.toString().split(' ')[2]} ${date.toString().split(' ')[3]}`;
})

Vue.filter('interpretRole', (value) => {
    return value == 1 ? 'Admin' : 'Sub-Admin';
})

Vue.filter('firstLetter', (value) => {
    return value[0].toUpperCase();
})


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')