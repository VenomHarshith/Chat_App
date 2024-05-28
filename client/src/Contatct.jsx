import Avatar from "./Avatar.jsx";

export default function Contact({id,username,onClick,selected,online}) {
  return (
    <div key={id} onClick={() => onClick(id)}
        className={"border-b border-cyan-100 flex items-center gap-2 cursor-pointer "+(selected ? 'bg-cyan-100' : '')}>
        {selected && (
            <div className="w-1 bg-blue-500 h-12 rounded-r-md"></div>
        )}
        <div className="flex justify-between items-center w-full">
            <div className="relative flex gap-2 py-2 pl-4 items-center">
                <Avatar username={username} userId={id} />
                <span className="text-gray-800">{username}</span>
            </div>
            <div className="relative flex items-center">
                {online && (
                    <div className="flex items-center mr-2">
                        <div className=" w-2 h-2 bg-green-400 mt-0.5 rounded-full border border-white"></div>
                        <div className="text-green-400 text-sm">Online</div>
                    </div>
                )}
                {!online && (
                    <div className="flex items-center mr-2">
                        <div className=" w-2 h-2 bg-gray-400 mt-0.5 rounded-full border border-white"></div>
                        <div className="text-gray-400 text-sm">Offline</div>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}