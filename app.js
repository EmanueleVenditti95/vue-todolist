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
        removeTask(removeIndex){
            this.tasks.splice(removeIndex,1)
            console.log(this.tasks,removeIndex)
        }
    },
    mounted() {
        console.log('vue ok');
    }

}).mount('#app');