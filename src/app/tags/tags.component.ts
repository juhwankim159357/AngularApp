import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: Array<string> =[];
  constructor(public tagService: PostService) { }

  ngOnInit(): void {
    this.tagService.getTags().subscribe(data => this.tags = data);
  }

}
