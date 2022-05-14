<template>
  <div class="d-grid d-sm-flex gap-3 mb-5">
    <select name="sido" id="sido" class="form-select" v-model="sidoCode">
      <option value="">시/도</option>
    </select>
    <select
      name="sigugun"
      id="sigugun"
      class="form-select"
      v-model="sigugunCode"
    >
      <option value="">시/군/구</option>
    </select>
    <select name="dong" id="dong" class="form-select" v-model="dongCode">
      <option value="">동/읍/면</option>
    </select>
    <button
      type="submit"
      id="addr_search_btn"
      name="addr_search_btn"
      class="btn btn-secondary y w-25"
    >
      <i class="bi bi-search"></i>
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      sidoCode: "",
      sigugunCode: "",
      dongCode: "",
    };
  },
  methods: {
    getSido() {
      axios
        .get(
          "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000"
        )
        .then((response) => {
          response.data.regcodes.forEach((data) => {
            var option = document.createElement("option");
            option.setAttribute("value", data.code[0] + data.code[1]);
            option.innerHTML = data.name;
            document.getElementById("sido").appendChild(option);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clearElements(id) {
      const element = document.getElementById(id);
      while (element.hasChildNodes()) {
        element.removeChild(element.firstChild);
      }
      var defaultOp = document.createElement("option");
      defaultOp.setAttribute("value", "");
      if (id === "sigugun") {
        defaultOp.innerHTML = "시/군/구";
        this.sigugunCode = "";
        this.dongCode = "";
      } else if (id === "dong") {
        defaultOp.innerHTML = "동/읍/면";
        this.dongCode = "";
      }
      element.appendChild(defaultOp);
    },
    async getSigugun() {
      await this.clearElements("sigugun");
      await this.clearElements("dong");
      if (this.sidoCode != "") {
        axios
          .get(
            `https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=${this.sidoCode}*000000&is_ignore_zero=true`
          )
          .then((response) => {
            response.data.regcodes.forEach((data) => {
              var option = document.createElement("option");
              option.setAttribute("value", data.code[2] + data.code[3]);
              const arr = data.name.split(" ");
              option.innerHTML = arr[1];
              document.getElementById("sigugun").appendChild(option);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    async getDong() {
      await this.clearElements("dong");
      if (this.sigugunCode != "") {
        axios
          .get(
            `https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=${this.sidoCode}${this.sigugunCode}*&is_ignore_zero=true`
          )
          .then((response) => {
            response.data.regcodes.forEach((data) => {
              var option = document.createElement("option");
              option.setAttribute("value", data.code.slice(4));
              const arr = data.name.split(" ");
              var dongName = "";
              for (let i = 2; i < arr.length; i++) {
                dongName += arr[i];
                dongName += " ";
              }
              option.innerHTML = dongName;
              document.getElementById("dong").appendChild(option);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  mounted() {
    this.getSido();
    document.getElementById("sido").onchange = this.getSigugun;
    document.getElementById("sigugun").onchange = this.getDong;
  },
  // updated() {
  //   console.log("sido: " + this.sidoCode);
  //   console.log("sigugun: " + this.sigugunCode);
  //   console.log("dong: " + this.dongCode);
  // },
};
</script>

<style></style>
