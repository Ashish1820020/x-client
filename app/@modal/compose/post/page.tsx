import Image from '@/components/Common/Image';
import NextImageComponent from 'next/image';
import React from 'react'

const PostModal = () => {
  return (
    <div className='absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center'>
        <div className="">
            <div className="">x</div>
            <div className="">Drafts</div>
        </div>
        <div className="feed-card-avatar relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          path="/Profile Images/ashish.png"
          h={100}
          w={100}
          alt="avatar"
          transform={true}
        />
      </div>

      <div className="flex flex-col flex-1">
        <input
          name="desc"
          type="text"
        //   onChange={handleTextChange}
          className="w-[100%] outline-none bg-transparent placeholder:text-textGray text-xl"
          placeholder="What is happening?"
        />
        {/* {post?.media?.type.includes("image") && selectedImageUrl && (
          <div className="relative my-2 rounded-xl overflow-hidden max-h-[600px]">
            <NextImageComponent
              src={selectedImageUrl}
              height={600}
              width={600}
              priority
              alt="selected-img"
            />
            <div
            //   onClick={() => setEditorOpen(true)}
              className="absolute cursor-pointer top-2 left-2 font-bold bg-textGray py-1 px-3 rounded-xxl"
            >
              Edit
            </div>
            <div
            //   onClick={handleRemoveImage}
              className="absolute text-lg cursor-pointer top-2 right-2 font-bold bg-textGray p- rounded-xxl"
            >
              x
            </div>
          </div>
        )} */}

        {/* {editorOpen && selectedImageUrl && (
          <ImageEditor
            onClose={() => setEditorOpen(false)}
            previewURL={selectedImageUrl}
            settings={settings}
            setSettings={setSettings}
          />
        )} */}



        {/* {post?.media?.type.includes("video") && selectedImageUrl && (
          <div className="relative my-2 rounded-xl overflow-hidden">
          <video src={selectedImageUrl} controls className="w-[100%]"/>
          <div
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
            onClick={handleRemoveImage}
          >
            X
          </div>
        </div>
        )} */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <input
            //   onChange={handleSelectFile}
              type="file"
              name="file"
              className="hidden"
              id="file"
              accept="image/*,video/*"
            />
            <label htmlFor="file">
              <Image
                path="icons/image.svg"
                h={20}
                w={20}
                alt="image-icon"
                className="cursor-pointer"
              />
            </label>
            <Image
              path="icons/gif.svg"
              h={20}
              w={20}
              alt="gif-icon"
              className="cursor-pointer"
            />
            <Image
              path="icons/poll.svg"
              h={20}
              w={20}
              alt="poll-icon"
              className="cursor-pointer"
            />
            <Image
              path="icons/emoji.svg"
              h={20}
              w={20}
              alt="emoji-icon"
              className="cursor-pointer"
            />
            <Image
              path="icons/schedule.svg"
              h={20}
              w={20}
              alt="schedule-icon"
              className="cursor-pointer"
            />
            <Image
              path="icons/location.svg"
              h={20}
              w={20}
              alt="location-icon"
              className="cursor-pointer"
            />
          </div>
          <button
            type="submit"
            // className={`rounded-full font-bold text-black px-4 py-2 ${
            //   (post?.media || post?.text) ? "bg-white" : " bg-textGray"
            // }`}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostModal;