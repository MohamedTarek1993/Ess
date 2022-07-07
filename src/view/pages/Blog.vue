<template>
  <section class="single_blog">
    <div class="container">
      <div class="page-title">
        <div class="row">
          <div
            class="col-lg-8 col-md-8 col-sm-12 hidden-xs-down hidden-sm-down"
          >
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Home' }">{{
                  $t("home")
                }}</router-link>
              </li>
              <li class="breadcrumb-item active">
                <router-link to="#">{{ DetailsBlogs.title }}</router-link>
              </li>
            </ol>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <!-- end page-title -->
      <div class="content">
        <div class="img">
          <img
            :src="require(`../../assets/image/${DetailsBlogs.image}.png`)"
            alt="single blog"
          />
        </div>
        <span class="date">{{ DetailsBlogs.date }}</span>
        <h1>{{ DetailsBlogs.title }}</h1>
        <p v-html="DetailsBlogs.text"></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "blog",
  data() {
    return {
      DetailsBlogs: {
        id: "1",
        date: "22 March , 2022",
        image: "blog1",
        title: "Test And Comission 400KV Grid / Okashat",
        text: "this is content",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.single_blog {
  margin-top: 10%;
  .page-title {
    padding: 3% 1%;
    background: rgba($color: #2e493a, $alpha: 0.03);
    margin-bottom: 3%;
    border-radius: 10px;
    .breadcrumb {
      float: none;
      text-align: left;
      padding: 0;
      color: var(--bg5);
      margin: 0;
      .breadcrumb-item {
        float: none;
        font-size: 12px;
        display: inline-block;
        a {
          font-family: "regular";
          color: var(--color-primary);
          font-size: 1rem;
        }
      }
      .breadcrumb-item.active{
        a{
          font-family: "bold";

        }
      } 
    }
  }
  .content {
text-align: center;
.img {
    height: 500px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .date {
      color: var(--color-fifth);
      font-size: 0.8rem;
      font-family: "regular";
    }
    h1 {
      color: var(--color-primary);
      font-family: "bold";
      font-size: 2rem;
    }
    :is(h2, h3, h4, h5, h6) {
      color: var(--color-primary);
      font-family: "bold";
      font-size: 1.3rem;
    }
    p {
      color: var(--color-fourth);
      font-family: "regular";
      font-size: 1rem;
    }
  }
}
@media (max-width: 425.98px) {
  
}
</style>
