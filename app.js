const {createApp} = Vue;

createApp({
    data() {
        return {
            newTask : '',
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
                }
            ]
        }
    },
    methods: {
        removeTask(removeIndex){
            this.tasks.splice(removeIndex,1);
        },

        addTask(task){
            const taskObj = {};
            const done = false;
            taskObj.text = task;
            taskObj.done = done;
            this.tasks.unshift(taskObj);
            console.log(taskObj,this.tasks)
        }
    },
    mounted() {
        console.log('vue ok');
    }

}).mount('#app');