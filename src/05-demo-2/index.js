// index.js
var $ = require('jquery');
var template = require('./albums.hbs');

$('body').append(template({
  albums: [
    { artFile: 'albums/SubFocus-SubFocus.jpg' },
    { artFile: 'albums/Draper-Inertia.jpg' },
    { artFile: 'albums/Protostar-Genesis.jpg' },
    { artFile: 'albums/Birdy-Nam-Nam-Defiant-Art.jpg' },
    { artFile: 'albums/Bassnectar-Empathy.jpg' },
    { artFile: 'albums/Bassnectar-Timestretch.jpg' },
    { artFile: 'albums/Simian-Mobile-Disco-Wooden.jpg' },
    { artFile: 'albums/Madeon-You\'re-On.jpg' },
    { artFile: 'albums/Madeon-Finale.jpg' },
    { artFile: 'albums/Savoy-DIY.jpg' },
    { artFile: 'albums/She-Come-See-Me.jpg' },
    { artFile: 'albums/Porter-Robinson-Divinity.jpg' },
  ],
}));

require('./spin-on-hover');
