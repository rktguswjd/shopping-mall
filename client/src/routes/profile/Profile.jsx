import React from "react";

const Profile = (props) => {
    return (
        <form>
            <input type="text" value="010_cm@naver.com" />
            <input type="text" value="현정" />
            <input type="text" value="010-3794-4084" />
            <input type="password" placeholder="변경할 비밀번호 입력" />
            <input type="password" placeholder="비밀번호 확인" />
            <button>변경하기</button>
        </form>
    );
};

export default Profile;
