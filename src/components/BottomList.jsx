import "../css/BottomList.css"
import Grid from '@mui/material/Grid';
import {HeartFilled, HeartOutlined, RightOutlined} from "@ant-design/icons";
import {useState} from "react";
import {Box} from "@mui/material";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";

toast.configure()

const eatingCategoryItemsList = [
    "Ice Cream",
    "Snacks", "Coffee", "Sweet Cake"
]

// let eatingItems = [{image: "ice1.png", name: "Ice Cream Yellow", sPrice: "10.99", price: "5.99", heart: false},
//     {image: "ice3.png", name: "Ice Cream Pink", sPrice: "12.99", price: "6.99", heart: false},
//     {image: "ice2.png", name: "Ice Cream Blue", sPrice: "8.99", price: "4.99", heart: false},];

export default function BottomList() {

    const [eatingCategorySelected, setEatingCategorySelected] = useState("Ice Cream");
    const [eatingItems, setEatingItems] = useState([{id:1,image: "ice1.png", name: "Ice Cream Yellow", sPrice: "10.99", price: "5.99", heart: false},
        {id:2,image: "ice3.png", name: "Ice Cream Pink", sPrice: "12.99", price: "6.99", heart: false},
        {id:3,image: "ice2.png", name: "Ice Cream Blue", sPrice: "8.99", price: "4.99", heart: false}]);

    const eatingCategoryClicked = (value) => {
        setEatingCategorySelected(value);
        shuffleArray(eatingItems);
    };

    const updatingHearts = (id) => {

        const newList = eatingItems.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    heart: !item.heart,
                };
            }

            return item;
        });

        setEatingItems(newList)
    };
    return (
        <div>
            <div id={"check-the-reward-div"} onClick={()=>{toast("Clicked")}}>
                <Grid container>
                    <Grid item xs={11}>
                        <p id={"check-the-reward-p"}>
                            Check the reward in this resto
                        </p>
                        <p id={"reward-p"}>
                            16 Reward
                        </p>
                    </Grid>
                    <Grid item xs={1}>
                        <div className="outer">
                            <div className="middle">
                                <div className="inner">
                                    <RightOutlined/>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className={"scroller"}>
                {eatingCategoryItemsList.map((item) => {
                    return (
                        <div className={"eating-category-div"}
                             key={item}
                             style={{background: item === eatingCategorySelected ? "#FF00C7" : "rgba(68, 68, 68, 0.1)"}}
                             onClick={() => {
                                 eatingCategoryClicked(item)
                             }}>
                            <p id={"eating-category-item-id"}
                               style={{color: item === eatingCategorySelected ? "white" : "#747474"}}>
                                {item}
                            </p>
                        </div>
                    );
                })}
            </div>
            {eatingItems.map((item, index) => {
                return (
                    <div id={"eating-item-main-div"} key={item.name}>
                        <Box sx={{flexGrow: 1}}>
                            <Grid container spacing={3}>
                                <Grid item xs style={{paddingTop: "9px", paddingLeft: "33px"}}>
                                    <img src={"./assets/" + item.image} width={"52px"} alt={item.name}/>
                                </Grid>
                                <Grid item xs={7} style={{paddingTop: "4px", paddingLeft: "10px"}}>
                                    <p id={"eating-item-name"}>{item.name}</p>
                                    <br/>
                                    <s id={"eating-item-strike-price"}>$ {item.sPrice}</s> <span
                                    id={"eating-item-price"}>$ {item.price}</span>
                                </Grid>
                                <Grid item xs>
                                    <div onClick={() => {
                                        updatingHearts(item.id);
                                    }}>
                                        {eatingItems[index].heart === false ?
                                            <HeartOutlined/> :
                                            <HeartFilled style={{color: "#FA5D5D"}}/>}
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                );
            })}

        </div>
    );
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}