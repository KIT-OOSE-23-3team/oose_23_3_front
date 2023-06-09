import React from "react";
import './HistoryCheck.css'
import axios from "axios";

const UserCheck = () => {
    return(
        <div className="historyCheck">
            <div className="topbar">전체 회원 조회</div>
                <div className="smallbox">
                    <ul>
                        <li>전체 회원이 나올 자리</li>
                    </ul>
                </div>
            </div>
        );
}
export default UserCheck;