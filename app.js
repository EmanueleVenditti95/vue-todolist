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
            const taskObj = {
                text : task.trim(),
                done : false
            };
            this.newTask = '';
            this.tasks.unshift(taskObj);
        },

        markTask(task){
            console.log(task.done)
            if (task.done === true){
                task.done = false;
            } else {
                task.done = true;
            } 
            // task.done = !task.done VERSIONE BREVE     
        }
    },
    mounted() {
        console.log('vue ok');
    }

}).mount('#app');