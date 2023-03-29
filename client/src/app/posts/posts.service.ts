import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    {
      title: 'My First Post',
      author: {
        name: 'John Smith',
        avatarUrl: 'https://i.pravatar.cc/150?img=1',
      },
      date: new Date('2022-03-28T18:45:00'),
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu diam id diam tincidunt auctor at et leo. Sed in suscipit enim. Nam sed libero blandit, lobortis libero eget, elementum arcu. Sed vulputate sapien a elit laoreet, nec placerat ex faucibus. Suspendisse potenti.',
    },
    {
      title: 'My Second Post',
      author: {
        name: 'John Smith',
        avatarUrl: 'https://i.pravatar.cc/150?img=1',
      },
      date: new Date('2022-03-28T18:45:00'),
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu diam id diam tincidunt auctor at et leo. Sed in suscipit enim. Nam sed libero blandit, lobortis libero eget, elementum arcu. Sed vulputate sapien a elit laoreet, nec placerat ex faucibus. Suspendisse potenti.',
    },
    {
      title: 'My Third Post',
      author: {
        name: 'John Smith',
        avatarUrl: 'https://i.pravatar.cc/150?img=1',
      },
      date: new Date('2022-03-28T18:45:00'),
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu diam id diam tincidunt auctor at et leo. Sed in suscipit enim. Nam sed libero blandit, lobortis libero eget, elementum arcu. Sed vulputate sapien a elit laoreet, nec placerat ex faucibus. Suspendisse potenti.',
    },
  ];

  public getPosts() {
    return this.posts;
  }

}