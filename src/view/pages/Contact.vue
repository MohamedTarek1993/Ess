<template>
  <div class="main-title-center">
    <h2>{{ $t("Contact_Us") }}</h2>
    <p>{{ $t("contact_disc") }}</p>
  </div>
  <div class="map">
    <iframe :src="Sitting.map_link" width="100%" height="480"></iframe>
  </div>

  <section class="information">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
               <div class="card">
                
               </div>
            </div>
             <div class="col-lg-4 col-md-6 col-12">
   
            </div>
             <div class="col-lg-4 col-md-6 col-12">
   
            </div>
        </div>
    </div>
  </section>
  <Form />
</template>

<script>
import Form from "../components/static/Form.vue";

export default {
  name: "Contact",
  components: {
    Form,
  },
  data() {
    return {
      Sitting: {
        map_link:
          "https://www.google.com/maps/d/embed?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&hl=en_US&ehbc=2E312F",
      },
    };
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
</style>
