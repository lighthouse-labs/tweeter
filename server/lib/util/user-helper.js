"use strict";

const Chance = require("chance");
const chance = new Chance();

const md5 = require('md5');



const generateRandomUser = () => {
  const gender    = chance.gender();
  const firstName = chance.first({gender: gender});
  const lastName  = chance.last();
  const userName  = firstName + " " + lastName;

  let userHandle = "@";
  if (Math.random() > 0.5) {
    let prefix    = chance.prefix({gender: gender});
    prefix = prefix.replace(".", "");
    userHandle += prefix
  }

  userHandle += lastName;

  if (Math.random() > 0.5) {
    const suffix = Math.round(Math.random() * 100);
    userHandle += suffix;
  }

  const avatarUrlPrefix = `https://vanillicon.com/${md5(userHandle)}`;
  const avatars = {
    small:   `${avatarUrlPrefix}_50.png`,
    regular: `${avatarUrlPrefix}.png`,
    large:   `${avatarUrlPrefix}_200.png`
  }

  return {
    name: userName,
    handle: userHandle,
    avatars: avatars
  };
}

module.exports = {

  createUser(formObj) {
    return {
      name: formObj.name,
      handle: formObj.handle,
      password: formObj.password,
      avatars: generateRandomUser().avatars
    }
  },

  // my funcs
  generateRandomString: function () {
    return Math.floor((1 + Math.random()) * 0x100000).toString(16);
  },

  generateUniqueKey: function (obj) {
    let key;
    do {
      key = generateRandomString();
    } while(obj[key]);
    return key;
  },

  logVisit: function (req, shortObj) {
    let id = req.session.visitor_id;
    shortObj.totalVisits += 1;
    if(!shortObj.visits[id]) {
      let visitor_id = "v-" + generateUniqueKey(shortObj.visits);
      req.session.visitor_id = visitor_id;
      shortObj.visits[visitor_id] = [(new Date()).toUTCString()];
      shortObj.totalVisitors += 1;
    } else {
      shortObj.visits[id].push((new Date()).toUTCString());
    }
  }
};

module.exports.generateRandomUser = generateRandomUser
