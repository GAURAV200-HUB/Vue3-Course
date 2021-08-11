const app = Vue.createApp({
    data() {
        return {
            showBook: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', age: 30 },
                { title: 'the way of kings', author: 'brandon sanderson', age: 40 },
                { title: 'the final empire', author: 'brandon sanderson', age: 50 }
            ]
        }
    },

    methods: {
        toggleBooks() {
            this.showBook = !this.showBook;
        }
    }
})

app.mount('#app')