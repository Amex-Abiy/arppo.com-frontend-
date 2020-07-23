import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GraphLine3D from 'vue-graph/src/components/line3d.js'
import NoteWidget from 'vue-graph/src/widgets/note.js'
import LegendWidget from 'vue-graph/src/widgets/legends.js'
import VueGraph from 'vue-graph'

Vue.use(VueGraph);
Vue.component(GraphLine3D.name, GraphLine3D);
Vue.component(NoteWidget.name, NoteWidget);
Vue.component(LegendWidget.name, LegendWidget);

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