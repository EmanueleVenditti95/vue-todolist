const {createApp} = Vue;

createApp({
    data() {
        return {
            tasks : [
                {
                    text : 'Quarterly Newsletter',
                    done : false,
                },{
                    text : 'Recruiting blog post',
                    done : true,
                },{
                    text : 'Mobile app launch',
                    done : true,
                },{
                    text : 'Interview John H.',
                    done : false,
                },{
                    text : 'Recruiting blog post',
                    done : true,
                },{
                    text : 'Recruiting blog post',
                    done : false,
                },{
                    text : 'Recruiting blog post',
                    done : true,
                },{
                    text : 'Recruiting blog post',
                    done : false,
                },{
                    text : 'Recruiting blog post',
                    done : true,
                }
            ]
        }
    },
    methods: {

    },
    mounted() {
        console.log('vue ok');
    }

}).mount('#app');