const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const nested = require("postcss-nested")

const mode = process.env.NODE_ENV;
const dev = mode === "development";

module.exports = {
	plugins: [
		autoprefixer,
		nested,

		!dev && cssnano({
			preset: "default",
		}),
	],
};
