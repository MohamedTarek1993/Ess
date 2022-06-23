<template>
  <section class="blog_section">
    <div class="container">
      <div class="main-title-center">
        <span> Blog</span>
        <h2>{{ BlogsSection.title }}</h2>
        <p>{{ BlogsSection.text }}</p>
      </div>
      <div class="boxes">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-12"
            v-for="(blogs, index) in BlogsSection.blogs"
            :key="index"
          >
          <!-- <router-link class="link" :to="`/blog/${blogs.id}`"> -->
          <router-link class="link" :to="`/blog/2`">
            <div class="card">
              <div class="img">
                <img
                  :src="require(`../../../assets/image/${blogs.image}.png`)"
                />
              </div>
              <span class="data">{{ blogs.date }}</span>
              <h4>{{ blogs.title }}</h4>
              <p>{{ blogs.text }}</p>
            </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="button">
        <router-link class="btn secondary" :to="{ name: 'Blogs' }">
          VIEW More</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "blogSection",
  data() {
    return {
      BlogsSection: {
        title: "The Latest News That Informs You",
        text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
        blogs: [
          {
            id: "1",
            image: "blog1",
            date: "22 March , 2022",
            title: "Test and comission 400KV grid / Okashat",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "2",
            image: "blog2",
            date: "22 March , 2022",
            title: "Test and comission 400KV grid / Okashat",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "3",
            image: "blog3",
            date: "22 March , 2022",
            title: "Test and comission 400KV grid / Okashat",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.blog_section {
  .boxes {
    .card {
      border: none;
      background: var(--color-white);
      
      transition: .25s all ease-in-out;
      &:hover{
        box-shadow: 0px 7px 60px rgba($color: #7A7A7A, $alpha: 0.16);
        transform: scale(1.03);
      }
      .img {
        height: 18.875rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .data {
        color: var(--color-fifth);
        font-family: "regular";
        font-size: 0.9rem;
      }
      h4 {
        color: var(--color-secound);
        font-family: "meduim";
        font-size: 1.22rem;
      }
      p {
        color: var(--color-fourth);
        font-family: "regular";
        font-size:.71rem;
      }
    }
  }
  .button {
    justify-content: center ;
    .btn {
      padding: 1%;
      width: 30%;
    }
  }
  .link{
    text-decoration: none;
  }
}
</style>