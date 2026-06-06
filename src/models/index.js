const sequelize = require("../config/database");

const User = require("./User");
const Post = require("./Post");
const PostImage = require("./PostImage");
const Comment = require("./Comment");
const Tag = require("./Tag");

User.hasMany(Post, { foreignKey: "userId", onDelete: "CASCADE" });
Post.belongsTo(User, { foreignKey: "userId" });

Post.hasMany(PostImage, { foreignKey: "postId", onDelete: "CASCADE" });
PostImage.belongsTo(Post, { foreignKey: "postId" });

User.hasMany(Comment, { foreignKey: "userId", onDelete: "CASCADE" });
Comment.belongsTo(User, { foreignKey: "userId" });

Post.hasMany(Comment, { foreignKey: "postId", onDelete: "CASCADE" });
Comment.belongsTo(Post, { foreignKey: "postId" });

Post.belongsToMany(Tag, { through: "PostTags", foreignKey: "postId" });
Tag.belongsToMany(Post, { through: "PostTags", foreignKey: "tagId" });

module.exports = {
  sequelize,
  User,
  Post,
  PostImage,
  Comment,
  Tag,
};
