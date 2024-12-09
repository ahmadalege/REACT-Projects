import UserCard from "./UserCard";

const peopleToFollow = [
  { name: "SlaughterHouse👿", following: false },
  { name: "Sulyman Khalid", following: true },
  { name: "Tunde Ednut", following: false },
  { name: "Davido Adeleke", following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-3 mg-4">People to follow</h3>
      <div className="space-y-4">
        {peopleToFollow.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;
