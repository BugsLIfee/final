import { observable , computed, action} from "mobx";
import UserApi from "../admin/api/UserApi";
import { getCurrentUser } from './api/APIUtils';
import { ACCESS_TOKEN } from './constants/index';

//import Alert from 'react-s-alert';
class OauthStore {

userApi = new UserApi();

@observable
authenticated=false ;
@observable
currentUser={};
@observable
loading=false ;
@observable
isAdmin=false ;

@observable
userList = []

@computed
get isLogin(){
    return this.authenticated? this.authenticated: undefined;
}
@computed
get isLoading(){
    return this.loading? this.loading: false;
}
@computed
get getCurrentUserInfo(){
    return this.currentUser? this.currentUser: {};
}
@computed
get getIsAdmin(){
    return this.isAdmin? this.isAdmin: false;
}


@action
async loadCurrentlyLoggedInUser() {
    this.loading= true;
    
    await getCurrentUser()
    .then(response => {
        // console.log("로그인 유저 잘받아오나요?", response);
        this.currentUser= response;
        this.authenticated=true;
        this.loading=false;
        if(response.role==="ADMIN"){
            this.isAdmin=true;
        }
    }).catch(error => {
        this.loading=false;
    });    
    
}
    
  @action
  onLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    
    this.authenticated= false;
    this.currentUser= null;
    this.isAdmin = false;
 }

 @action
 async getUserList(){
    this.userList = await this.userApi.getUserList();
 }


}


export default OauthStore;