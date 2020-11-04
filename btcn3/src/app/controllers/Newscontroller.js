const { render } = require("node-sass");

class NewsController{
    
    //[Get] /news

    index(req, res){
        res.render("news");
    }
    show(req, res){
        res.send("ANH DAT DEP TRAI NHAT VIET NAM");
    }
}

module.exports=  new NewsController;