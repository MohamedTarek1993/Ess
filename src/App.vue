<template>
  <section>
    <Navbar />
    <router-view />
    <Footer />
  </section>
</template>

<script>
import Navbar from "./components/static/Navbar.vue";
import Footer from "./components/static/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
/*--------------------------------------------------------------
>>> TABLE OF CONTENTS:
----------------------------------------------------------------
# Generic
	- Normalize
    - Font Family
   	- Box sizing
    -scroll bar
    - custom var  
    - form content
    - 
# Base
	- pre loader
	- button up
  -navbar
	- home page
    -- hero section
    -- service section
    -- why choise us section
    -- our service section
    -- counter section
    -- team section
    -- printer in sucess section
    -- blog section
  - about us page
  - service page
  - blog page
  - contact page
  - inquery page
	- footer
## Layouts 
*/

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css");

:root {
  --color-primary: #2e493a;
  --color-secound: #18261e;
  --color-third: #4e4e4e;
  --color-fourth: #747474;
  --color-fifth: #a8a8a8;
  --color-sixth: #cad6d0;
  --color-seven: #efede1;
  --color-white: #ffffff;
}
@font-face {
  font-family: "light";
  src: url("./assets/fonts/Poppins-Light.ttf");
}
@font-face {
  font-family: "regular";
  src: url("./assets/fonts/Poppins-Regular.ttf");
}
@font-face {
  font-family: "meduim";
  src: url("./assets/fonts/Poppins-Medium.ttf");
}
@font-face {
  font-family: "semibold";
  src: url("./assets/fonts/Poppins-SemiBold.ttf");
}
@font-face {
  font-family: "bold";
  src: url("./assets/fonts/Poppins-Bold.ttf");
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  list-style: none;
  direction: ltr;
  height: 100vh;
}
html {
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
  color: var(--color-white);
}

ul {
  list-style: none;
  padding: 0;
}
p {
  margin-bottom: 0;
}
/* scroll bar */
*::-webkit-scrollbar {
  width: 10px;
}
*::-webkit-scrollbar-track {
  background: var(--color-primary);
}
*::-webkit-scrollbar-thumb {
  background: var(--color-pargraph);
}
*::-webkit-scrollbar-thumb:hover {
  background: var(--color-text);
}

/* scroll bar */
//custom var
.text {
  font-size: 1.2rem;
  color: var(--color-white);
  font-family: "bold";
}
.parg {
  font-size: 0.8rem;
  color: var(--color-sixth);
  font-family: "regular";
  text-align: center;
  line-height: 1.7;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  .first {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s all ease-in-out;
    background: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 0px;
    font-size: 1rem;
    font-family: "meduim";
    text-align: center;
    color: var(--color-white);
    padding: 2% 1%;
    width: 100%;
    &:hover {
      background-color: white;
      color: var(--color-primary);
    }
  }

  .second {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s all ease-in-out;
    background: var(--color-white);
    border: 1px solid var(--color-primary);
    border-radius: 10px;
    font-size: 0.6rem;
    font-family: "meduim";
    text-align: center;
    color: var(--color-primary);
    padding: 2% 1%;
    &:hover {
      background-color: var(--color-primary);
      color: white;
    }
  }
  .third {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s all ease-in-out;
    background: var(--color-secound);
    border: 1px solid var(--color-secound);
    border-radius: 0px;
    font-size: 1rem;
    font-family: "meduim";
    text-align: center;
    color: var(--color-white);
    padding: 1%;
    &:hover {
      background-color: white;
      color: var(--color-secound);
    }
  }
}
.main-title {
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 2.2rem;
    font-family: "meduim";
    color: var(--color-text);
  }
  p {
    font-size: 1.1rem;
    font-family: "regular";
    color: var(--color-pargraph);
    padding: 2% 19%;
    text-align: center;
  }
}

.header_footer {
  font-size: 1.2rem;
  color: var(--color-white);
  font-family: "meduim";
  position: relative;
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 2px;
    background-color: var(--color-primary);
    color: var(--color-primary);
  }
}

//form content
.input-group {
  position: relative;
  margin-bottom: 3%;
  .icon_form {
    position: absolute;
    right: 0.3rem;
    top: 58%;
  }
}
.form-label {
  width: 100%;
  font-size: 1rem;
  color: var(--color-text);
  font-family: "regular";
}

.form-control {
  border-radius: 2px;
  padding-right: 6%;
  background-color: transparent;
  color: var(--color-pargraph);
  font-family: "regular";
  &:focus {
    box-shadow: none !important;
    border-color: var(--color-pargraph) !important;
  }
  &::placeholder {
    color: var(--color-text) !important;
    font-family: "regular" !important;
    font-size: 0.9rem;
  }
}
textarea {
  height: 100px;
}
textarea.form-control {
  padding-right: 2%;
}

.form-select {
  border-radius: 0px;
  padding: 0.375rem 2.25rem 0.375rem 1.4rem;
  font-family: "regular";
  background-color: var(--color-white);
  color: var(--color-text);
  background-position: left;
  position: relative;
  &:focus {
    box-shadow: unset !important;
  }
}

.btn:focus,
.form-check-input:focus,
.form-check :focus,
.btn-check:focus + .btn,
.btn-close:focus,
.accordion-button:focus {
  box-shadow: none;
}

input[type="data"] {
  color: var(--color-secound);
  font-family: "regular";

  &::placeholder {
    content: "";
  }
}

.form-check {
  .form-check-input {
    float: right;
    margin-left: 5px;
    &:checked {
      background-color: var(--color-primary);
      border-color: var(--color-primary);
    }
  }
  .form-check-label {
    font-size: 1rem;
    font-family: "regular";
    color: var(--color-text);
  }
}

::-webkit-calendar-picker-indicator {
  background-color: #ffffff;
  opacity: 0;
  padding: 5px;
  cursor: pointer;
  width: 50%;
  border-radius: 3px;
}

/* delete arrow from input number */

input {
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
