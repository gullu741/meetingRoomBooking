import React, {useEffect, useState} from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import Login from "./pages/login/Login";
import ApiCalendar from "react-google-calendar-api";
import "react-notifications/lib/notifications.css";
import {useDispatch, useSelector} from "react-redux";
import NavBar from "./component/navBar/NavBar";
import {ActionCreators} from "./actions/userActions";
import Summary from "./pages/sumamry/Summary";
import MeetingRoomDetails from "./pages/meetingRoomDetails/MeetingRoomDetails";
import ChooseSlot from "./pages/chooseSlot/ChooseSlot";

function App() {
    const dispatch = useDispatch();
    const loggedIn = useSelector((state) => !!state.user.user);

    useEffect(() => {
        ApiCalendar.onLoad(() => {
            if (ApiCalendar.sign) {
                setData(true);
            }
            ApiCalendar.listenSign((val) => {
                setData(val);
            });
        });
    }, []);

    const setData = (loggedIn) => {
        if (loggedIn) {
            let user = window.gapi.auth2
                .getAuthInstance()
                .currentUser.get()
                .getBasicProfile();
            dispatch(
                ActionCreators.login({
                    name: user.getName(),
                    email: user.getEmail(),
                })
            );
        } else {
            dispatch(ActionCreators.logOut());
        }
    };

    return (
        <>
            <NavBar sign={loggedIn}/>
            <Router basename={"meetingRoomBooking"}>

                {!loggedIn ? (
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <Route render={() => <Redirect to="/"/>}/>
                    </Switch>
                ) : (
                    <Switch>
                        <Route path="/bookingDetails" component={MeetingRoomDetails}/>
                        <Route path="/bookingTiming" component={ChooseSlot}/>
                        <Route path="/bookingSummary" component={Summary}/>
                        <Route render={() => <Redirect to="/bookingDetails"/>}/>
                    </Switch>
                )}
            </Router>
        </>
    );
}

export default App;
