<template>
  <div class="main-title-center">
    <h2>{{ $t("form_title") }}</h2>
    <p>{{ $t("form_text") }}</p>
  </div>
  <form class="contact_us">
    <div class="input-group row">
      <div class="col-lg-6 col-12">
        <input
          type="text"
          class="form-control"
          :placeholder="$t('Enter your name')"
          v-model="name"
        />
      </div>

      <div class="col-lg-6 col-12">
        <input
          type="text"
          class="form-control"
          :placeholder="$t('Enter your company')"
          v-model="company"
        />
      </div>
    </div>

    <div class="input-group row">
      <div class="col-lg-6 col-12">
        <input
          type="email"
          class="form-control"
          :placeholder="$t('Your email')"
          v-model="email"
        />
      </div>

      <div class="col-lg-6 col-12">
        <input
          type="number"
          class="form-control"
          :placeholder="$t('Phone number')"
          v-model="phone"
        />
      </div>
    </div>

    <div class="input-group row">
      <div class="col-12 col-lg-12">
        <textarea
          type="text"
          class="form-control"
          :placeholder="$t('Tell us about yourself')"
          v-model="message"
        />
      </div>
    </div>
    
    <div class="button">
      <button type="button" @click="fetch_contact_data" class="btn secondary">
        {{ $t("Contact_Us") }}
      </button>
      <p>{{$t("")}}</p>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Form",
  data() {
    return {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    fetch_contact_data() {
      let data = {
        name: this.name,
        company: this.company,
        email: this.email,
        phone: this.phone,
        message: this.message,
      };
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.post("/v1/dashboard/contact", data).then(({ data }) => {
        if (data.status == true) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: data.msg,
            timer: 1500,
          });
        }
        else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: data.message,
            timer: 1500,
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.main-title-center {
  margin-top: 10%;
  h2 {
    font-size: 2rem;
  }
  p {
    padding: 0;
  }
}
.button {
  justify-content: center;
  margin-top: 2%;
  .btn {
    padding: 1%;
    width: 24%;
  }
}
@media (max-width: 768.98px) {
  .input-group .form-control {
    margin-bottom: 4%;
  }
  .button .btn {
    width: 50%;
  }
}
</style>
