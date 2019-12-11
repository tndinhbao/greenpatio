<template>
  <Layout>
    <b-container>
      <h1>{{$page.category.title}}</h1>
      <b-row class="row-cols-1 row-cols-md-5">
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
      </b-row>
    </b-container>
  </Layout>
</template>

<page-query>
query ProductCategory ($path: String!) {
  category: productCategory(path: $path) {
    id
    title
    fileInfo {
      name
    }
  }

  products: allViewProduct(
    filter: { tags: { contains: [$path] } }
  ) {
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
  },
  created: function() {
    console.log(this);
  }
};
</script>
