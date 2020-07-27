import actionTypes from '../actions/actionTypes'

const initState = {
  headerTop: {
    caseStyle: [
      "不限",
      "北欧",
      "其他风格",
      "中式风格",
      "地中海风格",
      "新中式",
      "轻奢",
      "小型别墅",
    ],
    housetyle: ["不限", "跃层", "别墅", "复式", "办公空间", "三层复式"],
    area: [
      "不限",
      "1000平方以上",
      "180平米以上",
      "12-180平米",
      "90-120平米",
      "80-90平米",
    ],
  },

  isLoad: false,
  list: [
    {
      case_ID: "001",
      case_title: "135m²三室两厅现代简约",
      community: "万达",
      coverPicture: "",
      designer: "那么多",
      constructor: "破坏队",
      caseDetail: "详情",
      isShow: false,
      hasStyle: false,
      case_style: "北欧",
      case_hometype: '跃层',
      case_area: "12-180平米",
      case_cost: "7.71",
      case_buildingName: "黄鹤楼",
      case_buildingPosition: '全干型设计师',
      casePicture: '1.jpg'
    },
    {
      case_ID: "002",
      case_title: "93m²2室1厅卫设计",
      community: "万达",
      coverPicture: "",
      case_hometype: '跃层',
      designer: "那么多",
      constructor: "破坏队",
      caseDetail: "详情",
      isShow: false,
      hasStyle: false,
      case_style: "小型别墅",
      case_area: "12-180平米",
      case_cost: "7.71",
      case_buildingName: "红利",
      case_buildingPosition: '高级设计师',
      casePicture: '2.jpg'
    },
    {
      case_ID: "003",
      case_title: "我的心愿是住在离海最近的地方",
      community: "万达",
      coverPicture: "",
      designer: "那么多",
      constructor: "破坏队",
      caseDetail: "详情",
      isShow: false,
      hasStyle: false,
      case_style: "小型别墅",
      case_hometype: '跃层',
      case_area: "12-180平米",
      case_cost: "7.71",
      case_buildingName: "利群",
      case_buildingPosition: '业余设计师',
      casePicture: '3.jpg',
      case_buildingPic: '2.jpg'
    },
    {
      case_ID: "004",
      case_title: "友好公司",
      community: "万达",
      coverPicture: "",
      designer: "那么多",
      constructor: "破坏队",
      caseDetail: "详情",
      case_hometype: '跃层',
      isShow: false,
      hasStyle: false,
      case_style: "地中海风格",
      case_area: "80-90平米",
      case_cost: "7.71",
      case_buildingName: "长白山",
      case_buildingPosition: '工程部总监',
      casePicture: '4.jpg'
    },
    {
      case_ID: "005",
      case_title: "友好公司",
      community: "万达",
      coverPicture: "",
      designer: "那么多",
      constructor: "破坏队",
      case_hometype: '跃层',
      caseDetail: "详情",
      isShow: false,
      hasStyle: false,
      case_style: "小型别墅",
      case_area: "90-120平米",
      case_cost: "7.71",
      case_buildingName: "娇子",
      case_buildingPosition: '首席设计师',
      casePicture: '5.jpg'
    },
    {
      case_ID: "006",
      case_title: "68m²1室1厅现代简约",
      community: "万达",
      coverPicture: "",
      designer: "那么多",
      constructor: "破坏队",
      caseDetail: "详情",
      isShow: false,
      hasStyle: false,
      case_style: "轻奢",
      case_area: "100平方米以上",
      case_cost: "7.71",
      case_buildingName: "万宝路",
      case_buildingPosition: '主任设计师',
      casePicture: '6.jpg'
    },
    {
      case_ID: "007",
      case_title: "68m²1室1厅现代简约",
      community: "万达",
      coverPicture: "",
      designer: "那么多",
      constructor: "破坏队",
      caseDetail: "详情",
      isShow: false,
      hasStyle: false,
      case_style: "轻奢",
      case_area: "100平方米以上",
      case_cost: "7.71",
      case_buildingName: "万宝路",
      case_buildingPosition: '主任设计师',
      casePicture: '6.jpg'
    },
  ],
  list_new: [
    {
      case_ID: "001",
      case_title: "135m²三室两厅现代简约",
      community: "万达",
      coverPicture: "",
      designer: "那么多",
      constructor: "破坏队",
      caseDetail: "详情",
      isShow: false,
      hasStyle: false,
      case_style: "北欧",
      case_hometype: '跃层',
      case_area: "12-180平米",
      case_cost: "7.71",
      case_buildingName: "黄鹤楼",
      case_buildingPosition: '全干型设计师',
      casePicture: '1.jpg'
    },
    {
      case_ID: "002",
      case_title: "93m²2室1厅卫设计",
      community: "万达",
      coverPicture: "",
      case_hometype: '跃层',
      designer: "那么多",
      constructor: "破坏队",
      caseDetail: "详情",
      isShow: false,
      hasStyle: false,
      case_style: "小型别墅",
      case_area: "12-180平米",
      case_cost: "7.71",
      case_buildingName: "红利",
      case_buildingPosition: '高级设计师',
      casePicture: '2.jpg'
    },
    {
      case_ID: "003",
      case_title: "我的心愿是住在离海最近的地方",
      community: "万达",
      coverPicture: "",
      designer: "那么多",
      constructor: "破坏队",
      caseDetail: "详情",
      isShow: false,
      hasStyle: false,
      case_style: "小型别墅",
      case_hometype: '跃层',
      case_area: "12-180平米",
      case_cost: "7.71",
      case_buildingName: "利群",
      case_buildingPosition: '业余设计师',
      casePicture: '3.jpg',
      case_buildingPic: '2.jpg'
    },
    {
      case_ID: "004",
      case_title: "友好公司",
      community: "万达",
      coverPicture: "",
      designer: "那么多",
      constructor: "破坏队",
      caseDetail: "详情",
      case_hometype: '跃层',
      isShow: false,
      hasStyle: false,
      case_style: "地中海风格",
      case_area: "80-90平米",
      case_cost: "7.71",
      case_buildingName: "长白山",
      case_buildingPosition: '工程部总监',
      casePicture: '4.jpg'
    },
    {
      case_ID: "005",
      case_title: "友好公司",
      community: "万达",
      coverPicture: "",
      designer: "那么多",
      constructor: "破坏队",
      case_hometype: '跃层',
      caseDetail: "详情",
      isShow: false,
      hasStyle: false,
      case_style: "小型别墅",
      case_area: "90-120平米",
      case_cost: "7.71",
      case_buildingName: "娇子",
      case_buildingPosition: '首席设计师',
      casePicture: '5.jpg'
    },
    {
      case_ID: "006",
      case_title: "68m²1室1厅现代简约",
      community: "万达",
      coverPicture: "",
      designer: "那么多",
      constructor: "破坏队",
      caseDetail: "详情",
      isShow: false,
      hasStyle: false,
      case_style: "轻奢",
      case_area: "100平方米以上",
      case_cost: "7.71",
      case_buildingName: "万宝路",
      case_buildingPosition: '主任设计师',
      casePicture: '6.jpg'
    },
    {
      case_ID: "007",
      case_title: "68m²1室1厅现代简约",
      community: "万达",
      coverPicture: "",
      designer: "那么多",
      constructor: "破坏队",
      caseDetail: "详情",
      isShow: false,
      hasStyle: false,
      case_style: "轻奢",
      case_area: "100平方米以上",
      case_cost: "7.71",
      case_buildingName: "万宝路",
      case_buildingPosition: '主任设计师',
      casePicture: '6.jpg'
    },
  ],
};

export default (state = initState, action) => {
  // console.log(state)

  switch (action.type) {
    case actionTypes.CASE_CHANGE:
      // console.log(action.payload)
      if (action.payload.value.includes('不限')) {
        return { ...state, list: state.list }
      }
      if (action.payload.label === 'caseStyle') {
        state.list_new1 = state.list_new.filter(item => {
          return item.case_style === action.payload.value
        })
        return {
          ...state,
          isLoad: true,
          list: state.list_new1
        }
      }
      if (action.payload.label === 'housetyle') {
        state.list_new = state.list_new.filter(item => {
          return item.case_hometype === action.payload.value
        })
        return {
          ...state,
          isLoad: true,
          list: state.list_new
        }
      }
      if (action.payload.label === 'area') {
        state.list_new = state.list_new.filter(item => {
          return item.case_area === action.payload.value
        })
        return {
          ...state,
          isLoad: true,
          list: state.list_new
        }
      }
    case actionTypes.CASE_DETAIL_BY_ID:
      state.list_new = state.list.filter(item => {
        return item.case_ID === action.payload.id
      })
      return {
        ...state,
        isLoad: true,
        list: state.list_new
      }

    default:
      return state;
  }
};