/* 
    商城 Vuex-actions
*/
// 传输
export default {
    // 用户名
    saveUserName(context,username){
        // 一个与 store 实例具有相同方法和属性的 context 对象
        context.commit('saveUserName',username);
    },
    // 购物车数量
    saveCartCount(context,cartCount){
        // 一个与 store 实例具有相同方法和属性的 context 对象
        context.commit('saveCartCount',cartCount);
    }
}