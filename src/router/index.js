import Index from "../view/Index"
import Home from "../view/Home"
import Case from "../view/Case"
import Site from "../view/Site"
import My from "../view/My"
import Introduction from "../view/Introduction"
import Reserve from "../view/Reserve"
import Activity from "../view/Activity"
import Live from "../view/Live"
import Price from "../view/Price"
import Headlines from "../view/Headlines"
import DesignTeam from "../view/DesignTeam"
import ConstructionTeam from "../view/ConstructionTeam"
import Material from "../view/Material"
export default [
    {
        path: '/introduction',
        component: Introduction
    },
    {
        path: '/reserve',
        component: Reserve
    },
    {
        path: '/activity',
        component: Activity
    },
    {
        path: '/live',
        component: Live
    },
    {
        path: '/price',
        component: Price
    },
    {
        path: '/headlines',
        component: Headlines
    },
    {
        path: '/designteam',
        component: DesignTeam
    },
    {
        path: '/constructionteam',
        component: ConstructionTeam
    },
    {
        path: '/material',
        component: Material
    },
    {
        path: '/',
        component: Index,
        childrens: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: '/case',
                component: Case
            },
            {
                path: '/site',
                component: Site
            },
            {
                path: '/my',
                component: My
            },
        ]
    },
]