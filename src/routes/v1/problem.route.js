const express = require("express");

const { problemController } = require("../../controllers/index.controller");

const problemRouter = express.Router();

problemRouter.get("/ping", problemController.pingProblemController);

problemRouter.get("/:id", problemController.getProblem);

problemRouter.get("/", problemController.getProblems);

problemRouter.post("/", problemController.addProblem);

problemRouter.delete("/:id", problemController.deleteProblem);

problemRouter.patch("/:id", problemController.updateProblem);

module.exports = problemRouter;
