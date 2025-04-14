// models/Thought.js
const { Schema, model, Types } = require('mongoose');
const moment = require('moment'); // Optional; can also use native Date formatting

// Reaction Schema (subdocument)
const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use getter to format timestamp
      get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Thought Schema
const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'Thought is required',
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use getter to format timestamp
      get: (timestamp) => moment(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Virtual property for reaction count
ThoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);
module.exports = Thought;
