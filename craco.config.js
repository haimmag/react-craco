const path = require("path");
const CSS_MODULE_LOCAL_IDENT_NAME = "[local]___[hash:base64:5]";

module.exports = {
  style: {
    modules: {
      localIdentName: CSS_MODULE_LOCAL_IDENT_NAME
    }
  },
  babel: {
    plugins: [
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
              "^@(.*)$": "<rootDir>/src$1"
          }
      }
  }
}