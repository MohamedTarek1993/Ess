<template>
  <form class="contact_us">
    <div class="input row">
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

    <div class="input row">
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

    <div class="input row">
      <div class="col-12 col-lg-12">
      <textarea type="text" :placeholder="$t('Tell us about yourself ')" v-model="textarea" />

      </div>
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

<style>
</style>