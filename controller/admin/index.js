 const Projects = require("../../models/projects");
 const Abouts = require("../../models/about");
 const Services = require("../../models/services");
 const News = require("../../models/news");
 const Teams = require("../../models/team");
 const Message = require("../../models/contact");

exports.index = async (req, res) => {
    res.render("./admin/index", { 
        title: "IDEAL Boshqaruv paneli", 
        layout: "./admin_layout", 
    })
}
exports.projectsAdd = async (req, res) => {
    res.render("./admin/project_add", { 
        title: "IDEAL Loyiha qo'shihs", 
        layout: "./admin_layout",
    })
}
exports.projects = async (req, res) => {
    const projects = await Projects.find().sort({date: -1});
    res.render("./admin/projects", { 
        title: "IDEAL Loyihalari", 
        layout: "./admin_layout",
        projects,
    })
}
exports.services_add = async (req, res) => {
    res.render("./admin/services_add", { 
        title: "IDEAL Xizmat qo'shish", 
        layout: "./admin_layout",
    })
}
exports.services = async (req, res) => {
    const services = await Services.find().sort({date: -1});
    res.render("./admin/services", { 
        title: "IDEAL Xizmatlari", 
        layout: "./admin_layout",
        services
    })
}

exports.aboutAdd = async (req, res) => {
    res.render("./admin/about_add", {  
        title: "Kompanya haqida", 
        layout: "./admin_layout",
    })
}
exports.abouts = async (req, res) => {
    const abouts = await Abouts.find().sort({date: -1});
    res.render("./admin/abouts", { 
        title: "Kompanya haqida", 
        layout: "./admin_layout",
        abouts,
    })
}
exports.teamAdd = async (req, res) => {
    res.render("./admin/team_add", {  
        title: "Jamoa qo'shish", 
        layout: "./admin_layout",
    })
}
exports.teams = async (req, res) => {
    const teams = await Teams.find().sort({date: -1});
    res.render("./admin/teams", { 
        title: "Jamoa a'zolari haqida", 
        layout: "./admin_layout",
        teams,
    })
}
exports.newsAdd = async (req, res) => {
    res.render("./admin/news_add", {  
        title: "Eng yaxshi proektlarni qo'shish", 
        layout: "./admin_layout",
    })
}
exports.news = async (req, res) => {
    const news = await News.find().sort({date: -1});
    res.render("./admin/news", { 
        title: "Eng zo'r proektlar haqida", 
        layout: "./admin_layout",
        news,
    })
}

exports.message = async (req, res) => {
    const message = await Message.find().sort({date: -1});
    res.render("./admin/message", { 
        title: "Xabarlar", 
        layout: "./admin_layout",
        message,
    })
}

exports.login = async (req, res, next) => {
    res.render('./admin/login', { title: "Boshqaruv paneliga kirish", layout: "./login"})
}