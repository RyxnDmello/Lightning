import { Schema, model } from "mongoose";

const requestSchema = new Schema({
  _id: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  url: {
    type: Schema.Types.String,
    required: true,
  },
  protocol: {
    type: Schema.Types.String,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
});

const collectionSchema = new Schema({
  _id: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
  requests: {
    type: [requestSchema],
    require: true,
  },
});

const accountSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  collections: {
    type: [collectionSchema],
    required: true,
  },
});

const accountModel = model("account", accountSchema);

export default accountModel;
