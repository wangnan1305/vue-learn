
const Hello = {
    template: `
        <div>
            <h2>Hello {{name}} {{$attrs}}</h2>
        </div>
    `,
    props: {
        name: {
            type: String,
            default: 'Vue Router'
        }
    }
}
// Vue.component('Hello',{
//     template: `
//         <div>
//             <h2>Hello {{name}} {{$attr}}</h2>
//         </div>
//     `,
//     props: {
//         name: {
//             type: String,
//             default: 'Vue Router'
//         }
//     }
// })

Vue.use(VueRouter);

let dynamicPropsFn = function(route){
    const n = new Date();
    return {
        name: (n.getFullYear() + parseInt(route.params.year)) + '!'
    }
}
const router = new VueRouter({
    mode: 'hash',
    base: '/',
    routes: [
        {path: '/', component: Hello},
        {path: '/hello/:name',component: Hello,props: true},
        {path: '/static', component: Hello, props: {name: 'world'}},
        {path: '/dynamic/:year', component: Hello, props: dynamicPropsFn},
        {path: '/attrs',component: Hello, props: {name: 'attrs'}}
    ]
})

new Vue({
    router,
    template: `
        <div id="app">
            <h1>Route props</h1>
            <ul>
                <li><router-link to="/">/</router-link></li>
                <li><router-link to="/hello/you">/hello/you</router-link></li>
                <li><router-link to="/static">/static</router-link></li>
                <li><router-link to="/dynamic/1">/dynameic/1</router-link></li>
                <li><router-link to="/attrs">/attrs</router-link></li>
            </ul>
            <router-view></router-view>
        </div>
    `
}).$mount('#app')
