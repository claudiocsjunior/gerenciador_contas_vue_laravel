<template>
  <div id="home">
    <div class="user-info">
      <h2>Olá, {{ user.name }}</h2>
      <p>Bem Vindo</p>
    </div>
    <div class="home-links">
      <router-link :to="{name: 'watchlist'}" class="home-link">
        <i class="material-icons md-48"> playlist_play</i> 
        <span>Quero Assistir</span>
      </router-link>
      <a href="" class="home-link">
        <i class="material-icons md-48"> playlist_add_check</i> 
        <span>Já assisti</span>
      </a>
      <a href="" class="home-link">
        <i class="material-icons md-48"> dvr</i> 
        <span>Todas as Séries</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: 'Home',
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>

<style lang="scss" scoped>
@mixin flex-center($columns: false) {
  display: flex;
  align-items: center;
  justify-content: center;

  @if $columns {
    flex-direction: column;
  }
}

#home{
  width: 100%;
  height: 100vr;
   display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-around;

  .user-info{
    text-align: center;
  }
}


</style>
