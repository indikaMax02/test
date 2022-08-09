import Cookie from 'js-cookie'
const SetCookie=(cookieName,token) =>{
    Cookie.set(cookieName,token,{
        expires : 1, //1 day
        secure : true,
        sameSite : 'strict',
        path : '/'
    });
}
export default SetCookie;