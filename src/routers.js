import { createRouter, createWebHistory } from "vue-router";
// all pages
import Home from "../src/view/pages/Home.vue";
import About from "../src/view/pages/About.vue";
import Projects from "../src/view/pages/Projects.vue";
import Liberary from "../src/view/pages/Liberary.vue";
import Services from "../src/view/pages/Services.vue";
import Blogs from "../src/view/pages/Blogs.vue";
import Blog from "../src/view/pages/Blog.vue";
import Contact from "../src/view/pages/Contact.vue";
import Faq from "../src/view/pages/Faq.vue";
import Privacy from "../src/view/pages/Privacy.vue";
import Terms from "../src/view/pages/Terms.vue";
import test from "../src/view/pages/test.vue";
import Error from "../src/view/pages/Error.vue";
import Project from "../src/view/pages/Project.vue";


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
        path: "/liberary",
        name: "Liberary",
        component: Liberary,
        meta: {
            title: "Liberary",
        }
    },
    {
        path: "/services",
        name: "Services",
        component: Services,
        meta: {
            title: "Services",
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
    {
        path: "/faq",
        name: "Faq",
        component: Faq,
        meta: {
            title: "Faq",
        }
    },
    {
        path: "/privacy",
        name: "Privacy",
        component: Privacy,
        meta: {
            title: "Privacy",
        }
    },
    {
        path: "/terms",
        name: "Terms",
        component: Terms,
        meta: {
            title: "Terms",
        }
    },
    {
        path: "/test",
        name: "test",
        component: test,
        meta: {
            title: "test",
        }
    },


    {
        path: "/project/:id",
        name: "Project",
        component: Project,
        meta: {
            title: "Project",
        }
    },
    { path: "/404", component: Error },
    { path: "/:catchAll(.*)", redirect: "/404" },
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