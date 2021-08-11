const app = Vue.createApp({
    data() {
        return {
            showBook: true,
            title: 'The Final Empier',
            author: 'Brandon Sanderson',
            age: 45,
            x: 0,
            y: 0
        }
    },

    methods: {
        toggleBooks() {
            this.showBook = !this.showBook;
        },

        handleEvent(e, data) {
            // console.log('Event entered')
            console.log(e, e.type)
            if(data) {
                console.log(data)
            }
        },

        handlemouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app')