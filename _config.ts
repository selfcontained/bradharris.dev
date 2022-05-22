import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import imagick from "lume/plugins/imagick.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";

const site = lume({
  location: new URL("https://bradharris.dev")
});

site.use(resolveUrls());
site.use(imagick());
site.use(date());
site.use(codeHighlight({
  options: {}
}))

site.copy("images");
site.copy("assets/styles", "/styles");
site.copy("assets/favicons", ".");
site.copy("assets/scripts", "/scripts");
site.copy("assets/icons", "/icons");
site.copy("assets/post-heros", "/post-heros");
site.copy("assets/post-thumbnails", "/post-thumbnails");
site.copy("CNAME");

site.data('now', new Date());
site.data('dev', site.options.dev)

export default site;
