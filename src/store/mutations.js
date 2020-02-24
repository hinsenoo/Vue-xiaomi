/* 
    商城 Vuex-mutations
*/
// 读取
export default {
    saveUserName(state,username){
        // 改变状态
        state.username = username;
    },
    saveCartCount(state,cartCount){
        // 改变状态
        state.cartCount = cartCount;
    }
}