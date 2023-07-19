//Let's declare app 
const app = Vue.createApp({
  data() {
    //We must have a return for the data function :)
    return {
      //message will be printed in the html by outting {{message}} where we want.
      message: "HI MOM",
      secondMessage: "I'm using Vue",
      picClass: "d-block m-auto",
      picUrl: "https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-dcb93e90c4e1548ffb16978a5a8d182270c872a9.jpg"
    };
  }
})
app.mount("#app");
