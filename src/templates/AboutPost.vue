<template>
  <Layout>
    <b-container>
      <div class="blogPost">
        <div v-html="$page.post.title" class="h1 mb-4" />
        <BlogContent class="mt-5" :content="$page.post.content" />
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
import BlogContent from "@/components/BlogContent";

export default {
  components: {
    BlogContent
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    };
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
