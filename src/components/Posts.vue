<template>
  <v-row>
    <v-col>
      <v-card
        width="600"
        class="mx-auto blog-post-background flex-sm-shrink-1"
        height="fit-content"
        tile
        flat
      >
        <v-list-item>
          <v-list-item-avatar color="grey"></v-list-item-avatar>
          <v-list-item-content>
            <h1 class="white--text">{{
              posts.title
            }}</h1>
            <v-list-item-subtitle class="white--text"
              >by <span class="blue--text">{{ posts.author }}</span> in
              <span class="blue--text">{{
                posts.category
              }}</span></v-list-item-subtitle
            >
            <v-list-item-subtitle class="white--text"
              >Posted on
              <span class="blue--text">{{
                posts.date
              }}</span></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
        <v-lazy v-model="isActive" transition="fade-transition">
          <HeaderImage
            :src="posts.image"
            :alt="posts.title"
            height="194"
          ></HeaderImage>
        </v-lazy>
        <v-card-text class="white--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </v-card-text>

        <v-card-actions>
          <v-btn text color="blue">
            Read
          </v-btn>
          <v-btn text color="blue">
            Bookmark
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon color="red">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon color="blue">
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-text class="white--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
          cupiditate placeat rerum soluta illo ab temporibus sed? Ratione
          suscipit ducimus dolores architecto vel inventore consectetur, facere
          possimus, accusantium nulla quod.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import HeaderImage from "@/components/HeaderImage";

export default {
  name: "Posts",
  components: {
    HeaderImage,
  },
  props: {
    posts: {
      type: Object,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/shared-styles.scss";

.blog-post-background {
  background-color: $views-background-color;
}
</style>
