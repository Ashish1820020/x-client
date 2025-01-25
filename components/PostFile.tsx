import React from 'react'
import Video from './Common/Video'
import useFileDetails from '@/hooks/useFileDetails';
import Image from './Common/Image';

const PostFile = ({imageId}: {imageId: string}) => {
    const { fileData: fileDetails } = useFileDetails(imageId);
    
  return (
    <>
        {
            fileDetails && (
              fileDetails.fileType === "image"?
              <Image
                path={fileDetails.filePath}
                alt=""
                h={fileDetails.height}
                w={fileDetails.width}
                className={fileDetails.customMetadata?.sensitive ? "blur-lg cursor-pointer rounded-lg" : "cursor-pointer rounded-lg"}
              />
              :
              <Video
              path={fileDetails.filePath} 
              className={fileDetails.customMetadata?.sensitive ? "blur-lg cursor-pointer rounded-lg" : "cursor-pointer rounded-lg"}
              />


            )
          }
    </>
  )
}

export default PostFile