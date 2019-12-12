<template>
  <Layout>
    <!-- <img class="mail-image" src="../assets/images/mail-sent.svg" /> -->
    <b-container>
      <!-- <img src="..." alt="..." class="img-thumbnail" /> -->
      <b-row class="justify-content-md-center">
        <b-col md="3" sm="12" v-for="f in files" :key="f.name">
          <div class="py-3">
            <div class="card text-white bg-info" @click="open(f)">
              <img :src="f.thumbnail" class="card-img-top" :alt="f.name" />
              <div class="card-body">
                <h5 class="card-title">{{f.name}}</h5>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {},
  data: function() {
    return {
      files: [
        {
          name: "BSCI",
          thumbnail:
            "https://res.cloudinary.com/quangdungandgreenpatio/image/upload/v1576115748/posts/Screen_Shot_2019-12-12_at_08.54.37_havop1.png",
          url:
            "https://res.cloudinary.com/quangdungandgreenpatio/image/upload/v1576116668/posts/Screen_Shot_2019-12-12_at_09.10.38_vy74oj.png"
        },
        {
          name: "FSC",
          thumbnail:
            "https://res.cloudinary.com/quangdungandgreenpatio/image/upload/v1576115750/posts/Screen_Shot_2019-12-12_at_08.54.14_aqfiyx.png",
          url:
            "https://drive.google.com/file/d/0B5QBBpeXrOrKYXl5ZHNGa1IxOHlKaU15MmpKeEZZZ0MzcEFv/view?usp=sharing"
        }
      ]
    };
  },
  methods: {
    open: function(file) {
      if (file.url) {
        const win = window.open(file.url, "_blank");
        win.focus();
      }
    }
  }
};
</script>
<style scoped lang="scss">
.card {
  cursor: pointer;
}
</style>

