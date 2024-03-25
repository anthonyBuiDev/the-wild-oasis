import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogout } from "./useLogout";
function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <ButtonIcon onClick={logout} disabled={isPending}>
      {!isPending ? (
        <HiArrowRightOnRectangle />
      ) : (
        <SpinnerMini />
      )}
    </ButtonIcon>
  );
}

export default Logout;
