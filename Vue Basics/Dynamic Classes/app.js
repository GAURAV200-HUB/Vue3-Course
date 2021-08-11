const app = Vue.createApp({
    data() {
        return {
            showBook: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', age: 30, cover: 'assets/book1.jpg', isFav: true },
                { title: 'the way of kings', author: 'brandon sanderson', age: 40, cover: 'assets/book2.jpg', isFav: false },
                { title: 'the final empire', author: 'brandon sanderson', age: 50, cover: 'assets/book3.jpg', isFav: true }
            ],

            url: 'https://vuejs.org/'
        }
    },

    methods: {
        toggleBooks() {
            this.showBook = !this.showBook;
        },

        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    }
})

app.mount('#app')