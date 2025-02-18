import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const onBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="h-screen w-screen bg-black flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="inline-flex gap-3">
          <button className="h-8 w-8" onClick={onBackClick}>
            <ChevronLeftIcon className="inline text-center text-white" />
          </button>
          <h1 className="leading-8 text-3xl  text-slate-100 font-bold">
            details
          </h1>
        </div>

        <div className="p-4 bg-zinc-800 rounded-xl">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}
