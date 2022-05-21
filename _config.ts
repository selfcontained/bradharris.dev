import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";

const site = lume();

site.use(date());
site.use(codeHighlight({
  options: {
    // classPrefix: "syntax-"
  }
}))

site.loadAssets([".css"]);

site.copy("images");
site.copy("assets/favicons", ".");
site.copy("assets/icons", "/icons");
site.data('now', new Date());

export default site;
