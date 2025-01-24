import { graphqlClient } from "@/clients/api";
import { CreatePost } from "@/gql/graphql";
import { createNewPost } from "@/graphql/mutation/post";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const useCreatePost = () => {
    const query = useQueryClient();

    const mutation = useMutation({
        mutationFn:  (payload: CreatePost) => graphqlClient.request(createNewPost, { payload }),
        onSuccess: () => query.invalidateQueries({queryKey: ["posts"]})
    });
    
    return mutation;
}