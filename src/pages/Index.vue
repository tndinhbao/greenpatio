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
          :img-src="slide.node.image.replace($static.metadata.cloudinaryUrl, `${$static.metadata.cloudinaryUrl}/${slide.node.image_optimization}`)"
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
          <div class="card border-light">
            <img
              :src="cat.node.image.replace($static.metadata.cloudinaryUrl, `${$static.metadata.cloudinaryUrl}/${cat.node.imageOptimization}`)"
              class="card-img-top"
              :alt="cat.node.title"
            />
            <div class="card-footer text-muted text-center">{{cat.node.title}}</div>
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
