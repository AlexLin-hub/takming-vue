var app = new Vue({
  el: "#container",
  data() {
    return {
      content: "",
      items: [],
    };
  },
  methods: {
    submit() {
      if (this.content === "") {
        alert("待辦事項不得為空");
        return;
      }
      this.addItem();
    },

    addItem() {
      this.items.push(this.content);
      this.content = "";
    },
  },

  computed: {
    isEmpty() {
      return this.items.length === 0;
    },
  },
});
