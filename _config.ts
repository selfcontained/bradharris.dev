import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";

const site = lume();

site.use(date());
site.use(codeHighlight({
  options: {}
}))

site.copy("images");
site.copy("assets/styles", "/styles");
site.copy("assets/favicons", ".");
site.copy("assets/scripts", "/scripts");
site.copy("assets/icons", "/icons");
site.copy("CNAME");
site.data('now', new Date());

export default site;
