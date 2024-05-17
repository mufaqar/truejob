function MetaTags(metaString) {
     const parseMetaString = (metaString) => {
       const metaTags = metaString?.split(/<meta |\/>/).filter((tag) => tag !== '');
   
       const metaObjects = metaTags.map((tag) => {
         const metaObject = {};
         const nameMatch = tag.match(/name="([^"]+)"/);
         const propertyMatch = tag.match(/property="([^"]+)"/);
         const contentMatch = tag.match(/content="([^"]+)"/);
   
         if (nameMatch) {
           metaObject.name = nameMatch[1];
         } else if (propertyMatch) {
           metaObject.property = propertyMatch[1];
         }
   
         if (contentMatch) {
           metaObject.content = contentMatch[1];
         }
   
         return metaObject;
       });
   
       return metaObjects;
     };
   
     const metaObjects = parseMetaString(metaString);
     return metaObjects;
   }
export default MetaTags