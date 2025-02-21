<template>
    <div class="card" style="width: 18rem;">
      <img :src="image" class="card-img-top" alt="Blog image">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ excerpt }}</p>
        <a :href="link" class="btn btn-primary">Read More</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogCard',
    props: {
      title: {
        type: String,
        default: 'Blog Title'
      },
      excerpt: {
        type: String,
        default: 'A short summary of the blog post.'
      },
      image: {
        type: String,
        default: 'https://via.placeholder.com/286x180'
      },
      link: {
        type: String,
        default: '#'
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any custom styling here if needed */
  </style>
  