var obj2 = {
  name: {},
  age: {
    age1: {
      age11: {
        val: 12
      }
    }
  }
};
observe(obj2);
obj2.age.age1.age11 = 'wn22';
function observe(obj){
  if(!obj || type(obj) !== 'Object'){
    return;
  }
  Object.keys(obj).forEach(function(key){
    defineReactFunc(obj, key, obj[key]);
  })
}
function defineReactFunc(obj, key ,value){
  observe(value); // 监听子属性
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: false,
    get: function(){
      return value;
    },
    set: function(newValue){
      if(type(value) === 'Array' && type(newValue) === 'Array'){
        if(JSON.stringify(value) !== JSON.stringify(newValue)){
          log('监听到变化了::::', value, '----->', newValue);
          value = newValue;
        }
      } else {
        if(value !== newValue){
          log('监听到变化了::::', value, '----->', newValue);
          value = newValue;
        }
      }
    }
  })
}
function type(value){
  return Object.prototype.toString.call(value).slice(8,-1);
}
function log(){
  console.log.apply(console, arguments);
}
