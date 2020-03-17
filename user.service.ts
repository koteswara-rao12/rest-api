import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {User} from './user';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  PHP_API_SERVER = 'http://localhost';
  

  constructor( private http: HttpClient,private router:Router) { 
  }
  getdata() {
    
    const url = "http://localhost:3000"; // site that doesn’t send Access-Control-*
   
    
    return this.http.get<User[]>(url+'/user');
  }
  getId(id: number) {
    return this.http.get<User[]>('http://localhost:3000/user/' + id);
  }
add(user:User){

    const url = "http://localhost:3000"; // site that doesn’t send Access-Control-*
    
   console.log("this is service");
   return this.http.post<User>(url+'/user/id',user);
  


}
update1(user:User,id: number){

  const url = "http://localhost:3000"; // site that doesn’t send Access-Control-*
  let headers = new HttpHeaders();
     headers.append('Content-Type' , 'application/json');
 console.log("this is service");
 console.log(id);
 return this.http.put<User>(url+'/user/' + id,user, {headers: headers});



}

deleteuser(id: number) {
  const config = {
   
  };



  const url = "http://localhost:3000"; 
  
  return this.http.delete(url+'/remove/' + id, {headers: {
    'Access-Control-Request-Origin' : '*',
    'Access-Control-Request-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Request-Headers': 'Origin,X-Requested-With,content-type'} });

  // return this.http.delete<Emp[]>('http://localhost/crud/delete.php?id=' + id, config);
}


}
