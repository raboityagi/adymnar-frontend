/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'studiodigiustosas.it',
				port: '',
				pathname: '/images/**',
			},
		],
	},
}

module.exports = nextConfig
