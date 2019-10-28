<template>
    <h1>Watchlist</h1>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    mounted(){
        this.ActionSetWatchList();
    },
    methods : {
        ...mapActions('watchlist', ['ActionSetWatchList']),
    }
}
</script>

<style>
</style>