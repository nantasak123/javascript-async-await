// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
// Start coding here
async function userProfile() {
  try{
    const userInfomation = await getJohnProfile()
    console.log(userInfomation)
  }
  catch(error){
    let userInfomation2 = await getJohnProfile()
    console.log(userInfomation2)
  }
}
userProfile()