const  docxConverter = require('docx-pdf');
docxConverter("myResume.docx","output.pdf",function(err,result){
    if(err){
        console.log(err);
    }
    console.log("result"+result);
})