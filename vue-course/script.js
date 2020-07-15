new Vue ({
    el: '#app',
    data: {
        counter: 0,
        x: 0,
        y: 0,
        title: 'Hello World!',
        link: 'http://google.com',
        finishedLink: '<a href="http://google.com">Google</a>'
    },
    methods: {
        sayHello() {
            this.title = 'Hello!'
            return this.title;
        },
        increase(n, event) {
            this.counter += n;
        },
        updateCoordinates(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertMe() {
            alert('Alert!');
        }
    }
});

new Vue ({
    el: '#app2',
    data: {
        name: 'Max'
    }
});

new Vue ({
    el: '#app3',
    data: {
        counter: 0,
        secondCounter: 0
    },
    computed: {
        output() {
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5;'

        }
    },
    methods: {
        result() {
            return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5;'
        }
    }
});