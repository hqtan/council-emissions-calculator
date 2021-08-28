const isProduction = process.env.NODE_ENV === "production";

console.log(`[INFO]: NODE_ENV: ${process.env.NODE_ENV}`);

module.exports = {
  reactStrictMode: true,
}
