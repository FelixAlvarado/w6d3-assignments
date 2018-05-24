const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor($el) {
    this.el = $el;
    this.userId = $el.data('user-id');
    this.followState = $el.data('initial-follow-state');
    this.render();
    this.handleClick();
  }

  render() {

    if (this.followState) {
      this.el.html("UNFOLLOW!");
    } else {
      this.el.html("FOLLOW!");
    }



  }

  handleClick() {
    this.el.on('click', (event) => {
    event.preventDefault();
    let method;
    const that = this;

    if (this.followState) {
      APIUtil.unfollowUser(this.userId).then(() => {
        that.followState = !that.followState;
        that.render();
      },
      () => {
        console.log('failed ajax!');
      });
    } else {
      APIUtil.followUser(this.userId).then(() => {

        that.followState = !that.followState;
        that.render();
      },
      () => {
        console.log('failed ajax!');
      });
    }
    // const that = this;
    // $.ajax({
    //   type: method,
    //   url: `/users/${this.userId}/follow`,
    //   dataType: 'json',
    //   success (){
    //     if (that.followState){
    //       that.followState = false;
    //     } else {
    //       that.followState = true;
    //     }
    //     that.render();
    //   } ,
    //   error(){
    //     console.log('failed ajax!');
    //   } ,
    // });
  });
  }

}


module.exports = FollowToggle;
