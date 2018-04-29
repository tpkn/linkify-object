/*!
 * linkifyObject, http://tpkn.me/
 */

function linkifyObject(obj, filter){
   let i, a = [];
   let f = typeof filter === 'string' || Array.isArray(filter) ? filter : false;

   for(i in obj){
      if(!f || f.indexOf(i) == -1){
         a.push(i + '=' + obj[i]);
      }
   }

   return a.join('&');
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
