export function Printer(el){
  //  transition:color 2s ease-in;
  const time = () =>{
    return new Date(Date.now()+9*60*60*1000)
      .toISOString().split('T')
      .pop().split('.').shift()
  }

  const getprop = (el) =>{
    var tag = el.tagName.toLowerCase()
    if(tag === 'input' || tag === 'textarea'){
      return 'value'
    }
    return 'innerHTML'
  }
  /////
  
  const prop = getprop(el)
  return function print(str,color){
    el.style.color = color||''
    if(str===null||str===undefined){
      return
    }
    el[prop] = ` ${str}[${time()}]` 
  }
}
