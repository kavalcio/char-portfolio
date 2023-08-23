module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/film',
        permanent: true,
      },
    ]
  },
}
