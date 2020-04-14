module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.svg$": "<rootDir>/tests/unit/plugins/svgTransform.js"
  }
};
