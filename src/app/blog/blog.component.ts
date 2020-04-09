import { Component, OnInit, OnDestroy } from '@angular/core';
//import blogData from '../blogData.json';
import { BlogPost } from '../BlogPost';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy{
  blogPosts: Array<BlogPost>;
  page = 1;
  tag: string = null;
  category :string = null;
  querySub;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.querySub = this.route.queryParams.subscribe(params => {
      if(params['tag']){ 
        this.tag = params['tag'];
        
        this.category = null;
      }else{
        this.tag= null;
      }
      if(params['category']){
        this.category = params['category'];
        this.tag = null;
      }else{
        this.category = null;
      }
      this.getPage(+params['page'] || 1);
      
    });
  }

  getPage(num){
   
    this.postService.getPosts(num, this.tag, this.category).subscribe(data => {
      if(data.length > 0){
        this.blogPosts = data;
        this.page = num;
      }
    });
  
    
  }

  ngOnDestroy(){
    if(this.querySub) this.querySub.unsubscribe();
  }

}
