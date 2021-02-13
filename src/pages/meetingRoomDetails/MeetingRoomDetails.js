import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import {useHistory} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import "./MeetingRoomDetails.css";
import Button from "@material-ui/core/Button";
import {MenuItem} from "@material-ui/core";
import {ActionCreators} from "../../actions/userActions";

const MeetingRoomDetails = (props) => {
    const history = useHistory();
    const user = useSelector(state => state.user.user);
    const description = useSelector(state => state.user.description);
    const room = useSelector(state => state.user.room);
    const dispatch = useDispatch();

    const rooms = [
        "Training Room-1",
        "Training Room-2",
        "Training Room-3",
    ];

    const [meetingDesc, setMeetingDesc] = useState(description);
    const [meetingRoom, setMeetingRoom] = useState(room&&room.value);


    return (
        <div className={"meetingRoom"}>
            <h2> Meeting Room Booking </h2>

            <TextField
                id="select-room"
                select
                label="Meeting Room"
                placeholder="Select Meeting Room"
                value={meetingRoom}
                onChange={e => setMeetingRoom(e.target.value)}
                variant="outlined"
                style={{
                    margin:10
                }}
            >
                {rooms.map((option,idx) => (
                    <MenuItem key={idx} value={idx}>
                        {option}
                    </MenuItem>
                ))}
            </TextField>

            <TextField
                id="username"
                label="Name"
                style={{margin: 10}}
                placeholder="Enter Your Name"
                variant="outlined"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                value={user.name}
                disabled
            />
            <TextField
                label="Meeting Description"
                style={{margin: 10}}
                placeholder="Enter meeting description"
                margin="normal"
                value={meetingDesc}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => setMeetingDesc(e.target.value)}
                variant="outlined"
            />
            <br/>
            <Button
                variant="contained"
                color="secondary"
                disabled={!(meetingRoom!== null && meetingDesc)}
                style={{
                    margin:10
                }}
                onClick={() => {
                    dispatch(
                        ActionCreators.setMeetingDetails({
                            room: {label : rooms[meetingRoom],value:meetingRoom},
                            description: meetingDesc,
                        })
                    );
                    history.push("/bookingTiming");
                }}
            >
                Next
            </Button>
        </div>
    );
};

export default MeetingRoomDetails;
