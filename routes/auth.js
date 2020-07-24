var express = require('express');
var router = express.Router();

var passport = require('passport');
// https://www.npmjs.com/package/passport
var GitHubStrategy = require('passport-github').Strategy;//在passport基础上进行封装，有具体的的URL和跳转，不同的应用里面的URL，写法和规则不同
// https://www.npmjs.com/package/passport-github



// 为了保持sessions 登陆持久化，用户需要序列化这个session，并在后续发出请求时反序列化。Passport will maintain persistent login sessions. In order for persistent sessions to work, the authenticated user must be serialized to the session, and deserialized when subsequent requests are made.
// Passport对用户记录的存储方式没有任何限制。而是向Passport提供函数，该函数实现必要的序列化和反序列化逻辑。在典型的应用程序中，这很简单，只需序列化用户ID，然后在反序列化时按ID查找用户。
// https://www.npmjs.com/package/passport
// 下面两个代码是passport官网的原内容

passport.serializeUser(function(user, done) {//官网的序列化代码，意思就是用户登录的信息传递到passport之后，让它去生成一个session储存在内存里面。我们也可以设置存储到数据库里面
    // done(null, user.id);//以用户的id作为session的id并储存。
    console.log('---serializeUser---')
    console.log(user)
    done(null, user.id);
  });


passport.deserializeUser(function(id, done) {//官网的反序列化代码，用户刷新页面的时候，会从内存里面把对应的session拿出来解析后，就知道是某个用户。
    // User.findById(id, function (err, user) {//User是一个数据库，当用户刷新页面的时候去数据库里面通过id得到用户的信息，然后把它重新拿出来。
    //     console.log('---serializeUser---')
    //     console.log(user)
    //     done(null, user.id);
    // //   done(err, user);
    // });
    console.log('---deserializeUser---')//如果登陆后再次刷新页面还是可以得到这个id，这个是从服务端把session发送给用户，用户储存到cookie里面，并且浏览器以sessionId的形式存储到浏览器的cookie里面获取到的。再次请求的时候会带上这个存在cookie里面的sessionID，如果与服务器内存（也可以存到数据库里面）里面的cookie匹配那么就知道你是已经登陆的用户了，然后就可以展示该用户的相关信息，比如用户名及头像等
    console.log('id',id)
    done(null, id);
  });



passport.use(new GitHubStrategy({
    clientID: 'e89343001d0334689ed3',
    clientSecret: 'b51bac623a02bfa32d9a3a6a6938535af0e18f9f',
    callbackURL: "http://127.0.0.1:8080/auth/github/callback"//向github的登陆入口去发送请求，然后把前面的clientID和clientSecret传递过去，那么github就知道是哪个应用发的请求。github就会向请求方传送一个密钥，会调用这个callback回来
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    // });
    done(null, profile);
  }
));


router.get('/logout', function(req, res){
  req.session.destroy();
//   express-session依赖的[req.session.destroy](https://www.npmjs.com/package/express-session),销毁session并取消设置req.session属性
  res.redirect('/');
//   express框架的重定向[res.redirect](http://expressjs.com/en/5x/api.html#res.redirect),重定向可以是用于重定向到其他站点的标准URL
})

router.get('/github',
  passport.authenticate('github'));//这是登陆的入口，当点击auth/github的时候就会去调用passport.authenticate('github')，然后去认证这个github，这个过程是用户点击的

router.get('/github/callback',//当有回调函数回来之后，就会真正的得到这些用户信息，这个过程是github账号体系自己返回的的它发的这个请求。这个路由是回调地址，也就是便利贴网站需要接收的请求的地址。
  passport.authenticate('github', { failureRedirect: '/login' }),//失败的话会进入到登陆的路由
  function(req, res) {//成功会进入到这里，这是github服务器想便利贴后台发送的这些数据，存在req.user里面
    console.log('sucess....')
    console.log(req.user)
    req.session.user = {//成功后就给响应的session里面的user增加id,username,avatar,provider
      id: req.user.id,//这里的req.user的信息在前面的console.log(user)里面可以看到，用户id
      username: req.user.displayName || req.user.username,//用户名字
      avatar: req.user._json.avatar_url,//用户头像
      provider: req.user.provider//信息的提供方
    };
    res.redirect('/');
  });



module.exports = router;
