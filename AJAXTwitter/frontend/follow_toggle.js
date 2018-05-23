class FollowToggle {
  constructor($el) {
    this.el = $el;
    this.userId = $el.data('user-id');
    this.followState = $el.data('initial-follow-state');
    this.render();
    this.handleClick();
  }

  render() {

    console.log(this.el);
    if (this.followState) {
      this.el.html("UNFOLLOW!");
    } else {
      this.el.html("FOLLOW!");
    }
    console.log(this.el.innerHTML);
  }

  handleClick() {
    this.el.on('click', (event) => {
    event.preventDefault();
    let method;
    if (this.followState) {
      method = 'DELETE';
    }else {
      method = 'POST';

    }
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
