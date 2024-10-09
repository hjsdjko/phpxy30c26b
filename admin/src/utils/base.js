const base = {
    get() {
        return {
            url : "http://localhost:8080/phpxy30c26b/",
            name: "phpxy30c26b",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/phpxy30c26b/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于web的动漫插画分享网站"
        } 
    }
}
export default base
