$.ajax({
  type: method,
  url: `/users/${this.userId}/follow`,
  dataType: 'json',
  success (){
    if (that.followState){
      that.followState = false;
    } else {
      that.followState = true;
    }
    that.render();
  } ,
  error(){
    console.log('failed ajax!');
  } ,
});
