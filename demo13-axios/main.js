axios.defaults.baseURL = "https://api-takming.herokuapp.com/api/v1";
axios.defaults.headers.common["SID"] = "";
axios.defaults.headers.common["CID"] = "";
axios.defaults.headers.post["Content-Type"] = "application/json";

var app = new Vue({
  el: "#container",
  data() {
    return {
      request: {
        name: "",
        phone: "",
        gender: "",
        email: "",
        zip: "",
        address: "",
      },
    };
  },
  methods: {
    async addUser() {
      try {
        const res = await axios.post("/user", this.request);

        console.log(res);
        alert(res.data.returnMessage);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
