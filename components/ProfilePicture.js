import Image from "next/image";
import rahulImg from "../public/images/rahul.jpg";

export const ProfilePicture = () => {
  return (
    <div className="flex-shrink-0 mt-12 lg:px-4 lg:mt-0 flex items-center p-10">
      <div className="bg-sHover flex items-center p-2 rounded-full">
        <Image
          src={rahulImg}
          alt="Profile"
          placeholder="blur"
          priority={true}
          className="rounded-full"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
