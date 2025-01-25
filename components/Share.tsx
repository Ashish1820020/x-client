"use client";
import React, { ChangeEvent, useState } from "react";
import Image from "./Common/Image";
import NextImageComponent from "next/image";
import { shareAction } from "@/app/actions";
import { ImCancelCircle } from "react-icons/im";
import ImageEditor from "./ImageEditor";
import { useCreatePost } from "@/hooks/useCreatePost";

type IPost = {
  text: string;
  media: File | null;
};

export type TSettings = {
  type: "original" | "wide" | "square";
  sensitive: boolean;
};

const Share = () => {
  const { mutate } = useCreatePost();
  const [post, setPost] = useState<IPost>({ text: "", media: null });
  const [uploading, setUploading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [editorOpen, setEditorOpen] = useState<boolean>(false);
  const [settings, setSettings] = useState<TSettings>({
    type: "original",
    sensitive: false,
  });

  

  const selectedImageUrl = post?.media ? URL.createObjectURL(post.media) : null;

  const handleSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPost((prevValue: IPost) => {
        if (prevValue) return { ...prevValue, media: e.target.files![0] };
        return { media: e.target.files![0], text: "" };
      });
    }
  };

  const handleRemoveImage = () => {
    setPost((prevState: IPost | null) => {
      return {
        text: prevState?.text ?? "",
        media: null,
      };
    });
  };

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPost((prev: IPost | null) => {
      if (prev) {
        return {
          ...prev,
          text: e.target.value
        }
      }
      return {
        media: null,
        text: e.target.value
      }
    })
  }

  const handleCreatePost = async (formData: FormData) => {
    try {
      setUploading(true);
      const {fileId, url} = await shareAction(formData, settings);

      if(url && fileId) {
        mutate({content: post?.text, imageId: fileId, imageUrl: url});
      }
      
    } catch (error) {
      setError(error);
    }
    finally{
      setUploading(false);
      setPost({text: "", media: null});
    }
  }
  return (
    <form
      className="flex gap-2 border-b-1 border-black p-4"
      action={handleCreatePost}
    >
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
          onChange={handleTextChange}
          className="w-[100%] outline-none bg-transparent placeholder:text-textGray text-xl"
          placeholder="What is happening?"
        />
        {post?.media?.type.includes("image") && selectedImageUrl && (
          <div className="relative my-2 rounded-xl overflow-hidden max-h-[600px]">
            <NextImageComponent
              src={selectedImageUrl}
              height={600}
              width={600}
              priority
              alt="selected-img"
            />
            <div
              onClick={() => setEditorOpen(true)}
              className="absolute cursor-pointer top-2 left-2 font-bold bg-textGray py-1 px-3 rounded-xxl"
            >
              Edit
            </div>
            <div
              onClick={handleRemoveImage}
              className="absolute text-lg cursor-pointer top-2 right-2 font-bold bg-textGray p- rounded-xxl"
            >
              <ImCancelCircle />
            </div>
          </div>
        )}

        {editorOpen && selectedImageUrl && (
          <ImageEditor
            onClose={() => setEditorOpen(false)}
            previewURL={selectedImageUrl}
            settings={settings}
            setSettings={setSettings}
          />
        )}



        {post?.media?.type.includes("video") && selectedImageUrl && (
          <div className="relative my-2 rounded-xl overflow-hidden">
          <video src={selectedImageUrl} controls className="w-[100%]"/>
          <div
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
            onClick={handleRemoveImage}
          >
            X
          </div>
        </div>
        )}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <input
              onChange={handleSelectFile}
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
            className={`rounded-full font-bold text-black px-4 py-2 ${
              (post?.media || post?.text) ? "bg-white" : " bg-textGray"
            }`}
            disabled={uploading || !(post?.media || post?.text)}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
