import { graphqlClient } from '@/clients/api';
import { getAllPosts } from '@/graphql/query/post';
import { useQuery } from '@tanstack/react-query';


export type Author = {id: string, firstName: string, lastName: string | null, profileImageUrl: string | null}
export type Post = {id: string, content: string | null, imageId: string | null, imageUrl: string | null, author: Author};

const usePosts = () => {
    const query = useQuery({
        queryKey: ["posts"],
        queryFn: async () => graphqlClient.request(getAllPosts)
    });
    
     return { query, posts: query.data?.getPosts as Post[] }
}

export default usePosts