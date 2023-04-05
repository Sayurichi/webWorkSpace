module.exports = function (app) 
{
    app.get('/', function(req, res){
        res.render("../views/index.html");
    });
    app.get('/toDay', function(req, res){
        res.render("../views/index.html");
    });
    app.get('/toDoy/', function (req, res) {
        res.render('../views/index.html');
        
    });
}

