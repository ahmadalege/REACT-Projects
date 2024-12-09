import { FaUserCircle } from "react-icons/fa";

interface UserCrdProps {
  index: number;
  person: string;
}

const UserCard = ({ index, person }: UserCrdProps) => {
  return (
    <div className="flex items-center justify-between">
      <section className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
        <span>{person.name}</span>
      </section>

      <button
        className={`border-2 py-1 px-4 rounded-full ${
          person.following
            ? "bg-gray-950 hover:bg-gray-700 text-white"
            : "bg-gray-200 hover:bg-gray-400"
        } `}
      >
        {person.following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
