import Image from "next/image";
import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="bg-amber-300 h-full p-4 rounded-xl px-4">
      <div className="flex justify-center items-center pt-4 pb-2">
        <Image
          src="/S__45015044.jpg"
          width={500}
          height={500}
          alt="profile picture"
          className="w-3/4 aspect-square rounded-full border-4 border-white"
        />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Thiraphat Phetsri</h1>
        <p className="text-base">Computer Engineer</p>
      </div>

      <div className="py-10 text-center ">" It does not matter how slowly you go as long as you do not stop "</div>
      <div className="p-6 mx-1 xl:mx-6 bg-amber-200 rounded-md">
        <p>
          <b>Age:</b> 20
        </p>
        <p>
          <b>Status:</b> Single
        </p>
        <p>
          <b>Location:</b> Bangkok
        </p>
      </div>
    </div>
  );
};

export default Profile;