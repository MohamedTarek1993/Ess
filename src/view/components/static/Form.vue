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
      <textarea type="text" class="form-control" :placeholder="$t('Tell us about yourself ')" v-model="textarea" />

      </div>
    </div>
    <div class="button">
      <button class="btn secondary">{{ $t("Contact_Us") }}</button>
    </div>
  </form>
</template>

<script>
export default {
    name:'Form',
    data(){
        return{
        name:'',
        company:'',
        email:'',
        phone:'',
        textarea:'',

        }
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
.button{
  justify-content: center;
      margin-top: 2%;
.btn{
  padding: 1%;
  width: 24%;

}
}

</style>
