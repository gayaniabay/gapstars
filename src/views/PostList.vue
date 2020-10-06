<template>
  <div>
    <h1 class="lg:my-5 md:my-3 text-xl text-white tracking-wider">Sortable Post List</h1>
    <PostCard v-for="(post,index) in postList" :cardIndex="index" :cardId="post.id" :key="post.id" :post="post" @moveElement="moveEle"/>
  </div>
</template>

<script>
import PostCard from '@/components/PostCard.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    PostCard
  },
  data() {
    return {
      cardIndex: 0,
      cardId: ''
    }
  },
  computed: {
    ...mapState(['postList'])
  },
  created() {
    this.$store.dispatch('fetchPostList')
  },
  methods: {
    ...mapMutations(['MOVE_ELEMENT']),
    moveEle(params) {
      this.MOVE_ELEMENT(params)
    }
  }
}
</script>
