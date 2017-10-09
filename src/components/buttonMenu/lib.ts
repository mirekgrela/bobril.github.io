import * as b from 'bobril';
import * as m from 'bobril-m';
import * as icons from 'bobril-m-icons';
import * as MenuItem from './menuItem';

export const Item = MenuItem;

export interface IComponentData {
    children?: b.IBobrilNode[]
}

interface IComponentCtx extends b.IBobrilCtx {
    data: IComponentData;
    expanded?: boolean;
}

export const create = b.createComponent<IComponentData>({
    render(ctx: IComponentCtx, me: b.IBobrilNode) {
        const d = ctx.data;
        me.children = getList(ctx);
        b.style(me, { width: 200 });
    }
});

function getList(ctx: IComponentCtx): b.IBobrilChildren {
    let children = [
        m.Button({ action: () => {
            ctx.expanded = !ctx.expanded;
            b.invalidate();
        }}, icons.navigationMenu()),
    ];

    if (ctx.expanded && ctx.data.children) {
        let items = [
            m.Divider({}),
            ...ctx.data.children
                .map(child => m.ListItem({ action: () => { 
                    ctx.expanded = !ctx.expanded; 
                    child.data && child.data.action && child.data.action(); 
                }}, child))
        ];
        children.push(m.List({}, items));
    }

    return b.styledDiv(
        children, 
        { 
            margin: 16,
            color: m.primary1Color,
            backgroundColor: m.canvasColor
        }
    );
}