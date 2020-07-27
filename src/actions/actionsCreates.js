 import actionTypes from './actionTypes'


 export const onChange=(info)=>dispatch=>{
   console.log(info)
    dispatch({
            type:actionTypes.CASE_CHANGE,
            payload:info
         }
    )
 }

 export const onDetailById=(id)=>dispatch=>{
   console.log(id)
    dispatch({
            type:actionTypes.CASE_DETAIL_BY_ID,
            payload:{id}
         }
    )
 }