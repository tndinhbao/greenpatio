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
          v-for="slide in $page.slides.edges"
          :key="slide.node.id"
          :caption="slide.node.title"
          :img-src="insertImageOptimization({
                base: $static.metadata.cloudinaryUrl,
                config: slide.node.image_optimization,
                src: slide.node.image
              })"
        ></b-carousel-slide>
      </b-carousel>
      <h2 class="my-4">Products</h2>
      <b-row>
        <b-col
          v-for="cat in $page.categories.edges"
          :key="cat.node.id"
          :md="cat.node.columnSize"
          sm="12"
          class="py-1"
        >
          <div class="card border-light h-100 text-white">
            <img
              :src="insertImageOptimization({
                base: $static.metadata.cloudinaryUrl,
                config: cat.node.imageOptimization,
                src: cat.node.image
              })"
              class="card-img-top"
              :alt="cat.node.title"
            />
            <div class="card-img-overlay">
              <h5 class="card-title">{{cat.node.title}}</h5>
              <!-- <p
                class="card-text"
              >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text">Last updated 3 mins ago</p> -->
            </div>
            <!-- <div class="card-footer text-muted text-center">{{cat.node.title}}</div> -->
          </div>
        </b-col>
      </b-row>
    </b-container>
  </Layout>
</template>

<page-query>
query HomeData {
  categories: allProductCategory(sort: {
    by:"order",
    order:ASC
  }) {
    edges {
      node {
        id
        title
        image
        order
        columnSize
        imageOptimization
      }
    }
  }

  slides:allSlidePost(sort: {
    by:"order",
    order:ASC
  }) {
    edges {
      node {
        id
        title
        image
        image_optimization
      }
    }
  }
}
</page-query>

<static-query>
query {
  metadata {
    cloudinaryUrl
  }
}
</static-query>

<script>
import { insertImageOptimization } from "../shared/helpers";
export default {
  methods: {
    insertImageOptimization
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
