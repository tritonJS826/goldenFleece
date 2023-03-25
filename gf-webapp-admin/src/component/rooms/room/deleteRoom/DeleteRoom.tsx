import {Button} from "gf-ui-lib/components/Button/Button";
import {useNavigate} from "react-router-dom";
import {deleteRoom} from "src/service/RoomService";

interface DeleteRoomProps {
  id: string;
}

export const DeleteRoom = (props: DeleteRoomProps) => {
  const navigate = useNavigate();

  const onDeleteRoom = async () => {
    await deleteRoom(props.id);
    navigate("/rooms");
  };

  return (
    <Button
      type="button"
      value="Delete room"
      onClick={onDeleteRoom}
    />
  );
};