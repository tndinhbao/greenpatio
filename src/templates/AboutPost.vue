<template>
  <Layout>
    <b-container>
      <div class="blogPost">
        <div v-html="content" />
      </div>
    </b-container>
  </Layout>
</template>

<page-query>
query AboutPost ($path: String!) {
  post: aboutPost (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  data: function() {
    return {
      content: ""
    };
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  },
  mounted: function() {
    if (this.$page.post && this.$page.post.content) {
      this.content = this.$page.post.content.replace(
        /<img/g,
        "<img class='img-fluid'"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.meta {
  display: flex;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 0;

  .label {
    font-weight: bold;
  }
}

.blogImage {
  max-height: 400px;
  width: 100%;
}
</style>
