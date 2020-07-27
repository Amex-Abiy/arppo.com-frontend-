import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GraphLine3D from 'vue-graph/src/components/line3d.js'
import NoteWidget from 'vue-graph/src/widgets/note.js'
import LegendWidget from 'vue-graph/src/widgets/legends.js'
import { RichTextEditorPlugin } from '@syncfusion/ej2-vue-richtexteditor';
import VueGraph from 'vue-graph'
import VueBootstrapDatetimePicker from 'vue-bootstrap-datetimepicker';
import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';

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

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')