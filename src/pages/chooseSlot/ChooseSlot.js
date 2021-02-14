import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import Button from "@material-ui/core/Button";
import TimeSlots from "./TimeSlots";
import "./ChooseSlot.css";
import {ActionCreators} from "../../actions/userActions";
import {useHistory} from "react-router-dom";

const ChooseSlot = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const prevTime = useSelector(state=>state.user.time)
    const prevDate = useSelector(state=>state.user.date)
    const [date, setDate] = useState(prevDate?new Date(moment(prevDate,"DD-MM-YYYY").toDate()):new Date());
    const [slotTime, setSlotTime] = useState(prevTime||null);
    const [dateSelected, setDateSelected] = useState(!!prevDate);



    return (
        <>
            <Calendar
                value={date}
                minDate={new Date()}
                onChange={(val) => {
                    setDate(val);
                    setDateSelected(true);
                }}
            />
            <p style={{textAlign: "center"}}>
                {moment(date).format("dddd, Do MMMM")}
            </p>
            <br/>
            <TimeSlots {...{slotTime, setSlotTime}} />
            <br/>
            <Button
                onClick={() => {
                    dispatch(ActionCreators.setMeetingTimings({
                        date:moment(date).format("DD-MM-YYYY"),
                        time: slotTime,
                    }))
                    history.push("/bookingSummary")
                }}
                variant="contained"
                color="secondary"
                disabled={!(dateSelected && slotTime)}
                style={{margin: "10px 40% 30px 40%", width: "20%"}}
            >
                BOOK APPOINTMENT
            </Button>
        </>
    );
};

export default ChooseSlot;
