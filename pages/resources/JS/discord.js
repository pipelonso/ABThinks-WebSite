var vm = new Vue({
    el:'#app',
    data() {
        return {
            languaje: navigator.language.substring(0,2),
            lang : ''
        };
    },
    methods: {
    

        
    },
    mounted() {
        var languaje = navigator.language.substring(0,2);
        if (languaje == 'es') {
            this.lang = 'es';
        }else{
            this.lang = 'en';
        }
    }
});
