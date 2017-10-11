import * as b from 'bobril';
import * as m from 'bobril-m';
import * as Label from '../../../components/label/lib';
import * as Paragraph from '../../../components/paragraph/lib';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

export const create = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode){
        me.children = b.styledDiv([
            Label.create({
                label: 'Bobril',
                size: Label.LabelSize.Display2,
                style: {
                    fontSize: 30,
                    fontWeight: 400,
                    textAlign: 'center'
                }
            }),
            Paragraph.create(`is a component-oriented framework for creating web applications, inspired by ReactJs (Virtual DOM,
                components with state) and Mithril (small size, more complete framework).`
            ),
            b.styledDiv([
                m.Button({}, 'Get Started'),
                m.Button({}, 'Download'),
            ]),
            {
                textAlign: 'center'
            }
        ]);
    }
});