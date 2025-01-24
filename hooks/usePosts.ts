import { graphqlClient } from '@/clients/api';
import { getAllPosts } from '@/graphql/query/post';
import { useQuery } from '@tanstack/react-query';


export type Author = {id: string, firstName: string, lastName: string, profileImageUrl: string}
export type Post = {id: string, content: string, imageId: string, imageUrl: string, author: Author};

const usePosts = () => {
    const query = useQuery({
        queryKey: ["posts"],
        queryFn: async () => graphqlClient.request(getAllPosts)
    });
    
     return { query, posts: query.data?.getPosts as Post[] }
}

export default usePosts