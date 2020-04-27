<template>
  <v-container fluid>
    <v-row class="d-flex justify-center">
      <v-col class="text-center white--text">
        <span></span>
        <h1>CONTACT</h1>
        <v-col class="d-flex justify-center flex-column col-sm-12 col-12 col-md-12">
          <v-col class="d-flex justify-start justify-sm-center justify-md-center justify-lg-center justify-xl-center align-center">
            <h3>Address:</h3>
            <span class="contact-info-typography ps-1">
              123 New york, New york, US</span
            >
          </v-col>
          <v-col class="d-flex justify-start justify-sm-center justify-md-center justify-lg-center justify-xl-center align-center">
            <h3>Phones:</h3>
            <span class="contact-info-typography ps-1"> 999-111-2222</span>
          </v-col>
          <v-col class="d-flex justify-start justify-sm-center justify-md-center justify-lg-center justify-xl-center align-center">
            <h3>Hours:</h3>
            <span class="contact-info-typography ps-1">
              123 New york, New york, USA</span
            >
          </v-col>
        </v-col>
      </v-col>
      <v-col class="text-center white--text col-sm-12 col-12 col-md-6">
        <h2>GET IN TOUCH</h2>
        <v-form ref="form">
          <v-text-field label="Name" required class="white--text" dark></v-text-field>

          <v-text-field label="E-mail" required dark></v-text-field>

          <v-textarea
            solo
            name="input-7-4"
            label="Comments"
            background-color="#212121"
            dark
          ></v-textarea>

          <v-btn color="contact-info-button" class="mr-4">
            Submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ContactContainer",
};
</script>

<style lang="scss" scoped>
$contact-container-text-color: #6495ed;

.contact-info {
  &-typography {
    color: $contact-container-text-color;
  }

  &-button {
    background-color: $contact-container-text-color !important;
    color: #fff;
  }
}
</style>
