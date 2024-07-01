"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const Department = require("../models/department.model");

module.exports = {
  list: async (req, res) => {
    // const departments = await res.getModelList(Department);
    const data = await res.getModelList(Department);
    res.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Department),
      // departments,
      data,
    });
  },
  create: async (req, res) => {
    const data = await Department.create(req.body);
    res.status(201).send({
      error: false,
      //   message: "Department created successfully",
      data,
    });
  },
  read: async (req, res) => {
    // const data = await Department.findById(req.params.id); //* findById arka planda findOne methodunu calistirir.
    const data = await Department.findOne({ _id: req.params.id });
    req.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const data = await Department.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true, //* modelde var olan validate fonksiyonlarinin update islemi sirasinda calismasini saglayan özelliktir.!
    });
    req.status(202).send({
      error: false,
      data,
      newData: await Department.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await Department.deleteOne({ _id: req.params.id });
    req.status(data.deletedCount > 0 ? 204 : 404).send({
      error: !data.deletedCount,
      data,
    });
  },
};