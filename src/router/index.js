import Index from "../view/Index"
import Home from "../view/Home"
// import Case from "../view/Case"

import Site from "../view/Site"
import My from "../view/My"

import Introduction from "../view/Introduction"
import Article from "../view/introduction/Article"

// import BrandDetails from "../views/BrandDetails"
import BrandDetails from "../view/BrandDetails";

import Reserve from "../view/Reserve"
import Activity from "../view/Activity"
import Live from "../view/Live"
import Price from "../view/Price"
import Headlines from "../view/Headlines"
import DesignTeam from "../view/DesignTeam"
import ConstructionTeam from "../view/ConstructionTeam"
import Construction from "../view/construction/Construction"
import Material from "../view/Material"
import Designer from "../view/designer/Designer"

import Abbr from "../view/Abbr"
import Find from "../view/designer/Find"
import AbbrList from "../view/abbr/AbbrList"
import Change from "../view/Change"

// 导入案例页面
import Loading from '../components/ReadyLoading'
import loader from 'react-loadable'
const Case = loader({
    loader: () => import('../view/Case'),
    loading: Loading
})
// 导入案例详情
const CaseDetail = loader({
    loader: () => import('../view/mapCase/caseDetail.js'),
    loading: Loading
})

export default [
    {
        path: '/introduction',
        component: Introduction
    },
    {
        path: '/article',
        component: Article
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
        path: '/live/:id',
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
        path: '/construction/:id',
        component: Construction
    },
    {
        path: '/material',
        component: Material
    },
    {
        path: '/designer/:id',
        component: Designer
    },
    {
        path: '/abbr',
        component: Abbr
    },
    {
        path: '/find/:id',
        component: Find
    },
    {
        path: '/abbrlist/:id',
        component: AbbrList
    },
    {
        path: '/change',
        component: Change
    },
    {
        path: '/brandDetails/:id',
        component: BrandDetails
    },
    {
        path: '/detail/:id',
        component: CaseDetail
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