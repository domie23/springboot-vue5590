const base = {
    get() {
        return {
            url : "http://localhost:8080/xiangmushenbaoxitong/",
            name: "xiangmushenbaoxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiangmushenbaoxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "项目申报系统"
        } 
    }
}
export default base
