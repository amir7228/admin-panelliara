// ** React Imports
import {useState, createContext} from 'react'

// ** Intl Provider Import
import {IntlProvider} from 'react-intl'

// ** Core Language Data
import messagesEn from '@assets/data/locales/en.json'
import messagesFa from '@assets/data/locales/fa.json'

// ** User Language Data
import userMessagesEn from '@src/assets/data/locales/en.json'
import userMessagesFa from '@src/assets/data/locales/fa.json'

// ** Menu msg obj
const menuMessages = {
    en: {...messagesEn, ...userMessagesEn},
    fa: {...messagesFa, ...userMessagesFa}
}

// ** Create Context
const Context = createContext()

const IntlProviderWrapper = ({children}) => {
    // ** States
    const [locale, setLocale] = useState('fa')
    const [messages, setMessages] = useState(menuMessages['fa'])

    // ** Switches Language
    const switchLanguage = lang => {
        setLocale(lang)
        setMessages(menuMessages[lang])
    }

    return (
        <Context.Provider value={{locale, switchLanguage}}>
            <IntlProvider key={locale} locale={locale} messages={messages} defaultLocale='fa'>
                {children}
            </IntlProvider>
        </Context.Provider>
    )
}

export {IntlProviderWrapper, Context as IntlContext}
