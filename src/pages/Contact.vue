<template>
  <Layout>
    <b-container>
      <img
        width="100%"
        class="img-fluid"
        src="https://res.cloudinary.com/quangdungandgreenpatio/image/upload/c_scale,q_auto,w_1000/v1576037366/posts/Add_a_subheading_l4wrjs.png"
      />
      <b-row>
        <b-col sm="12" md="6">
          <dl class="row mt-3">
            <dt class="col-sm-3">Adress</dt>
            <dd
              class="col-sm-9"
            >Road 632, Duong Lieu Tay Commune, Binh Duong Industrial zone, Binh Duong ward, Phu My town, Binh Dinh province</dd>

            <dt class="col-sm-3">Phone</dt>
            <dd class="col-sm-9">(+84) 256 3758426</dd>

            <dt class="col-sm-3">Fax</dt>
            <dd class="col-sm-9">(+84) 256 3758427</dd>

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
        <b-col sm="12" md="6">
          <GmapMap
            :center="{lat:14.2939482, lng:109.0897123}"
            :zoom="15"
            map-type-id="terrain"
            style="height: 300px"
            class="mt-3"
          >
            <GmapMarker :position="{lat:14.2939482, lng:109.0897123}" />
          </GmapMap>
        </b-col>
        <!-- <b-col sm="12" md="8">
            <b-form
              name="contact"
              method="post"
              @submit.prevent="handleSubmit"
              action="/success/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="name" value="contact" />
              <p hidden>
                <label>
                  Don’t fill this out:
                  <input name="bot-field" />
                </label>
              </p>
              <b-form-group id="input-group-2" label="Name:" label-for="form-name">
                <b-form-input
                  id="name"
                  name="name"
                  v-model="form.name"
                  required
                  placeholder="Enter name"
                />
              </b-form-group>

              <b-form-group id="input-group-1" label="Email:" label-for="email">
                <b-form-input
                  id="email"
                  v-model="form.email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter email"
                />
              </b-form-group>

              <b-form-group id="input-group-3" label="Message:" label-for="message">
                <b-form-textarea
                  id="message"
                  name="message"
                  v-model="form.message"
                  required
                  placeholder="Enter message"
                />
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
            </b-form>
        </b-col>-->
      </b-row>
    </b-container>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Quang Dung Furniture"
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      // db.collection("contact_messages")
      //   .add({
      //     ...this.form
      //   })
      //   .then(docRef => {
      //     this.$router.push("/success");
      //   })
      //   .catch(error => alert(error));
    }
  }
};
</script>

<style scoped lang="scss">
.contact-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
}
</style>
