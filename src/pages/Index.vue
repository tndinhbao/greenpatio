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
      <div class="divider mt-5" />
      <b-row class="row-cols-2 row-cols-sm-1">
        <b-col>
          <h2 class="my-4">ABOUT US</h2>
          <div v-html="content" />
        </b-col>
        <b-col>
          <h2 class="my-4">Contact</h2>
          <GmapMap
            :center="{lat:14.2939482, lng:109.0897123}"
            :zoom="15"
            map-type-id="terrain"
            style="height: 300px"
          >
            <GmapMarker :position="{lat:14.2939482, lng:109.0897123}" />
          </GmapMap>
          <dl class="row mt-3">
            <dt class="col-sm-3">Adress</dt>
            <dd
              class="col-sm-9"
            >Road 632, Duong Lieu Tay Commune, Binh Duong Industrial zone, Binh Duong ward, Phu My town, Binh Dinh province</dd>

            <dt class="col-sm-3">Phone</dt>
            <dd class="col-sm-9">(+84) 256 3758426</dd>

            <dt class="col-sm-3">Fax</dt>
            <dd class="col-sm-9">(+84) 256 3758427</dd>
            <dt class="col-sm-3">Web</dt>
            <dd class="col-sm-9"><a href="https://quangdungfurniture.com">quangdungfurniture.com</a></dd>

            <dt class="col-sm-3">Email</dt>
            <dd class="col-sm-9">
              <dl class="row">
                <dd class="col-sm-12">
                  <a href="mailto:info@quangdungfurniture.com">info@quangdungfurniture.com</a>
                </dd>
                <dd class="col-sm-12">
                  <a href="mailto:quangdung.co.ltd.vn@gmail.com">quangdung.co.ltd.vn@gmail.com</a>.
                </dd>
              </dl>
            </dd>
          </dl>
        </b-col>
      </b-row>
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

.divider {
  border-bottom: 1px solid #0d4680;
}
</style>
