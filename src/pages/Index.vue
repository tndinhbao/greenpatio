<template>
  <Layout>
    <b-container>
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        controls
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          caption="First slide"
          :img-src="$static.metadata.cloudinaryUrl + '/q_auto:eco/v1575452945/greating/DSC07238.355099a6_fegbhp.webp'"
        ></b-carousel-slide>
      </b-carousel>
      <h2 class="my-4">Products</h2>
      <b-row>
        <b-col md="6" sm="12" class="py-1">
          <div class="card border-light">
            <img
              :src="$static.metadata.cloudinaryUrl + '/q_auto:eco/v1575518685/products/balcony_r9ud74.png'"
              class="card-img-top"
              alt="..."
            />
            <div class="card-footer text-muted text-center">Balcony</div>
          </div>
        </b-col>

        <b-col md="3" sm="12" class="py-1">
          <div class="card border-light">
            <img :src="$static.metadata.cloudinaryUrl + '/q_auto:eco/v1575518683/products/bench_sanmpp.png'" class="card-img-top" alt="..." />
            <div class="card-footer text-muted text-center">Bench</div>
          </div>
        </b-col>

        <b-col md="3" sm="12" class="py-1">
          <div class="card border-light">
            <img :src="$static.metadata.cloudinaryUrl + '/q_auto:eco/v1575518684/products/bistro_set_gnj2s7.png'"  class="card-img-top" alt="..." />
            <div class="card-footer text-muted text-center">Bistro Set</div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sm="12" class="py-1">
          <div class="card border-light">
            <img :src="$static.metadata.cloudinaryUrl + '/q_auto:eco/v1575518684/products/chairs_bzubi8.png'" class="card-img-top" alt="..." />
            <div class="card-footer text-muted text-center">Chairs</div>
          </div>
        </b-col>

        <b-col md="3" sm="12" class="py-1">
          <div class="card border-light">
            <img :src="$static.metadata.cloudinaryUrl + '/q_auto:eco/v1575518689/products/dinning_set_byv4ev.png'" class="card-img-top" alt="..." />
            <div class="card-footer text-muted text-center">Dinning Sets</div>
          </div>
        </b-col>

        <b-col md="6" sm="12" class="py-1">
          <div class="card border-light">
            <img :src="$static.metadata.cloudinaryUrl + '/q_auto:eco/v1575518692/products/sofa_uceetu.png'" class="card-img-top" alt="..." />
            <div class="card-footer text-muted text-center">Sofa</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </Layout>
</template>

<static-query>
query {
  metadata {
    cloudinaryUrl
  }
}
</static-query>

<script>
export default {};
</script>

<style>
.greet-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}
</style>
