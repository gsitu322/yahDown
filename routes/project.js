var express = require('express');
var router  = express.Router();

var Project = require('../models/project');

router.get('/', function (req, res, next) {
    Project.find()
        .populate('user')
        .exec(function (err, projects) {
            if (err) {
                return res.status(500).json({
                    message: 'Failed to find projects',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                projects: projects
            });
        });
});

router.post('/', function(req, res, next) {

    var project = new Project({
        name: req.body.name,
        description: req.body.description,
        milestones: req.body.milestones,
        technologies: req.body.technologies
    });

    project.save(function(err, project) {
        if (err) {
            return res.status(500).json({
                message: "Failed to save project",
                err: err
            });
        }

        res.status(201).json({
            message: 'Successfully saved project',
            project: project
        });
    });
});


module.exports = router;