import { Injectable } from '@angular/core';
import { BlogPost } from './BlogPost';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const perPage = 6;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(page, tag, category): Observable<BlogPost[]>{
    let url = ``;
    
    if(tag != null){
      
      url = `https://stormy-depths-92429.herokuapp.com/api/posts?page=${page}&perPage=${perPage}&tag=${tag}`;
      
      
    } else if( category != null ){
      url = `https://stormy-depths-92429.herokuapp.com/api/posts?page=${page}&perPage=${perPage}&category=${category}`;
      
    } else {    
    
    url = `https://stormy-depths-92429.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`;
    
    }
    return  this.http.get<BlogPost[]>(url);
   
  }

  getPostbyId(id): Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://stormy-depths-92429.herokuapp.com/api/posts/${id}`);
  }

  getCategories(): Observable<any>{
    return this.http.get<any>(`https://stormy-depths-92429.herokuapp.com/api/categories`);
  }

  getTags(): Observable<string[]>{
    return this.http.get<string[]>(`https://stormy-depths-92429.herokuapp.com/api/Tags`);
  }

  getAllPosts(): Observable<BlogPost[]>{
    const x = Number.MAX_SAFE_INTEGER
    return this.http.get<BlogPost[]>(`https://stormy-depths-92429.herokuapp.com/api/posts?page=1&perPage=${x}`);
  }
  newPost(data: BlogPost): Observable<any>{
    return this.http.post<any>(`https://stormy-depths-92429.herokuapp.com/api/posts`, data);
  }
  updatePostById(id: string, data: BlogPost): Observable<any>{
    return this.http.put<any>(`https://stormy-depths-92429.herokuapp.com/api/posts/${id}`, data);
  }
  deletePostById(id: string): Observable<any>{
    return this.http.delete<any>(`https://stormy-depths-92429.herokuapp.com/api/posts/${id}`);
  }
  
  

}
