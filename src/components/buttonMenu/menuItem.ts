import * as b from 'bobril';
import * as m from 'bobril-m';

export interface IData {
    label: string;
    action: () => void;
    isActive?: boolean;
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode){
        const d = ctx.data;

        me.children = [
            d.label
        ];

        b.style(
            me,
            buttonStyle,
            d.isActive && { color: m.white }
        );
    }
});

export const buttonStyle = b.styleDef({
});