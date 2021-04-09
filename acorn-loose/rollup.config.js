import buble from "rollup-plugin-buble"

export default {
  input: "./acorn-loose/src/index.js",
  output: [
    {
      file: "acorn-loose/dist/acorn-loose.js",
      format: "umd",
      name: "acorn.loose",
      external: ["acorn"],
      globals: {acorn: "acorn"}
    },
    {
      file: "acorn-loose/dist/acorn-loose.mjs",
      format: "es",
      external: ["acorn"],
      globals: {acorn: "acorn"}
    }
  ],
  plugins: [
    buble({transforms: {dangerousForOf: true}})
  ]
}
