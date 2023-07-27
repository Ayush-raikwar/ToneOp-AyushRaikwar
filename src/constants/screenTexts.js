import PropertiesIcon from '../assets/svg/settings/properties.svg'
import AboutIcon from '../assets/svg/settings/about.svg'
import SettingsIcon from '../assets/svg/settings/settings.svg'
import SupportIcon from '../assets/svg/settings/support.svg'

export const screenTexts = {
    SETTINGS_LIST: {
        LIST_DATA: [
            {
                id: 1,
                title: 'Profile',
                icon: <PropertiesIcon width={50} height={58} />
            },
            {
                id: 2,
                title: 'Account Settings',
                icon: <SettingsIcon width={50} height={58} />
            },
            {
                id: 3,
                title: 'About',
                icon: <AboutIcon width={50} height={58} />
            },
            {
                id: 4,
                title: 'Help & Support',
                icon: <SupportIcon width={50} height={58} />
            }
        ]
    }
}