

const {override,fixBabelImports,addLessLoader,addDecoratorsLegacy}=require('customize-cra')
    
module.exports=override(
    addLessLoader({
        javascriptEnabled:true,
        modifyVars:{"@test": "#ffb200"}
    }),
    addDecoratorsLegacy(),
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        style:true
    }),
)


