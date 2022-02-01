
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.8.1
 * Query Engine version: 34df67547cf5598f5a6cd3eb45f14ee70c3fb86f
 */
Prisma.prismaVersion = {
  client: "3.8.1",
  engine: "34df67547cf5598f5a6cd3eb45f14ee70c3fb86f"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  name: 'name',
  profilePicture: 'profilePicture',
  profileSlug: 'profileSlug',
  UserStatus: 'UserStatus',
  role: 'role',
  createdAt: 'createdAt',
  modifiedAt: 'modifiedAt'
});

exports.Prisma.FollowerScalarFieldEnum = makeEnum({
  id: 'id',
  followedByUserId: 'followedByUserId',
  followingUserId: 'followingUserId'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  slug: 'slug',
  createdById: 'createdById',
  createdAt: 'createdAt',
  modifiedAt: 'modifiedAt',
  sourceId: 'sourceId',
  previewUrl: 'previewUrl',
  description: 'description'
});

exports.Prisma.VideoSourceScalarFieldEnum = makeEnum({
  id: 'id',
  postId: 'postId',
  type: 'type',
  url: 'url'
});

exports.Prisma.SourceScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  url: 'url',
  imageSrc: 'imageSrc'
});

exports.Prisma.PostViewScalarFieldEnum = makeEnum({
  id: 'id',
  viewedBy: 'viewedBy',
  viewedAt: 'viewedAt'
});

exports.Prisma.PostReactionScalarFieldEnum = makeEnum({
  id: 'id',
  reaction: 'reaction',
  reactedBy: 'reactedBy',
  viewedAt: 'viewedAt'
});

exports.Prisma.SessionScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  userId: 'userId',
  expirationDate: 'expirationDate'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});
exports.UserStatus = makeEnum({
  INVITED: 'INVITED',
  ACTIVE: 'ACTIVE',
  DELETED: 'DELETED',
  BLOCKED: 'BLOCKED'
});

exports.UserRole = makeEnum({
  ADMIN: 'ADMIN',
  USER: 'USER'
});

exports.PostReactionTypes = makeEnum({
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  Follower: 'Follower',
  Post: 'Post',
  VideoSource: 'VideoSource',
  Source: 'Source',
  PostView: 'PostView',
  PostReaction: 'PostReaction',
  Session: 'Session'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
