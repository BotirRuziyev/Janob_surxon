const Projects = require("../../models/projects");
const Abouts = require("../../models/about");
const Services = require("../../models/services");
const News = require("../../models/news");
const Team = require("../../models/team");


exports.index = async (req, res) => {
    const projects = await Projects.find().sort({ date: -1 });
    const services = await Services.find().sort({ date: -1 });
    const news = await News.find().sort({ date: -1 });
    const teams = await Team.find().sort({ date: -1 });
    const abouts = await Abouts.find();
    res.render("./web/index", { 
        title: "IDEAL NAFIS DIZAYN", 
        layout: "./web_layout",
        lang: req.session.ulang,
        projects, abouts, services, news, teams,
    })
}
exports.projectOne = async (req, res) => {
    const result = await Projects.findById({ _id: req.params.id })
    res.render("./web/project_one", { 
        title: "IDEAL NAFIS DIZAYN LOYIHA", 
        layout: "./web_layout",
        result, 
    })
}

exports.newsOne = async (req, res) => {
    const result = await News.findById({ _id: req.params.id })
    res.render("./web/news_one", { 
        title: "IDEAL NAFIS DIZAYN LOYIHA", 
        layout: "./web_layout",
        result, 
    })
}

exports.servicesOne = async (req, res) => {
    const result = await Services.findById({ _id: req.params.id });
    const services = await Services.find().sort({ date: -1 });
    res.render("./web/services_one", { 
        title: "IDEAL NAFIS DIZAYN LOYIHA", 
        layout: "./web_layout",
        result, services
    })
}

exports.teamOne = async (req, res) => {
    const result = await Team.findById({ _id: req.params.id })
    res.render("./web/team_one", { 
        title: "IDEAL NAFIS DIZAYN JAMOASI", 
        layout: "./web_layout",
        result, 
    })
}
exports.errorMessage = async (req, res) => {
    res.render("./web/errorMessage", { 
        title: "IDEAL NAFIS DIZAYN", 
        layout: "./web_layout"
    })
}