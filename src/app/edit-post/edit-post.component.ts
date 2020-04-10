import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router"
import { BlogPost } from '../BlogPost';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private route: Router, private postService: PostService, private activateRoute: ActivatedRoute) { }

  blogPosts: BlogPost;
  tags: String;

  ngOnInit(): void {
    
    let id = this.activateRoute.snapshot.params['id'];
    
    
    this.postService.getPostbyId(id).subscribe(data =>
    {
    this.blogPosts = data
  
   
    this.tags = this.blogPosts.tags.toString()
    
  } );
    
  }

  formSubmit(f : NgForm){
    
    
      this.blogPosts.tags = this.tags.split(",").map(tag => tag.trim()); 
    
    
    
    this.postService.updatePostById(this.blogPosts._id, this.blogPosts).subscribe(data =>{
       
      this.blogPosts = data
      
    
      this.route.navigate(['admin']);
    });
   
  }

  deltePost(){
    this.postService.deletePostById(this.blogPosts._id).subscribe(data =>{
  
      this.blogPosts = data
      this.route.navigate(['admin']);
    })
  
  }

}
