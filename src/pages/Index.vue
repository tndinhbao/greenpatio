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
        <b-carousel-slide caption="First slide" img-src="../../uploads/DSC07238.png"></b-carousel-slide>
      </b-carousel>
      <h2 class="my-4">Products</h2>
      <b-row>
        <b-col md="6" sm="12" class="py-1">
          <div class="card border-light">
            <img src="../../uploads/balcony.png" class="card-img-top" alt="..."  />
            <div class="card-footer text-muted text-center">Balcony</div>
          </div>
        </b-col>

        <b-col md="3" sm="12" class="py-1">
          <div class="card border-light">
            <img src="../../uploads/bench.png" class="card-img-top" alt="..."  />
            <div class="card-footer text-muted text-center">Bench</div>
          </div>
        </b-col>

        <b-col md="3" sm="12" class="py-1">
          <div class="card border-light">
            <img src="../../uploads/bench.png" class="card-img-top" alt="..."  />
            <div class="card-footer text-muted text-center">Bistro Set</div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="3" sm="12" class="py-1">
          <div class="card border-light">
            <img src="../../uploads/chairs.png" class="card-img-top" alt="..."  />
            <div class="card-footer text-muted text-center">Chairs</div>
          </div>
        </b-col>

        <b-col md="3" sm="12" class="py-1">
          <div class="card border-light">
            <img src="../../uploads/dinning_set.png" class="card-img-top" alt="..."  />
            <div class="card-footer text-muted text-center">Dinning Sets</div>
          </div>
        </b-col>

        <b-col md="6" sm="12" class="py-1">
          <div class="card border-light">
            <img src="../../uploads/sofa.png" class="card-img-top" alt="..."  />
            <div class="card-footer text-muted text-center">Sofa</div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
  }
};
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
