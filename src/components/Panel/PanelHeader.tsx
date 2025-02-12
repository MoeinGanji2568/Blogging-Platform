import { Link } from "react-router-dom";
import ButtonIcon from "../ui/ButtonIcon";
import Avatar from "../ui/Avatar";
import { useAuth } from "../../contexts/auth/auth.provider";

function PanelHeader() {
  const { user } = useAuth();
  return (
    <header className={`bg-secondary-0 `}>
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <div className="flex items-center gap-x-3">
          <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-x-2">
            <span className="text-sm lg:text-lg font-bold text-secondary-700">
              سلام؛ {user?.name}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <Link to="/profile">
            <ButtonIcon
              variant="outlined"
              className={`border-secondaray-200 rounded-2xl flex cursor-pointer items-center`}
            >
              <Avatar src={user?.avatarUrl} />
            </ButtonIcon>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default PanelHeader;
