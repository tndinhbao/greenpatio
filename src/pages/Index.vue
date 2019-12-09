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
      <h2 class="my-4">About us</h2>
      <div v-html="content" />
    </b-container>
  </Layout>
</template>

<page-query>
query HomeData {
  aboutPost(path:"/company-history/") {
    id
    title
    content
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
  data: function() {
    return {
      content: ""
    };
  },

  mounted: function() {
    if (this.$page.aboutPost && this.$page.aboutPost.content) {
      this.content = this.$page.aboutPost.content.replace(
        /<img/g,
        "<img class='img-fluid'"
      );
    }
  },

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
