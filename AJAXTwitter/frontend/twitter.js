const FollowToggle = require('./follow_toggle.js');

$(() => {
  $('.follow-toggle').each((function(i, el) {
    new FollowToggle($(el));

  })

  
);

});
