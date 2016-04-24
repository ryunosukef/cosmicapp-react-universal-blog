// config.js
export default {
  site: {
    title: 'My title React Universal Blog'
  },
  bucket: {
    slug: process.env.COSMIC_BUCKET || 'first-cosmic',
    media_url: 'https://cosmicjs.com/uploads'
  }
}
