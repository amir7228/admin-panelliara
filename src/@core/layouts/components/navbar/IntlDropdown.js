// ** React Imports
import {useContext} from 'react'
import {useRTL} from "../../../../utility/hooks/useRTL"
// ** Third Party Components
import ReactCountryFlag from 'react-country-flag'
import {UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap'

// ** Internationalization Context
import {IntlContext} from '@src/utility/context/Internationalization'

const IntlDropdown = () => {
    // ** Context
    const intlContext = useContext(IntlContext)

    // ** Vars
    const langObj = {
        en: 'English',
        fa: 'فارسی'
    }

    const [isRtl, setIsRtl] = useRTL()

    // ** Function to switch Language
    const handleLangUpdate = (e, lang, dir) => {
        e.preventDefault()
        intlContext.switchLanguage(lang)
        setIsRtl(dir)
    }

    return (
        <UncontrolledDropdown href='/' tag='li' className='dropdown-language nav-item'>
            <DropdownToggle href='/' tag='a' className='nav-link' onClick={e => e.preventDefault()}>
                <ReactCountryFlag
                    className='country-flag flag-icon'
                    countryCode={intlContext.locale === 'en' ? 'us' : 'fa' ? 'ir' : intlContext.locale}
                    svg
                />
                <span className='selected-language'>{langObj[intlContext.locale]}</span>
            </DropdownToggle>
            <DropdownMenu className='mt-0' right>
                <DropdownItem href='/' tag='a' onClick={e => handleLangUpdate(e, 'en', !isRtl)}>
                    <ReactCountryFlag className='country-flag' countryCode='us' svg/>
                    <span className='ml-1'>English</span>
                </DropdownItem>
                <DropdownItem href='/' tag='a' onClick={e => handleLangUpdate(e, 'fa', 'rtl')}>
                    <ReactCountryFlag className='country-flag' countryCode='ir' svg/>
                    <span className='ml-1'>فارسی</span>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default IntlDropdown
