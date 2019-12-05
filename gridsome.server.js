module.exports = function (api) {
    api.loadSource(async store => {
      store.addMetadata('cloudinaryUrl', 'https://res.cloudinary.com/quangdungandgreenpatio/image/upload')
    })
  }