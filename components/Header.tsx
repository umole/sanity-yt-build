import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between bg-yellow-400">
        <div>
          <Link href='/'>
            <Image 
              src='/images/images.png'
              alt="Logo Image"
              height={10}
              width={400} 
            />
          </Link>
        </div>
        <div className="flex">
          <div className="flex">
            <Link href={'/'}>
              <p>Our Story</p>
            </Link>
            <Link href={'/'}>
              <p>Membership</p>
            </Link>
            <Link href={'/'}>
              <p>Write</p>
            </Link>
            <Link href={'/'}>
              <p>Sign in</p>
            </Link>
          </div>
          <div className="p-5 bg-black text-white rounded ">
            <Link href={'/'}>
              <p>Get Started</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;