import { FileDetailsResponse } from '@/components/FeedCard';
import { imagekit } from '@/services/imagekit';
import { useQuery } from '@tanstack/react-query';

const useFileDetails = (fileId: string) => {
    const query = useQuery({
        queryKey: [fileId],
        queryFn: async () => {
            const fileDetails = await imagekit.getFileDetails(fileId);
            return fileDetails;
        }
    });
    
     return { query, fileData: query.data as FileDetailsResponse}
}

export default useFileDetails;