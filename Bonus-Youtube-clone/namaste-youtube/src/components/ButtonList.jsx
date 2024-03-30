import { buttonList } from "../utils/constants"
import Button from "./Button"

const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll no-scrollbar">
      {buttonList.map(e => <Button key={e} name={e}/>)}
    </div>
  )
}
export default ButtonList