import ImageKit from "imagekit"
console.log(process.env.NEXT_PUBLIC_PUBLIC_KEY!,
 process.env.PRIVATE_KEY!,
  process.env.NEXT_PUBLIC_URL_ENDPOINT!,);

export const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.NEXT_PUBLIC_PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});