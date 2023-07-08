function canOpenChat(user) {
    if (user.isFriend && user.isOnline && !user.isBusy) {
       console.log(true);
    } else {
       console.log(false);
    }
  }
  
  // Управление (вкл=true)(выкл=false)
  const user = {
    isFriend: true,
    isOnline: true,
    isBusy: false
  };
  
  const canOpen = canOpenChat(user);
  console.log(canOpen);