import * as b from 'bobril';
import * as m from 'bobril-m';
import * as BasicLayout from '../components/lBasicLayout/lib';
import * as LMainContent from '../components/lMainContent/lib';
import * as AppBar from '../components/appBar/lib';
import * as ButtonMenu from '../components/buttonMenu/lib';
import * as router from './router';
import * as Image from '../components/image/lib';
import * as assets from '../assets/assets';


interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
    appHeight: number;
}

const app = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {

        const actualPageId = getActualPageId();

        me.children = [
            BasicLayout.create({
                header: 
                    ButtonMenu.create({
                        children: [
                            ButtonMenu.Item.create({
                                label: 'BOBRIL',
                                isActive: actualPageId === router.home,
                                action: () => {
                                    b.runTransition(b.createRedirectPush(router.home));
                                }
                            }),
                            ButtonMenu.Item.create({
                                label: 'GUIDES',
                                isActive: actualPageId === router.guides,
                                action: () => {
                                    b.runTransition(b.createRedirectPush(router.guides));
                                }
                            }),
                            ButtonMenu.Item.create({
                                label: 'DOCS',
                                isActive: actualPageId === router.documentation,
                                action: () => {
                                    b.runTransition(b.createRedirectPush(router.documentation));
                                }
                            })
                        ]
                    }),
                content: [
                    LMainContent.create({
                        content: [
                            me.data.activeRouteHandler()
                        ]
                    })
                ]
            }),
        ];

        b.style(
            me,
            ctx.appHeight && {height: ctx.appHeight}
        )
    },
    postUpdateDom(ctx: IContext) {
        // Update correct height of the application
        const currHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        if (currHeight !== ctx.appHeight) {
            ctx.appHeight = currHeight;
            b.invalidate(ctx);
        }
    },
});

function getActualPageId(): string {
    return b.getActiveRoutes()[0].name || router.home;
}

export default app;