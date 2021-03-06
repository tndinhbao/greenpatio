module.exports = {
  siteName: 'Quang Dung Furniture',
  // siteDescription: 'A furniture producer in Vietnam.',
  siteDescription: 'Quang Dung Ltd.Co, a Vietnam Exporter, Manufacturer exporting since 2006',
  siteUrl: 'http://quangdungfurniture.com',
  plugins: [
    {
      use: 'gridsome-plugin-typescript',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: "./about",
        path: '*.md',
        typeName: 'AboutPost',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: "./slides",
        path: '*.md',
        typeName: 'SlidePost',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'product_categories/**/*.md',
        typeName: 'ProductCategory',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: "./products",
        path: '*.md',
        typeName: 'Product',
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-10'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img-lazy': ['src', 'blank-src'],
          // 'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }

        return options
      })
  }
}
