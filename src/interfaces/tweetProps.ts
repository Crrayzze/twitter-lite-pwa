export interface TweetProps {
  date: string;
  text: string;
  author: string;
  localization: string;
  likes: number;
  authorImage: string;
}

export const tweetPropsSample: TweetProps = {
  date: "2020-01-01",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl ultricies nisl, nec ultricies nunc nisl euismod nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl ultricies nisl, nec ultricies nunc nisl euismod nisl.",
  author: "John Doe",
  localization: "London, UK",
  likes: 100,
  authorImage: "https://media.idownloadblog.com/wp-content/uploads/2017/03/Twitter-new-2017-avatar-001.png"
}