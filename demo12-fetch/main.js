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
      await fetch("https://api-takming.herokuapp.com/api/v1/user", {
        method: "POST",
        body: JSON.stringify(this.request),
        headers: {
          "Content-type": "application/json;",
          SID: "",
          CID: "",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert(data.returnMessage);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
