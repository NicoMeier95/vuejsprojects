let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            size: 150,
            rotation: 0
        }
    },
    computed: {
        circle_classes() {
            return { purple: this.isPurple }
        },
        rotate() {
            return {
                transform: `rotateZ(${this.rotation}deg)`
            };
        }

    }
}).mount('#app');