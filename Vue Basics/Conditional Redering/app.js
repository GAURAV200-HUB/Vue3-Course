const app = Vue.createApp({
    data() {
        return {
            showBook: true,
            title: 'The Final Empier',
            author: 'Brandon Sanderson',
            age: 45
        }
    },

    methods: {
        toggleBooks() {
            this.showBook = !this.showBook;
        }
    }
})

app.mount('#app')