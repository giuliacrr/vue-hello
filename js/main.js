//Let's declare app 
const app = Vue.createApp({
  data() {
    //We must have a return for the data function :)
    return {
      //message will be printed in the html by outting {{message}} where we want.
      message: "HI MOM",
      secondMessage: "I'm using Vue"
    };
  }
})
app.mount("#app");
