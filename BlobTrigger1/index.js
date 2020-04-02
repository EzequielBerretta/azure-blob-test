module.exports = async function (context, myBlob) {
    try{
        context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");
        context.bindings.myOutputBlob = context.bindings.myInputBlob;
    }
    catch(ex){
        console.log(ex);
    }
    
    
};