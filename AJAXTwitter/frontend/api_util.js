

const APIUtil = {

  followUser: id => {
    $.ajax({
      type: 'POST',
      url: `/users/${id}/follow`,
      dataType: 'json',
      success (){
         console.log('just worked!!');
      },
      error(){
         console.log('failed ajax!');
      } ,
    });
  },
  unfollowUser: id => {
    $.ajax({
      type: 'DELETE',
      url: `/users/${id}/follow`,
      dataType: 'json',
      success (){
         console.log('just worked!!');
      },
      error(){
       console.log('failed ajax!');
      } ,
    });
  },
};

module.exports = APIUtil;
