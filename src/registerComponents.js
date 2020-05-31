import { camelCase, upperFirst } from "lodash";

import Vue from "vue";

const register = data =>
  data.forEach(context =>
    context.keys().forEach(path => {
      const component = context(path);
      const name = upperFirst(
        camelCase(
          path
            .split("/")
            .pop()
            .replace(/\.\w+$/, "")
        )
      );

      Vue.component(name, component.default || component);
    })
  );

// Need use this because the path must be a literal regex!
const components = require.context("./components", true, /[A-Z]\w+\.vue$/);
const views = require.context("./views", true, /[A-Z]\w+\.vue$/);

register([components, views]);
