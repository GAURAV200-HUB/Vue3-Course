const app = Vue.createApp({
    data() {
        return {
            title: 'The Final Empier',
            author: 'Brandon Sanderson',
            age: 45
        }
    },

    methods: {
        changeAuthor(chngAut) {
            // this.author = 'Gaurav Kadam'
            this.author = chngAut
        }
    }
})

app.mount('#app')