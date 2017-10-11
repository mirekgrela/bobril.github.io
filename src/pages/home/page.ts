import * as b from 'bobril';
import * as m from 'bobril-m';
import * as Splitter from '../../components/splitter/lib';
import * as styles from '../styles';
import * as Divider from '../../components/divider/lib';
import * as LCenter from '../../components/lCenter/lib';

import * as FurrySection from './sections/furry';
import * as GetStartedSection from './sections/getStarted';
import * as FeatureListSection from './sections/featureList';
import * as BobrilLogoSection from './sections/bobrilLogo';
import * as CoreFeaturesPromo from './sections/coreFeaturesPromo';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const home = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            b.styledDiv(
                LCenter.create({ 
                    children: [
                        BobrilLogoSection.create(),
                        FeatureListSection.create()
                    ], maxWidth: 750
                }),
                bobrilPromoStyle
            ),
            LCenter.create({
                children: [
                    CoreFeaturesPromo.create(),
                    Divider.create(),
                    GetStartedSection.create()
                ],
                maxWidth: styles.maxPageWidth,
            })
        ]
    }
});

const imageContainerPadding = 24;
const bobrilPromoStyle = b.styleDef({
    textAlign: 'center',
    color: m.white,
    marginTop: -imageContainerPadding,
    marginLeft: -imageContainerPadding,
    marginRight: -imageContainerPadding,
    paddingTop: imageContainerPadding,
    paddingLeft: imageContainerPadding,
    paddingRight: imageContainerPadding
});

export default home;


