 const findAndSaveUser = async (Users) => {
  try {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save(); // user.save가 될 때 까지 대기
    user = await Users.findOne({gender:'m'});
  } catch (error) { // 에러를 try catch문으로 한번에 잡기
    console.log(error);
  }
};