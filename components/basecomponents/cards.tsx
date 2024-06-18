const stars = [0, 0, 0, 0, 0];

interface StarProps {
  flag: boolean;
}

const Star: React.FC<StarProps> = ({ flag }) => {
  return (
    <span>
      <svg
        className="text-orange-400"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          fill={`${flag ? "currentColor" : "none"}`}
          d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"
        />
      </svg>
    </span>
  );
};

interface TransformingCardProps {
  star: number;
  text: string;
  name: string;
}

const TransformingCard: React.FC<TransformingCardProps> = ({
  star,
  text,
  name,
}) => {
  return (
    <div className="flex flex-col justify-between w-full h-auto gap-5 p-5 bg-white border border-slate-300 rounded-lg">
      <div className="flex gap-2">
        {stars.map((s: any, index: number) => (
          <Star key={index} flag={index < star ? true : false} />
        ))}
      </div>
      <p className="text-slate-400">{text}</p>
      <p className="font-semibold text-gray-700">{name}</p>
    </div>
  );
};

interface OtherSchoolsCardProps {
  mark: any;
  title: string;
  star: number;
  position: string;
  at: string;
  secure: any;
}

const OtherSchoolsCard: React.FC<OtherSchoolsCardProps> = ({
  mark,
  title,
  star,
  position,
  at,
  secure,
}) => {
  return (
    <div className="flex flex-col p-5 bg-white rounded-lg justify-between gap-5">
      <div className="flex gap-2 items-center">
        <img
          src={mark}
          alt=""
          width={70}
          height={70}
          className="w-12 h-12 rounded-full"
        />
        <p className="text-based font-semibold">{title}</p>
      </div>
      <div className="flex gap-2">
        {stars.map((s: any, index: number) => (
          <Star key={index} flag={index < star ? true : false} />
        ))}
        <span>{star}</span>
      </div>
      <div className="flex flex-col gap-2">
        <p>{position}</p>
        <p>{at}</p>
      </div>
      <p>{secure}</p>
    </div>
  );
};

interface LatestArticleCardProps {
  img: any;
  title: string;
  text: string;
}

const LatestArticleCard: React.FC<LatestArticleCardProps> = ({
  img,
  title,
  text,
}) => {
  return (
    <div className="flex flex-col gap-5 rounded-lg bg-white p-5">
      <img src={img} className="w-full" alt="" />
      <p className="text-lg font-semibold">{title}</p>
      <p>{text}</p>
    </div>
  );
};

interface PrivateSchoolCardProps {
  mark: any;
  title: string;
  star: number;
  at: string;
  position: string;
  scholarUnit: string;
  amount: number; 
}

const PrivateSchoolCard: React.FC<PrivateSchoolCardProps> = ({
  mark,
  title,
  star,
  at,
  position,
  scholarUnit,
  amount,
}) => {
  return (
    <div className="flex flex-col p-5 bg-white rounded-lg justify-between gap-5">
      <div className="flex justify-center items-center">
        <img
          src={mark}
          alt=""
          width={70}
          height={70}
          className="w-12 h-12 rounded-full"
        />
        <p className="text-based font-semibold text-gray-700">{title}</p>
      </div>
      <div className="flex gap-2">
        {stars.map((s: any, index: number) => (
          <Star key={index} flag={index < star ? true : false} />
        ))}
        <span>{star}</span>
      </div>
      <div className="flex flex-col gap-2 text-gray-400">
        <p>{position}</p>
        <p>{at}</p>
      </div><hr className="p-2"/>
      <div className="flex space-y-0 flex-col">
        <p className="pb-0 text-gray-400">sholarships form:</p>
        <p className="pt-0 font-semibold text-gray-700">{scholarUnit} {amount}</p>
      </div>
    </div>
  )
}

export { TransformingCard, OtherSchoolsCard, LatestArticleCard, PrivateSchoolCard };
