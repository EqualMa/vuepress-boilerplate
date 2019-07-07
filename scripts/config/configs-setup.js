const joi = require("@hapi/joi");
const { fieldsOfSchema } = require("./utils");

exports.schemaObj = {
  docsRepo: joi
    .string()
    .required()
    .description("repo of docs"),

  publishRepo: joi
    .string()
    .required()
    .description("repo for publishing"),

  keepPublishCommitHistory: joi
    .bool()
    .default(true)
    .description("whether to keep commit history when publishing to repo"),
};

exports.fields = fieldsOfSchema(this.schemaObj);
