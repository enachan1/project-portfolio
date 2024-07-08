import '../styles/style.css'
import '../styles/modern-normalize.css'
import '../styles/header.css'
import '../styles/main-sect.css'
import'../styles/about.css'
import '../styles/skills.css'
import '../styles/project.css'
import '../styles/contact.css'
import '../styles/mobile-nav.css'
import '../styles/loader.css'

import lazyLoad from './lazyLoad'
import fade_lazyLoad from './lazyLoad_fade'
import mobileNav from './mobile_nav'
import loader from './loader'


lazyLoad();
fade_lazyLoad();
mobileNav();
loader();
