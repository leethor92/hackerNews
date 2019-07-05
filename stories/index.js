import React from 'react';
import { storiesOf } from '@storybook/react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import NewsForm from '../src/components/newsForm/';
import NewsItem from '../src/components/newsItem';
import NewsList from '../src/components/newsList';
import { action } from "@storybook/addon-actions";


const post = {
    id: 1 ,
    title : 'Post 1.',
    link : 'http://www.foo.bar',
    author : 'Joe Bloggs',
    comments : [],
    upvotes: 10
};

storiesOf('Hacker App/News List', module)
    .add('default', () => {
        const defaultPosts = [
            { ...post, id: 1, title: 'Post 1', upvotes: 10 },
            { ...post, id: 2, title: 'Post 2', upvotes: 20 },
            { ...post, id: 3, title: 'Post 3', upvotes: 30 },
            { ...post, id: 4, title: 'Post 4', upvotes: 40 }
        ];
        return <NewsList posts= { defaultPosts }  />
    });

storiesOf("Hacker App/News Form", module).add("default", () => (
    <NewsForm post={post} handleAdd={action('Add new post:')} />));

storiesOf("Hacker App/News Item", module)
    .add("default", () => <NewsItem post={post} upvoteHandler={action("upvoted")} /> )
    .add("No hyperlink", () => <NewsItem post={{ ...post, link: "" }} upvoteHandler={action("upvoted")}/>);