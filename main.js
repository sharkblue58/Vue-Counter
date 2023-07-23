const app=Vue.createApp({
    data() {
      return {
          heading:'Counter App',
          counter:0
      };
    },
    methods: {
        increment(){
            this.counter++;
        },
        decrement(){
            this.counter--;
        },
        reset(){
            this.counter=0;
        }
    },
  });
  app.mount("#app");
  