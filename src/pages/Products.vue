<template>
  <Layout>
    <b-container>
      <h1>Categories</h1>
      <!-- <b-row> -->
      <!-- <b-col
        v-for="cat in $page.categories.edges"
        :key="cat.node.id"
        :md="cat.node.columnSize"
        sm="12"
        class="py-1"
      > -->
        <div class="card-columns">
          <div
            class="card text-white bg-info"
            v-for="cat in $page.categories.edges"
            :key="cat.node.id"
          >
            <img
              :src="insertImageOptimization({
                base: $static.metadata.cloudinaryUrl,
                config: cat.node.imageOptimization,
                src: cat.node.image
              })"
              class="card-img-top"
              :alt="cat.node.title"
            />
            <div class="card-footer text-center font-weight-bold">
              <g-link :to="cat.node.path" class="text-white">{{cat.node.title}}</g-link>
            </div>
          </div>
        </div>
      <!-- </b-col> -->
      <!-- </b-row> -->
    </b-container>
  </Layout>
</template>

<page-query>
query ProductHome {
  categories: allProductCategory(sort: {
    by:"order",
    order:ASC
  }) {
    edges {
      node {
        id
        path
        title
        image
        order
        columnSize
        imageOptimization
        fileInfo {
          name
        }
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
