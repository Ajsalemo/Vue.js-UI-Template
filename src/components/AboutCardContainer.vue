<template>
  <v-container fluid>
    <v-row class="about-card-container">
      <AboutCard
        title_text="Core Values"
        body_text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sunt cupiditate dicta debitis. Accusantium, consequuntur quas vero maxime voluptas numquam cumque officiis eum ex quo dolorum, ratione repudiandae aut facere?"
      />
      <AboutCard
        title_text="Culture"
        body_text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sunt cupiditate dicta debitis. Accusantium, consequuntur quas vero maxime voluptas numquam cumque officiis eum ex quo dolorum, ratione repudiandae aut facere?"
      />
      <AboutCard
        title_text="Quality"
        body_text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sunt cupiditate dicta debitis. Accusantium, consequuntur quas vero maxime voluptas numquam cumque officiis eum ex quo dolorum, ratione repudiandae aut facere?"
      />
      <AboutCard
        title_text="Message"
        body_text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sunt cupiditate dicta debitis. Accusantium, consequuntur quas vero maxime voluptas numquam cumque officiis eum ex quo dolorum, ratione repudiandae aut facere?"
      />
    </v-row>
  </v-container>
</template>

<script>
import AboutCard from "@/components/AboutCard";

export default {
  name: "AboutCardContainer",
  components: {
    AboutCard,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/shared-styles.scss";

.about-card-container {
  background-color: $views-background-color;
  height: auto;
  margin-top: 2em;
}
</style>
