import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';
@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {
  posts: Array<any> = [];
  constructor(public PostService: PostService) { }

  ngOnInit(): void {
    
    this.PostService.getPosts(1,null,null).subscribe(data => this.posts = data.slice(0,3));
    
  }

}
