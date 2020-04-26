<template>
  <v-app>
    <v-container
      class="contact-app-container d-flex flex-column justify-center"
      fluid
    >
      <v-lazy
        v-model="isActive"
        transition="fade-transition"
      >
        <HeaderImage
          src="contact.jpg"
          alt="Contact page"
          height="35em"
        >
          <Header header_text_one='Contact' />
        </HeaderImage>
      </v-lazy>
      <ContactContainer />
    </v-container>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import HeaderImage from "@/components/HeaderImage";
import ContactContainer from "@/components/ContactContainer";

export default {
  name: "Contact",
  components: {
    Header,
    HeaderImage,
    ContactContainer,
  },
  data() {
    return {
      isActive: false,
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/shared-styles.scss";

.contact-app-container {
  @include views-container;
}
</style>
