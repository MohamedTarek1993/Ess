import { createRouter, createWebHistory } from "vue-router";
// all pages
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Projects from "../views/Projects.vue";
import Blog from "../views/Blog.vue";
import Contact from "../views/Contact.vue";
// all pages
Vue.use(VueRouter);
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
        path: "/blog",
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
   
  });
  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (store.getters.isAuthenticated) {
        next();
        return;
      }
      next("/login");
    } else {
      next();
    }
  });
  
  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.guest)) {
      if (store.getters.isAuthenticated) {
        next("/dashboard");
        return;
      }
      next();
    } else {
      next();
    }
  });
  
  export default router;