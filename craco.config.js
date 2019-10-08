const path = require("path");
const CSS_MODULE_LOCAL_IDENT_NAME = "[local]___[hash:base64:5]";
const emotionPresetOptions = {}

const emotionBabelPreset = require('@emotion/babel-preset-css-prop').default(
  undefined,
  emotionPresetOptions
)

module.exports = {
  style: {
    modules: {
      localIdentName: CSS_MODULE_LOCAL_IDENT_NAME
    }
  },
  babel: {
    plugins: [
      ...emotionBabelPreset.plugins,
      [
        "babel-plugin-react-css-modules",
        {
          generateScopedName: CSS_MODULE_LOCAL_IDENT_NAME,
          attributeNames: { activeStyleName: "activeClassName" },
          "filetypes": {
            ".scss": {
              "syntax": "postcss-scss"
            }
          }
        }
      ]
    ]
  },
  webpack: {    
    resolve: { 
      alias: {
        "@app": path.resolve(__dirname, "src/"),
      }
    },    
    configure: {
      externals: []
    }
  },
  jest: {
      configure: {
          moduleNameMapper: {
              "^@app(.*)$": "<rootDir>/src$1"
          }
      }
  }
}
