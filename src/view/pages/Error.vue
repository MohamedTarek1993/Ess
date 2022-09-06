<template>
  <section class="not_found">
    <div class="container w-75">
        <h2>{{$t('errer_title')}}</h2>


        <img src="../../assets/image/404.webp" alt="error">
        <p>{{$t('errer_text')}}</p>
        <router-link class="first btn" :to="{ name: 'Home' }" >{{$t('error_link')}}</router-link>
    </div>
  </section>
</template>

<script>
export default {
name:'Erorr',

}
</script>

<style lang="scss" scoped>
.not_found{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 10%;
    h2{
        font-family: 'bold';
        font-size: 1.2rem;
        color: var(--color-fourth);
    }
    img{
        width: 30%;
        height: 30%;
    }
    p{
        font-family: 'regular';
        font-size: 2rem;
        color: var(--color-primary);
        margin: 3% 0;
    }
   .first{
border-radius: 20px;
    border:1px solid var(--color-primary);
    background: var(--color-white);
    font-family: 'regular';
    color: var(--color-primary);
    width: 30%;
    transition: .25s all ease-in-out;
    &:hover{
        background: var(--color-primary);
        color: var(--color-white);
    }

   }
}
</style>

