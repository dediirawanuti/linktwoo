import Image from 'next/image'
import logo from '/public/1688224876902.png'
import 'animate.css';

export default function Home() {
  return (
    <div>
      <Image
      className='rounded-full hover:-rotate-12 hover:color-[#313538] hover:border-2 animate__animated animate__fadeIn'
        src={logo}
        width={225}
        height={225}
        loading='lazy'
        alt='dedi irawan'
      />
    </div>
  );
}