import React, {Fragment} from 'react';
import {IntlProvider} from 'react-intl';
import flatten from 'flat';

import {LOCALES} from "./constants";
import messages from './messages';

const LangProvider = (({children, locale = LOCALES.SPANISH}) =>
        <IntlProvider
            textComponent={Fragment}
            locale={locale}
            messages={flatten(messages[locale])}
        >
            {children}
        </IntlProvider>
);

LangProvider.displayName = 'I18nProvider';
LangProvider.defaultProps = {
    locale: LOCALES.SPANISH,
}

export default LangProvider;
