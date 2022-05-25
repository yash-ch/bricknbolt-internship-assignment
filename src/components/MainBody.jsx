import "../css/MainBody.css";
import {Space} from 'antd';
import {EnvironmentFilled, ArrowRightOutlined, StarFilled} from "@ant-design/icons";
import {Form} from 'antd';
import Grid from '@mui/material/Grid';
import {useState} from "react";
import {Box} from "@mui/material";

export default function MainBody() {

    const [star, setStar] = useState(0);

    const onFinish = (values) => {
        console.log("Searching :", document.getElementById("location").value);
    };

    const updateStarNo = (value) => {
        setStar(value);
    }
    return (
        <div>
            <div className={"image-div"}>
                <div className={"location-div space-align-container"}>
                    <Space align="center" style={{paddingLeft: "8px"}}>
                        <Box sx={{flexGrow: 1}}>
                            <Grid container spacing={4}>
                                <Grid item xs>
                                    <div className={"red-circle-location"}>
                                        <div className="space-align-block">
                                            <Space align="center">
                                                <EnvironmentFilled style={{fontSize: '16px', color: '#ffffff'}}/>
                                            </Space>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={7}>
                                    <div className="outer">
                                        <div className="middle">
                                            <div className="inner">
                                                <Form
                                                    wrapperCol={{span: 24}}
                                                    onFinish={onFinish}
                                                    autoComplete="off"
                                                >
                                                    <Form.Item>
                                                        <input id={"location"} placeholder={"See location on map"}
                                                               style={{border: "0"}}/>
                                                    </Form.Item>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs>
                                    <div className="outer">
                                        <div className="middle">
                                            <div className="inner" onClick={onFinish} style={{cursor: "pointer"}}>
                                                <ArrowRightOutlined style={{fontSize: "20px"}}/>
                                            </div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Space>
                </div>
            </div>
            <div>

                <p id={"monica"}>
                    Monica Gamage Shop
                </p>
                <p id={"wattala"}>
                    Wattala, Sri Lanka
                </p>
                <div className={"stars"}>
                    {[1, 2, 3].map((starNo) => {
                        return (
                            <div onClick={() => {
                                updateStarNo(starNo)
                            }} style={{float: "left"}} key={starNo}>
                                <StarFilled style={{color: starNo > star ? "#C4C4C4" : "#FA5D5D"}}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}