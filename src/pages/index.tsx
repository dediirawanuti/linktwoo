import { NextSeo } from 'next-seo';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Dedi Irawan | Linktwoo"
        description="Add a description for your Linktree here."
        openGraph={{
          title: 'Dedi Irawan | Linktwoo',
          description: 'Add a description for your Linktree here.',
          images: [
            {
              url: '/vercel.svg',
              width: 1200,
              height: 630,
              alt: 'Linktwoo',
            },
          ],
          site_name: 'Dedi Irawan | Linktwoo',
        }}
      />
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100 ">
        <div className="bg-white rounded-lg shadow-md px-24 py-32">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="h-20 w-20 relative rounded-full overflow-hidden drop-shadow-lg">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src="/1648842147092.jpeg"
                alt="dedi irawan"
                width={500}
                height={500}
              />
            </div>
            <h1 className="text-xl font-bold m-4">Dedi Irawan - Web Developer</h1>
          </div>
          <div className="flex flex-col gap-4 text-gray-800 text-lg font-medium">
            <a href="https://twitter.com/dediakairawan" target="_blank" rel='noreferrer' className="flex gap-2 items-center justify-center bg-red-200 rounded-md drop-shadow-lg">
              <FaTwitter className="text-xl" /> Twitter
            </a>
            <a href="https://www.instagram.com/dediirwannn_/" target="_blank" rel='noreferrer' className="flex gap-2 items-center justify-center bg-red-200 rounded-md  drop-shadow-lg">
              <FaInstagram className="text-xl" /> Instagram
            </a>
            <a href="https://github.com/dediirawanuti" target="_blank" rel='noreferrer' className="flex gap-2 items-center justify-center bg-red-200 rounded-md drop-shadow-lg">
              <FaGithub className="text-xl" /> Github
            </a>
            <a href="https://www.linkedin.com/in/dediirawan024/" target="_blank" rel='noreferrer' className="flex gap-2 items-center justify-center bg-red-200 rounded-md drop-shadow-lg">
              <FaLinkedin className="text-xl" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="flex text-center text-sm m-2">
          Copyright © Dedi Irawan
        </div>
      </div>
    </>
  );
}
