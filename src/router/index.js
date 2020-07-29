// 导入案例页面
import Loading from '../components/ReadyLoading'
import loader from 'react-loadable'
//3D详情页面，自带loading
import AbbrList from "../view/abbr/AbbrList"

// import Index from "../view/Index"
const Index = loader({
    loader: () => import("../view/Index"),
    loading: Loading
})

// import Home from "../view/Home"
const Home = loader({
    loader: () => import("../view/Home"),
    loading: Loading
})

// import Site from "../view/Site"
const Site = loader({
    loader: () => import("../view/Site"),
    loading: Loading
})

// import My from "../view/My"
const My = loader({
    loader: () => import("../view/My"),
    loading: Loading
})

// import Introduction from "../view/Introduction"
const Introduction = loader({
    loader: () => import("../view/Introduction"),
    loading: Loading
})

// import Article from "../view/introduction/Article"
const Article = loader({
    loader: () => import("../view/introduction/Article"),
    loading: Loading
})

// import BrandDetails from "../view/BrandDetails";
const BrandDetails = loader({
    loader: () => import("../view/BrandDetails"),
    loading: Loading
})

// import Reserve from "../view/Reserve"
const Reserve = loader({
    loader: () => import("../view/Reserve"),
    loading: Loading
})

// import Activity from "../view/Activity"
const Activity = loader({
    loader: () => import("../view/Activity"),
    loading: Loading
})

// import Live from "../view/Live"
const Live = loader({
    loader: () => import("../view/Live"),
    loading: Loading
})

// import Price from "../view/Price"
const Price = loader({
    loader: () => import("../view/Price"),
    loading: Loading
})

// import Headlines from "../view/Headlines"
const Headlines = loader({
    loader: () => import("../view/Headlines"),
    loading: Loading
})

// import DesignTeam from "../view/DesignTeam"
const DesignTeam = loader({
    loader: () => import("../view/DesignTeam"),
    loading: Loading
})

// import ConstructionTeam from "../view/ConstructionTeam"
const ConstructionTeam = loader({
    loader: () => import("../view/ConstructionTeam"),
    loading: Loading
})

// import Construction from "../view/construction/Construction"
const Construction = loader({
    loader: () => import("../view/construction/Construction"),
    loading: Loading
})

// import Material from "../view/Material"
const Material = loader({
    loader: () => import("../view/Material"),
    loading: Loading
})

// import Designer from "../view/designer/Designer"
const Designer = loader({
    loader: () => import("../view/designer/Designer"),
    loading: Loading
})

// import Abbr from "../view/Abbr"
const Abbr = loader({
    loader: () => import("../view/Abbr"),
    loading: Loading
})

// import Find from "../view/designer/Find"
const Find = loader({
    loader: () => import("../view/designer/Find"),
    loading: Loading
})


// const AbbrList = loader({
//     loader: () => import("../view/abbr/AbbrList"),
//     loading: Loading
// })

// import Change from "../view/Change"
const Change = loader({
    loader: () => import("../view/Change"),
    loading: Loading
})

// import Login from "../view/login"
const Login = loader({
    loader: () => import("../view/login"),
    loading: Loading
})
// import Register from '../view/register'
const Register = loader({
    loader: () => import('../view/register'),
    loading: Loading
})

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
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
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