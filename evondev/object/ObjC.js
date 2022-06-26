// Object constructor

function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
  
    this.getName = function(){
        return `${this.firstName} + ${this.lastName}`
    }
  }
  var author = new User('Huynh', 'loi', 'avatar');
  var user = new User('anh', 'yeu', 'em');
  
  author.title = 'Anh co yeu em khong';
  user.cmt = 'em yeu anh nhieu lam';
  
  console.log(author.getName());
  console.log(user.getName());