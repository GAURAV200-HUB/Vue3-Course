const app = Vue.createApp({
    data() {
        return {
            showBook: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', age: 30, cover: 'assets/book1.jpg' },
                { title: 'the way of kings', author: 'brandon sanderson', age: 40, cover: 'assets/book2.jpg' },
                { title: 'the final empire', author: 'brandon sanderson', age: 50, cover: 'assets/book3.jpg' }
            ],

            url: 'https://vuejs.org/'
        }
    },

    methods: {
        toggleBooks() {
            this.showBook = !this.showBook;
        }
    }
})

app.mount('#app')