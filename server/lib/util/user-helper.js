"use strict";

const Chance = require("chance");
const chance = new Chance();

const md5 = require('md5');

module.exports = {

  generateRandomUser: () => {
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

    // code to use custom avatars from Ben Guidolin https://github.com/bguids91
    let textArray = [817764, 81779, 817753, 817754, 817757, 817763, 817768, 817747, 817769, 817792, 817774, 817787, 817750, 817781, 817765, 817766, 817789, 817751, 817771]

    var randomIndex = Math.floor(Math.random() * textArray.length);
    var randomElement = textArray[randomIndex];

    const avatarUrlPrefix = `https://image.flaticon.com/icons/svg/817/${randomElement}.svg`;
    const avatars = {
      small:   `${avatarUrlPrefix}`,
      regular: `${avatarUrlPrefix}`,
      large:   `${avatarUrlPrefix}`
    }

    return {
      name: userName,
      handle: userHandle,
      avatars: avatars
    };
  }
};
