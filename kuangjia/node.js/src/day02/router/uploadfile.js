const multer = require('multer');
const fs = require('fs');
const path = require('path');

// const upload = multer({dest: path.join(path.resolve(__dirname, '../'), 'temp')});
// var upload = multer({ 
// 	dest:  path.join(__dirname, "../uploadFile"),
// }); 

// var upload = multer({ dest: 'uploads/' })

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
		var _path = path.join(__dirname, "../uploadFile");
		if(!fs.existsSync(_path)){
			fs.mkdirSync(_path);
		}
        cb(null, _path);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
		// 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.originalname);  
    }
});

var upload = multer({ storage: storage })

module.exports = {
    register: (app) => {
        app.post('/upload', upload.single('head'), (req, res) => {
            console.log(req.file);
            console.log(req.body);
            res.send(req.file);
        })
    } 
}