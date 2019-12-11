module.exports = function (api) {
  api.loadSource(async store => {
    const productCategories = store.getCollection("ProductCategory").data();
    const products = store.getCollection("Product").data();
    const viewProduct = store.addCollection("ViewProduct");

    // create a custom field referenced to category's path

    console.group("ViewProduct");
    productCategories.map((c) => {
      const { title, path } = c;

      // find product which has product_type match with the current category
      const matched = products.filter((p) => {
        return p.product_type.some((t) => {
          const regex = new RegExp(t, "gi");
          const test = regex.test(title);
          // console.log(t);
          // console.log(title);
          // console.log(regex);
          // console.log(test);
          return test
        });
      });

      console.info(`${title} has ${matched.length} products`);

      matched.map((p) => {
        const { id, title, product_type, imageOptimization, images } = p;
        // const found = viewProduct.findNode()
        viewProduct.addNode({
          id, title, product_type, imageOptimization, images,
          tags: [path]
        });
      });
    });
    console.groupEnd();

    store.addMetadata('cloudinaryUrl', 'https://res.cloudinary.com/quangdungandgreenpatio/image/upload')
  })
}
