import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
import { Router } from "@angular/router"


@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {
  blogPosts: Array<BlogPost> = [];
  @Output() select = new EventEmitter()
  constructor(private route: Router, private postService: PostService) { }

  ngOnInit(): void {
     this.postService.getAllPosts().subscribe(data => {
       this.blogPosts = data
    });

  }

  rowClicked = (e, id) => {
    this.route.navigate(['admin/post/', id]);

  }

}
