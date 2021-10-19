module.exports.fileUpload = (req, name) => {
    let File;
  let uploadPath;

   if (!req.files || Object.keys(req.files).length === 0) {

    if(name == 'cflag') {
        var fallbackurl = req.body.cfallbackurl;
        return fallbackurl
    }
    if (name == 'pflag') {
        var fallbackurl = req.body.pfallbackurl;
        return fallbackurl
    } 

    var fallbackurl = req.body.fallbackurl;
    return fallbackurl
    
    
  }

    if(name == 'cflag' && !req.files['cflag']) {
        var fallbackurl = req.body.cfallbackurl;
        return fallbackurl
    }
    if (name == 'pflag' && !req.files['pflag']) {
        var fallbackurl = req.body.pfallbackurl;
        return fallbackurl
    } 

  File = req.files[name];
  uploadPath = __dirname + '/assets/img/' + File.name;
  returnuploadpath = '/img/' + File.name

  File.mv(uploadPath, function(err) {
      if (err) {
          console.log(error)
      }
    });

  return returnuploadpath
}