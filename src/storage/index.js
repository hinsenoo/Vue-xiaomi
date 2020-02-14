/* 
 *  Storage 封装
 *  (sessionStorage)
 */
/*  格式：
    Key: mall  
    Value: { 
            "user": 
                { 
                    "username": "jack", "age": 30
                } 
            } 
*/
const STORAGE_KEY = 'mall';
export default {
    // 存储值
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            val[key] = value;
            // 递归
            this.setItem(module_name,val);
        }else{
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
        }
    },
    // 获取某一个模块下面的属性 
    // 例： user 下面的 userName
    getItem(key,module_name){
        if (module_name){
            let val = this.getItem(module_name);
            if(val){
                return val[key];
            }
        }
        return this.getStorage()[key];
    },
    // 获取整个 Storage 数据
    getStorage(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    // 清空某一个值
    clear(key,module_name){
        let val = this.getStorage();
        if(module_name){
            delete val[module_name][key];
        }else {
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val));
    }
}