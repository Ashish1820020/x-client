import React from 'react'
import FeedCard from './FeedCard'
import { Author } from '@/hooks/usePosts';

type TPosts = {
    content: string | null;
    id: string
    imageId?: string | null;
    imageUrl?: string | null;
}

const Posts = ({posts, author}:{posts: TPosts [], author: Author}) => {
  return (
    <>
    {
        posts.map(({id, content, imageId, imageUrl}) => (
            <FeedCard key={id} id={id} content={content} imageId={imageId ?? null} imageUrl={imageUrl ?? null} author={author} />
        )
    )
    }
    </>
  )
}

export default Posts