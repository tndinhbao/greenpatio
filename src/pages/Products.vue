<template>
  <Layout>
    <b-container>
      <b-row>
        <b-col
          v-for="cat in $page.categories.edges"
          :key="cat.node.id"
          :md="cat.node.columnSize"
          sm="12"
          class="py-1"
        >
          <div class="card text-white bg-info h-100">
            <img
              :src="insertImageOptimization({
                base: $static.metadata.cloudinaryUrl,
                config: cat.node.imageOptimization,
                src: cat.node.image
              })"
              class="card-img-top"
              :alt="cat.node.title"
            />
            <div class="card-footer text-center font-weight-bold">{{cat.node.title}}</div>
          </div>
        </b-col>
      </b-row>
      <!-- <b-row class="row-cols-1 row-cols-md-5">
        <b-col v-for="item in $page.products.edges" :key="item.node.id">
          <div class="card border-light h-100">
            <img
              :src="insertImageOptimization({
                base: $static.metadata.cloudinaryUrl,
                config: item.node.imageOptimization,
                src: item.node.images[0]
              })"
              class="card-img-top"
              :alt="item.node.title"
            />
            <div
              v-if="item.node.title"
              class="card-footer text-muted text-center"
            >{{item.node.title}}</div>
          </div>
        </b-col>
      </b-row> -->
    </b-container>
  </Layout>
</template>

<page-query>
query ProductList {
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

  products: allProduct {
    edges {
      node {
        id
        title
        images
        imageOptimization
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
