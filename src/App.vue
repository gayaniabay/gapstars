<template>
  <div id="app" class="bg-gray">
    <svg viewBox="0 0 600 180" preserveAspectRatio="none" class="text-purple w-full absolute" fill="currentColor"><polygon points="0,0 600,0 0,180"/>
    </svg>
    <router-view/>
  </div>
</template>

<script>
import './assets/css/main.css'
import '../node_modules/array.prototype.move'
import Vue from 'vue'
import VuexUndoState from './plugins/vuex-undo-state.js'

Vue.use(VuexUndoState)

export default {
  name: 'app'
}
</script>

<style>
</style>
