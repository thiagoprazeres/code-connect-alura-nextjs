import Image from "next/image";

export const Avatar = ({ name, imageSrc }) => {
  return (
    <figure>
      <figcaption className="flex items-center gap-2">
        <Image
          src={imageSrc}
          alt={name}
          width={1160}
          height={1160}
          className="h-8 w-8"
        />
        <p>
          <small>@{name}</small>
        </p>
      </figcaption>
    </figure>
  );
};
