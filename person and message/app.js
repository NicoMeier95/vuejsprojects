const app = Vue.createApp({
    data() {
        return {
            people: [
                { name: 'John', message: 'Hello World!' },
                { name: 'Patrick', message: 'I like pizza' },
                { name: 'Evan', message: 'Come on Manchester!' },
            ]
        }
    },
    methods: {
        move() {
            const first = this.people.shift();

            this.people.push(first);
        }
    },
}).mount('#app');