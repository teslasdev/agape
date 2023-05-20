import { NavLink } from "../interfaces/general";
import PAGES from "./page-names";

const NavLinks: NavLink[]=  [
    {
        name: "/",
        disabled: false,
        link: PAGES.HOME,
    },

    {
        name: "Login",
        disabled: false,
        link: PAGES.HOME,
    },
    {
        name: "android/",
        disabled: false,
        link: PAGES.HOMEMOBILE,
    },
    {
        name: "android/sermons",
        disabled: false,
        link: PAGES.SERMONS,
    },
    {
        name: "android/devotionals",
        disabled: false,
        link: PAGES.DEVOTIONAL,
    },
    {
        name: "android/live",
        disabled: false,
        link: PAGES.LIVE,
    },
]

export default NavLinks;