<template>
  <div class="container mx-auto py-4 lg:py-10 text-ash font-normal relative">
    <div class="lg:flex mb-4 mx-5">
        <div class="lg:w-1/2">
          <PostList></PostList>
        </div>
        <div class="lg:w-1/2 lg:px-5">
          <ActionList></ActionList>
        </div>
    </div>
  </div>
</template>


<script>
import PostList from '@/views/PostList.vue'
import ActionList from '@/views/ActionList.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    PostList,
    ActionList
  },
  computed: {
    ...mapGetters(['countLinks'])
  }
}
</script>

<style>
</style>
