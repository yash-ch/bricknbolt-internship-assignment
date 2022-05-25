import {LeftOutlined} from '@ant-design/icons';
import "../css/header.css"
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";

toast.configure()

export default function Header() {
    return (
        <div>
            <LeftOutlined onClick={()=>{toast("Back Clicked")}} style={{fontSize: "16px", width: "fit-content", float: "left"}}/>
            <p id={"assignment"}>
                Assignment
            </p>
        </div>
    );
}