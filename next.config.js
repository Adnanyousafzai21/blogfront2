module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://blogback2.vercel.app/:path*',
          },
        ]
      },
  };