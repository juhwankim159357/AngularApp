import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';
import { Comment } from '../Comment';
import { NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  querySub :any;
  post: BlogPost;
  commentName: string;
  commentText: string;
//@Input() post:BlogPost
  constructor(private route: ActivatedRoute, private PostDataService: PostService) { }

  ngOnInit(): void {

    this.querySub = this.route.params.subscribe(params =>{
      //TODO: Get post by Id params['id'] and store the result in this.post
      if(params['id']){ 
        this.PostDataService.getPostbyId(params['id']).subscribe(data => {
          this.post = data
          this.post.views++
          this.PostDataService.updatePostById(this.post._id, this.post).subscribe();
        });
        
        
      }

      
     
      
    
    })

  }

  submitComment(f : NgForm){
    let test = new Comment();
    test.author = this.commentName;
    test.comment = this.commentText;
    test.date = new Date().toLocaleDateString();
    
    console.log(test);
    this.post.comments.push(test);
   
    this.PostDataService.updatePostById(this.post._id,this.post).subscribe(data => this.post = data);
    this.commentName = "";
    this.commentText = "";

  }

  ngOnDestroy() {
    if(this.querySub) this.querySub.unsubscribe();
  }
}
