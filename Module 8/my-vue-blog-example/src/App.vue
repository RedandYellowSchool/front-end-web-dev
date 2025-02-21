<template>
  <div id="app" class="container mt-5">
    <h1 class="mb-4">My Blog</h1>
    <div class="row">
      <div class="col-md-4" v-for="(post, index) in posts" :key="index">
        <BlogCard
          :title="post.title"
          :excerpt="post.excerpt"
          :image="post.image"
          :link="post.link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BlogCard from './components/BlogCard.vue'

export default {
  name: 'App',
  components: {
    BlogCard
  },
  data() {
    return {
      posts: [
        {
          title: 'First Post',
          excerpt: 'This is a short summary of the first post.',
          image: 'https://images.unsplash.com/photo-1735825764457-ffdf0b5aa5dd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: '#'
        },
        {
          title: 'Second Post',
          excerpt: 'This is a short summary of the second post.',
          image: 'https://images.unsplash.com/photo-1735825764457-ffdf0b5aa5dd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: '#'
        },
        {
          title: 'Third Post',
          excerpt: 'This is a short summary of the third post.',
          image: 'https://images.unsplash.com/photo-1735825764457-ffdf0b5aa5dd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style>
/* You can add global styles here if needed */
</style>
