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
          "Content-type": "application/json; charset=UTF-8",
          SID: "",
          CID: "",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert(res.returnMessage);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
