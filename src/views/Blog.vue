<template>
  <v-app>
    <v-container
      class="blog-app-container d-flex flex-column justify-center"
      fluid
      v-for="(posts, item) in blogPostData"
      v-bind:key="item"
    >
        <Posts 
            v-bind:posts="posts"
        />
    </v-container>
  </v-app>
</template>

<script>
import Posts from "../components/Posts"
import { blogPosts } from "../shared/blog-posts"

export default {
  name: "Blog",
  components: {
      Posts
   },
   data() {
       return {
           blogPostData: blogPosts
       }
   },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/shared-styles.scss";

.blog-app-container {
  @include views-container;
}
</style>
