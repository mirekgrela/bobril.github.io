import * as b from 'bobril';
import * as m from 'bobril-m';
import * as router from './pages/router';
import app from './pages/app';
import home from './pages/home/page';
import documentation from './pages/documentation/page';
import guides from './pages/guides/page';

//loadGithubMarkdownStyles();

b.routes(
    b.route({handler: app}, [
        b.route({url: `/${router.home}`, name: router.home, handler: home}),
        b.route({url: `/${router.guides}`, name: router.guides, handler: guides}),
        b.route({url: `/${router.documentation}`, name: router.documentation, handler: documentation}),
        b.routeDefault({handler: home})
    ])
);

b.selectorStyleDef("body", {
    margin: 0,
    backgroundColor: m.blue100,
    fontFamily: m.fontFamily,
    color: m.blue100
});

function loadGithubMarkdownStyles() {
    const markdownCss = b.asset('../node_modules/github-markdown-css/github-markdown.css');

    document.addEventListener('DOMContentLoaded', function (event) {
        const head = document.getElementsByTagName('head')[0];
        const s = document.createElement('link');
        s.setAttribute('rel', 'stylesheet');
        s.setAttribute('href', markdownCss);
        head.appendChild(s);
        b.injectCss('html,body{margin:0; padding:0; height:100%; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif !important}');
    });
}
