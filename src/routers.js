import { createRouter, createWebHistory } from "vue-router";
// all pages
import Home from "../src/view/pages/Home.vue";
import About from "../src/view/pages/About.vue";
import Projects from "../src/view/pages/Projects.vue";
import Blogs from "../src/view/pages/Blogs.vue";
import Blog from "../src/view/pages/Blog.vue";
import Contact from "../src/view/pages/Contact.vue";
// all pages
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "Home",
        }
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: {
            title: "About",
        }
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects,
        meta: {
            title: "Projects",
        }
    },
    {
        path: "/blogs",
        name: "Blogs",
        component: Blogs,
        meta: {
            title: "Blogs",
        }
    },
    {
        path: "/blog/:id",
        name: "Blog",
        component: Blog,
        meta: {
            title: "Blog",
        }
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
        meta: {
            title: "Contact",
        }
    },
   
];

const router = createRouter({
    routes,
    history: createWebHistory(),
    hashbang: false,
    mode: 'html5',
    linkActiveClass: "active",
    // linkExactActiveClass: "exact-active",
    scrollBehavior(to) {
      if (to.hash) {
        return {
          // x, y are replaced with left/top to define position, but when used with an element selector (el) will be used as offset
          el: to.hash,
          // offset has to be set as left and top at the top level
          left: 0,
          top: 64,
        };
      }
    },
  });
  
  export default router;