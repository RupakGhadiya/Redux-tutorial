// StatusComponent.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { setData, setStatus } from "./authSlice";

const StatusComponent: React.FC = () => {
  const status = useSelector((state: RootState) => state.auth.status); // Access global status
  const dispatch: AppDispatch = useDispatch();

  //   change state with on click
  const updateStatus = (newStatus: string) => {
    dispatch(setStatus(newStatus)); // Change global status
  };

  //   just to see the state
  const data = useSelector((state: RootState) => state.auth.data);

  //   change state outside the function
  dispatch(setData("Hello"));

  //   To see if login
  const IsLogin = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <div>
      {IsLogin ? (
        <>
          <h2>Current Data: {data}</h2>
          <h2>Current Status: {status}</h2>
          {/* method one with onclick and function  */}
          <button onClick={() => updateStatus("loading")}>
            Set Status to Loading
          </button>

          {/* method one with onclick without function  */}
          <button onClick={() => dispatch(setStatus("Success"))}>
            Set Status to Success
          </button>
        </>
      ) : null}
    </div>
  );
};

export default StatusComponent;
