<template>
  <section class="blogs_collection">
    <div class="container">
      <div class="main-title-center">
        <h2>{{ BlogsSection.title }}</h2>
        <p>{{ BlogsSection.text }}</p>
      </div>
      <div class="content">
        <div class="row">
          <div
            class="col col-lg-4 col-md-6 col-12 py-4"
            v-for="(Blogs, index) in BlogsSection.Blogs"
            :key="index"
          >
            <router-link to="/blog/2">
              <div class="img">
                <img
                  :src="require(`../../assets/image/${Blogs.image}.png`)"
                  alt="blog"
                />
              </div>
              <div class="mx-4">
                <span class="data">
                  {{ Blogs.date }}
                </span>
                <h4>{{ Blogs.title }}</h4>
                <p>{{ Blogs.text }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Blogs",
  data() {
    return {
      BlogsSection: {
        title: "Blog",
        text: "Our Engineering office is your right destination when you are looking for professional designs and electrical engineering solutions, we are devoting years of experience to come up with efficient, creative, and cost-effective solutions that suit every client.",
        Blogs: [
          {
            id: "1",
            date: "22 March , 2022",
            image: "blog1",
            title: "Test and comission 400KV grid / Okashat",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "2",
            date: "22 March , 2022",
            image: "blog2",
            title: "Test and comission 400KV grid / Okashat",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "3",
            date: "22 March , 2022",
            image: "blog3",
            title: "Test and comission 400KV grid / Okashat",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "4",
            date: "22 March , 2022",
            image: "blog1",
            title: "Test and comission 400KV grid / Okashat",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "5",
            date: "22 March , 2022",
            image: "blog2",
            title: "Test and comission 400KV grid / Okashat",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "6",
            date: "22 March , 2022",
            image: "blog3",
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
.blogs_collection {
  margin-top: 10%;
  .main-title-center {
    p {
      padding: 0 15%;
      text-align: center;
    }
  }
  .content {
    margin-bottom: 3%;

    .img {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .data {
      color: var(--color-fifth);
      font-size: 0.8rem;
      font-family: "regular";
    }
    h4 {
      color: var(--color-secound);
      font-size: 1.2rem;
      font-family: "bold";
    }
    p {
      color: var(--color-fourth);
      font-size: 1rem;
      font-family: "regular";
      line-height: 1.8;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .col {
      &:first-child {
        width: 100% !important;
        a {
          display: flex;
          flex-direction: row;
          justify-content: center;
          .img {
            width: 60%;
            height: 300px;

            img {
              width: 100%;
              height: 100%;
            }
          }
          h4{
            font-size: 2rem;
            padding-inline-end: 8%;
          }
          p{
      -webkit-line-clamp: 5;

          }
        }
      }
    }
  }
}
</style>
