import React, {useState} from 'react';
import {Grid} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {ActionCreators} from "../../actions/userActions";
import moment from "moment";
import ApiCalendar from "react-google-calendar-api";
import Loader from "react-loader-spinner";


function Summary(props) {
    const history = useHistory()
    const dispatch = useDispatch();
    const data = useSelector(state => state.user)
    const [bookingDone, setBookingDone] = useState(false)
    const [bookingProcessing, setBookingProcessing] = useState(false)
    const [bookingFail,setBookingFail] = useState(false)
    const confirmBooking = () => {

        let {time: slotTime, date} = data;
        let hour = parseInt(slotTime.split(" ")[0].split(":")[0]);
        if (slotTime.split(" ")[1] === "pm") {
            hour += 12;
        }
        let minute = parseInt(slotTime.split(" ")[0].split(":")[1]);

        let startDate = moment(date, "DD-MM-YYYY").set({
            hour: hour,
            minute: minute,
        });

        let endDate = moment(date, "DD-MM-YYYY").set({
            hour: minute ? hour + 1 : hour,
            minute: minute ? 0 : 30,
        });
        setBookingProcessing(true)
        ApiCalendar.createEvent(
            {
                summary: `Book the meeting on ${data.room.label}`,
                description: data.description,
                start: {
                    dateTime: startDate.toISOString(),
                    timeZone: "Asia/Kolkata",
                },
                end: {
                    dateTime: endDate.toISOString(),
                    timeZone: "Asia/Kolkata",
                },
            },
            "primary"
        )
            .then((resp) => {
                setBookingProcessing(false)
                setBookingDone(true)
            })
            .catch((e) => {
                setBookingProcessing(false)
                setBookingDone(true)
                setBookingFail(true)
            });
    }
    return (
        <div style={{
            margin: "10px auto",
            width: "50%",
            fontSize: 25
        }}>
            <h2>Booking Summary</h2>
            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        Name:
                    </Grid>
                    <Grid item xs={4}>
                        {data.user.name}
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        Email:
                    </Grid>
                    <Grid item xs={4}>
                        {data.user.email}
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        Meeting Room:
                    </Grid>
                    <Grid item xs={4}>
                        {data.room.label}
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        Date:
                    </Grid>
                    <Grid item xs={4}>
                        {data.date}
                    </Grid>
                </Grid>
                <Grid container item xs={12} spacing={3}>
                    <Grid item xs={4}>
                        Slot:
                    </Grid>
                    <Grid item xs={4}>
                        {data.time}
                    </Grid>
                </Grid>
            </Grid>
            <br/>
            {bookingFail&& <h3>Booking Failed, Retry</h3>}
            {bookingProcessing ?
                <div style={{margin: "0 auto"}}>
                    <Loader
                        type="Puff"
                        color="#F50057"
                        height={100}
                        width={100}
                        timeout={3000} //3 secs
                    />
                </div>
                : <div>
                    {bookingDone ?
                        <>
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{width: "100%"}}
                                onClick={() => {
                                    history.push("/bookingDetails")
                                    dispatch(ActionCreators.clear())
                                }}
                            >
                                Book More
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                style={{width: "100%"}}
                                onClick={()=> {
                                    ApiCalendar.handleSignoutClick()
                                }}
                            >
                                Finish
                            </Button>
                        </>
                        :
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{width: "100%"}}
                            onClick={confirmBooking}
                        >
                            Confirm Booking
                        </Button>}
                </div>}
        </div>
    );
}

export default Summary;