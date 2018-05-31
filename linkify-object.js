/*!
 * linkifyObject, http://tpkn.me/
 */

function filterProp(prop, filters){
   if(typeof filters === 'string' || Array.isArray(filters)){
      return filters.indexOf(prop) > -1;
   }else if(typeof filters === 'function'){
      return filters(prop);
   }

   return arr;
}

function loopThrough(obj, results = [], filter){
   let i, o;

   for(i in obj){
      o = obj[i];

      if(o === Object(o)){
         loopThrough(o, results, filter);
      }else{
         if(filter && filterProp(i, filter)){
            continue;
         }

         results.push(i + '=' + o);
      }
   }

   return results;
}

function linkifyObject(obj, filter){
   return loopThrough(obj, [], typeof filter !== 'undefined' ? filter : null).join('&');
}


if(typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
   module.exports = linkifyObject;
}else{
   if(typeof define === 'function' && define.amd){
      define([], function(){
         return linkifyObject;
      });
   }else{
      window.linkifyObject = linkifyObject;
   }
}
